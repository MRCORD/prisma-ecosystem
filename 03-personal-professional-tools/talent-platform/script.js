// Progressive lead capture form with conditional logic
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('talentRequestForm');
    const submitBtn = document.getElementById('submitBtn');
    const btnText = submitBtn.querySelector('.btn-text');
    const btnLoading = submitBtn.querySelector('.btn-loading');
    
    // Form sections
    const positionSection = document.getElementById('positionSection');
    const intentRadios = document.querySelectorAll('input[name="intent"]');

    // Intent handling: Show/hide position section based on selection
    intentRadios.forEach(radio => {
        radio.addEventListener('change', function() {
            if (this.value === 'hiring') {
                positionSection.style.display = 'block';
                positionSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
                // Make position fields required
                makePositionFieldsRequired(true);
            } else {
                positionSection.style.display = 'none';
                // Make position fields optional
                makePositionFieldsRequired(false);
            }
        });
    });

    // Function to toggle required status of position fields
    function makePositionFieldsRequired(required) {
        const positionFields = positionSection.querySelectorAll('input, select');
        positionFields.forEach(field => {
            if (required) {
                field.setAttribute('required', '');
            } else {
                field.removeAttribute('required');
                field.value = ''; // Clear values when not required
            }
        });
    }

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Show loading state
        submitBtn.disabled = true;
        btnText.style.display = 'none';
        btnLoading.style.display = 'inline';
        
        // Collect form data
        const formData = new FormData(form);
        const data = {};
        
        for (let [key, value] of formData.entries()) {
            data[key] = value;
        }
        
        // Validate form data
        const validationErrors = validateForm(data);
        
        if (validationErrors.length > 0) {
            // Show validation errors
            const errorMessage = 'Por favor corrige los siguientes errores:<br>• ' + validationErrors.join('<br>• ');
            showError(errorMessage);
            
            // Reset button state
            submitBtn.disabled = false;
            btnText.style.display = 'inline';
            btnLoading.style.display = 'none';
            return;
        }
        
        // Send to Airtable
        sendToTeam(data)
            .then((result) => {
                // Send confirmation email simulation
                const email = data.contact_email;
                const name = data.contact_name;
                const isHiring = data.intent === 'hiring';
                sendConfirmationEmail(email, name, isHiring);
                
                showSuccess();
                form.reset();
                // Hide position section after reset
                positionSection.style.display = 'none';
            })
            .catch((error) => {
                console.error('Submission error:', error);
                let errorMessage = 'Hubo un error al enviar la solicitud.';
                
                if (error.message.includes('Campo requerido faltante')) {
                    errorMessage = 'Por favor completa todos los campos requeridos.';
                } else if (error.message.includes('400')) {
                    errorMessage = 'Algunos datos del formulario no son válidos. Verifica tu información.';
                } else if (error.message.includes('401') || error.message.includes('403')) {
                    errorMessage = 'Error de autorización. Por favor intenta más tarde.';
                } else if (error.message.includes('429')) {
                    errorMessage = 'Has enviado muchas solicitudes. Intenta nuevamente en unos minutos.';
                } else if (error.message.includes('network') || error.name === 'TypeError') {
                    errorMessage = 'Error de conexión. Verifica tu internet e intenta nuevamente.';
                }
                
                showError(errorMessage);
            })
            .finally(() => {
                // Reset button state
                submitBtn.disabled = false;
                btnText.style.display = 'inline';
                btnLoading.style.display = 'none';
            });
    });

    function sendToTeam(data) {
        // Send to Airtable API
        return submitToAirtable(data);
    }

    // Airtable API Integration
    async function submitToAirtable(formData) {
        const BASE_ID = 'appnnZaIfMLUvNgLk';
        const TABLE_ID = 'tblBwtrN6H2rxXn8b';
        const AIRTABLE_API_URL = `https://api.airtable.com/v0/${BASE_ID}/${TABLE_ID}`;
        const API_TOKEN = 'patjYEERerA7ddA1i.34604c1f3ac3cd546512e909d4d8f286d453fbad369739b1575721a96d836c36';
        
        
        try {
            // Validate required fields
            const requiredFields = ['contact_name', 'position', 'company_name', 'contact_email', 'contact_phone', 'intent'];
            for (const field of requiredFields) {
                if (!formData[field] || formData[field].trim() === '') {
                    throw new Error(`Campo requerido faltante: ${field}`);
                }
            }

            // Map form data to Airtable field structure
            const airtableRecord = {
                fields: {
                    [getFieldId('Full Name')]: formData.contact_name,
                    [getFieldId('Position')]: formData.position,
                    [getFieldId('Company')]: formData.company_name,
                    [getFieldId('Email')]: formData.contact_email,
                    [getFieldId('Phone')]: formData.contact_phone,
                    [getFieldId('Intent')]: getIntentSelectId(formData.intent),
                    [getFieldId('Submission Date')]: new Date().toISOString(),
                    [getFieldId('Status')]: getStatusSelectId('New'),
                    [getFieldId('Source')]: getSourceSelectId('Website Form')
                }
            };

            // Add conditional fields for hiring intent
            if (formData.intent === 'hiring') {
                // Validate hiring-specific fields
                const hiringFields = ['role_title', 'role_type', 'level', 'work_mode', 'urgency'];
                for (const field of hiringFields) {
                    if (!formData[field] || formData[field].trim() === '') {
                        throw new Error(`Campo de contratación requerido faltante: ${field}`);
                    }
                }

                // Add hiring fields to record (stored in a JSON string or separate fields)
                airtableRecord.fields['Role Details'] = JSON.stringify({
                    title: formData.role_title,
                    type: formData.role_type,
                    level: formData.level,
                    workMode: formData.work_mode,
                    urgency: formData.urgency
                });
            }

            const response = await fetch(AIRTABLE_API_URL, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${API_TOKEN}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(airtableRecord)
            });

            if (!response.ok) {
                const errorData = await response.json();
                console.error('Airtable API Error:', errorData);
                throw new Error(`Error ${response.status}: ${errorData.error?.message || 'Error en servidor'}`);
            }

            const result = await response.json();
            return result;

        } catch (error) {
            console.error('Error submitting to Airtable:', error);
            throw error;
        }
    }

    // Helper function to get field IDs
    function getFieldId(fieldName) {
        const fieldIds = {
            'Full Name': 'fldLNApnAc4MA5TE6',
            'Submission Date': 'fldTKU239YgDB5Mx2',
            'Status': 'fld2JiwiJEa7Dpj9b',
            'Position': 'fldrh1RDSQx7Wm4u1',
            'Company': 'fldVwEpFgcpdYmqRC',
            'Email': 'fldJeiN3O87H5ajkC',
            'Phone': 'fldOXECXyORutCxYV',
            'Intent': 'fldzazkarhRXelYnE',
            'Lead Score': 'fldiLMwgmo1aesgry',
            'Source': 'fldmnRzo8aDuPmuDC'
        };
        return fieldIds[fieldName];
    }

    // Helper function to get status select IDs
    function getStatusSelectId(status) {
        const statusIds = {
            'New': 'sel5tVXs22wLZRMtJ',
            'Contacted': 'seleGBRVydQ226YRy',
            'Qualified': 'sel9IdpAosOjAfSwJ',
            'In Progress': 'selpweOaMjswdXHFl',
            'Closed': 'selfYV6BgUg6G28hH'
        };
        return statusIds[status];
    }

    // Helper function to get intent select IDs
    function getIntentSelectId(intent) {
        const intentIds = {
            'hiring': 'selBJaQ4Pvj5uUeLe',
            'conversation': 'selke357vNXGYm2MC'
        };
        return intentIds[intent];
    }

    // Helper function to get source select IDs
    function getSourceSelectId(source) {
        const sourceIds = {
            'Website Form': 'sel1JvMutnI84M7Dr',
            'Referral': 'seltaCnUaUdqGOgKL',
            'Event': 'selvv1fxaNyKfkUc7'
        };
        return sourceIds[source];
    }


    function showSuccess() {
        // Get the selected intent to customize message
        const intent = document.querySelector('input[name="intent"]:checked').value;
        const isHiring = intent === 'hiring';
        
        // Create success message
        const successDiv = document.createElement('div');
        successDiv.className = 'success-message show';
        
        if (isHiring) {
            successDiv.innerHTML = `
                <h3 style="color: var(--color-purple); margin-bottom: var(--space-sm);">
                    ✅ ¡Listo! Tu solicitud de búsqueda fue enviada
                </h3>
                <p>Te contactaremos en <span class="metrics-display">≤24 horas</span> para una llamada de scoping de 15 minutos.</p>
                <p style="font-size: 0.875rem; color: var(--color-gray-600); margin-top: var(--space-sm);">
                    Revisaremos los detalles de la posición y comenzaremos el sourcing en nuestra comunidad de +2500 profesionales.
                </p>
            `;
        } else {
            successDiv.innerHTML = `
                <h3 style="color: var(--color-purple); margin-bottom: var(--space-sm);">
                    ✅ ¡Perfecto! Nos pondremos en contacto
                </h3>
                <p>Te contactaremos en <span class="metrics-display">≤24 horas</span> para una conversación de 15 minutos.</p>
                <p style="font-size: 0.875rem; color: var(--color-gray-600); margin-top: var(--space-sm);">
                    Conversaremos sobre cómo Prisma Talent puede ayudarte con tus necesidades de hiring.
                </p>
            `;
        }
        
        // Insert after form
        form.parentNode.insertBefore(successDiv, form.nextSibling);
        
        // Scroll to success message
        successDiv.scrollIntoView({ behavior: 'smooth', block: 'center' });
        
        // Send confirmation email (simulate)
        const email = document.getElementById('contact_email').value;
        const name = document.getElementById('contact_name').value;
        sendConfirmationEmail(email, name, isHiring);
    }

    function showError(message = null) {
        // Create error message
        const errorDiv = document.createElement('div');
        errorDiv.className = 'error-message show';
        
        const defaultMessage = 'Hubo un error al enviar la solicitud. Por favor, intenta nuevamente o contáctanos directamente.';
        const errorMessage = message || defaultMessage;
        
        errorDiv.innerHTML = `
            <h3>❌ Error al enviar</h3>
            <div>${errorMessage}</div>
            <p style="font-size: 0.875rem; color: var(--color-gray-600); margin-top: var(--space-sm);">
                Si el problema persiste, contáctanos directamente a 
                <a href="mailto:hello@getprisma.io" style="color: var(--color-purple);">hello@getprisma.io</a>
            </p>
            <button type="button" onclick="this.parentElement.remove()" 
                    style="margin-top: var(--space-sm); padding: 8px 12px; background: var(--color-gray-100); border: 1px solid var(--color-gray-300); border-radius: 6px; cursor: pointer;">
                Cerrar
            </button>
        `;
        
        // Insert after form
        form.parentNode.insertBefore(errorDiv, form.nextSibling);
        
        // Scroll to error message
        errorDiv.scrollIntoView({ behavior: 'smooth', block: 'center' });
        
        // Auto-hide after 10 seconds
        setTimeout(() => {
            if (errorDiv.parentNode) {
                errorDiv.remove();
            }
        }, 10000);
    }

    function sendConfirmationEmail(email, name, isHiring) {
        // Phase 1: Simulate confirmation email
        const greeting = name ? `¡Hola ${name.split(' ')[0]}!` : '¡Hola!';
        
        let confirmationContent = `
${greeting}

Recibimos tu solicitud en Prisma Talent. 
`;

        if (isHiring) {
            confirmationContent += `
Te contactaremos en las próximas 24 horas para una llamada de scoping de 15 minutos donde:

✅ Revisaremos los detalles específicos de la posición
✅ Crearemos el Position Blueprint y Job Description 
✅ Definiremos el timeline para tu shortlist (≤10 días)

¿Qué sigue?
- Llamada de scoping de 15 min 
- Position Blueprint + JD (24h)
- Sourcing en nuestra comunidad de +2500 profesionales
- Shortlist con evidencia en ≤10 días laborales

Mientras tanto, ya estamos identificando candidatos potenciales en nuestra comunidad.
`;
        } else {
            confirmationContent += `
Te contactaremos en las próximas 24 horas para una conversación de 15 minutos donde:

✅ Entenderemos tus necesidades de talent acquisition
✅ Te explicaremos nuestro modelo community-driven
✅ Exploraremos cómo podemos ayudarte

¿Qué sigue?
- Conversación de 15 min (sin compromiso)
- Te mostraremos casos de éxito y nuestro proceso
- Si hay fit: definimos próximos pasos

Estamos emocionados de conocerte y ayudarte con tus necesidades de hiring.
`;
        }

        confirmationContent += `
Saludos,
Equipo Prisma Talent

---
Community-validated hiring para Product, Growth, Design y Tech
Lima, Perú • talent@prisma.pe
        `;
        
        console.log('Confirmation email sent to:', email);
        console.log('Email content:', confirmationContent);
    }

    // Form validation enhancements
    const requiredFields = form.querySelectorAll('[required]');
    
    requiredFields.forEach(field => {
        field.addEventListener('blur', function() {
            validateField(field);
        });
    });

    function validateField(field) {
        let isValid = field.checkValidity();
        let errorMessage = '';

        // Additional custom validation
        if (field.type === 'email' && field.value) {
            isValid = validateEmail(field.value);
            if (!isValid) {
                errorMessage = 'Ingresa un email válido';
            }
        } else if (field.type === 'tel' && field.value) {
            isValid = validatePhone(field.value);
            if (!isValid) {
                errorMessage = 'Ingresa un teléfono válido (ej: +51 999 999 999)';
            }
        } else if (field.required && !field.value.trim()) {
            isValid = false;
            errorMessage = 'Este campo es requerido';
        }

        // Remove existing error message
        const existingError = field.parentNode.querySelector('.field-error');
        if (existingError) {
            existingError.remove();
        }

        // Update field styling
        if (!isValid) {
            field.style.borderColor = 'var(--color-pink)';
            
            // Add error message
            if (errorMessage) {
                const errorSpan = document.createElement('span');
                errorSpan.className = 'field-error';
                errorSpan.style.cssText = 'color: var(--color-pink); font-size: 0.75rem; margin-top: 4px; display: block;';
                errorSpan.textContent = errorMessage;
                field.parentNode.appendChild(errorSpan);
            }
        } else {
            field.style.borderColor = 'var(--color-gray-300)';
        }
        
        return isValid;
    }

    // Enhanced form validation before submission
    function validateForm(data) {
        const errors = [];
        
        // Required field validation
        const requiredFields = {
            'contact_name': 'Nombre completo',
            'position': 'Posición',
            'company_name': 'Empresa',
            'contact_email': 'Email',
            'contact_phone': 'Teléfono',
            'intent': 'Intención'
        };

        for (const [field, label] of Object.entries(requiredFields)) {
            if (!data[field] || data[field].trim() === '') {
                errors.push(`${label} es requerido`);
            }
        }

        // Email validation
        if (data.contact_email && !validateEmail(data.contact_email)) {
            errors.push('Email no es válido');
        }

        // Phone validation
        if (data.contact_phone && !validatePhone(data.contact_phone)) {
            errors.push('Teléfono no es válido');
        }

        // Hiring-specific validation
        if (data.intent === 'hiring') {
            const hiringFields = {
                'role_title': 'Título del rol',
                'role_type': 'Tipo de rol',
                'level': 'Nivel',
                'work_mode': 'Modalidad',
                'urgency': 'Urgencia'
            };

            for (const [field, label] of Object.entries(hiringFields)) {
                if (!data[field] || data[field].trim() === '') {
                    errors.push(`${label} es requerido para búsquedas de talento`);
                }
            }
        }

        // Terms acceptance
        if (!data.terms_acceptance) {
            errors.push('Debes aceptar los términos y condiciones');
        }

        return errors;
    }

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Simple analytics tracking (Phase 1)
    function trackEvent(event, data = {}) {
        console.log('Analytics event:', event, data);
        // In Phase 2, this would connect to actual analytics
    }

    // Track form interactions
    form.addEventListener('focusin', function(e) {
        if (e.target.matches('input, select, textarea')) {
            trackEvent('form_field_focus', { field: e.target.name });
        }
    });

    // Track button clicks
    document.querySelectorAll('button, .btn-primary').forEach(btn => {
        btn.addEventListener('click', function(e) {
            trackEvent('button_click', { 
                button: this.textContent.trim(),
                url: window.location.href 
            });
        });
    });
});

// Phase 1: Simple utility functions
function formatCurrency(value) {
    return value.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function validatePhone(phone) {
    // Simple validation for Peruvian phone numbers
    const re = /^(\+?51)?[0-9]{9}$/;
    return re.test(phone.replace(/\s/g, ''));
}