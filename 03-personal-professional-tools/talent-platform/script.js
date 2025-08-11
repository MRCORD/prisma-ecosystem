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
        
        // Phase 1: Send to email (simulate)
        sendToTeam(data)
            .then(() => {
                showSuccess();
                form.reset();
            })
            .catch(() => {
                showError();
            })
            .finally(() => {
                // Reset button state
                submitBtn.disabled = false;
                btnText.style.display = 'inline';
                btnLoading.style.display = 'none';
            });
    });

    function sendToTeam(data) {
        // Phase 1: Simple email simulation
        // In production, this would be replaced with actual email service
        return new Promise((resolve, reject) => {
            // Simulate API call
            setTimeout(() => {
                console.log('Form data submitted:', data);
                
                // Create email content
                const emailContent = formatEmailContent(data);
                console.log('Email content:', emailContent);
                
                // For Phase 1, we'll log to console and show success
                // This would be replaced with actual email service in production
                resolve();
            }, 1500);
        });
    }

    function formatEmailContent(data) {
        const isHiring = data.intent === 'hiring';
        
        let content = `
Nueva solicitud de lead - Prisma Talent

INFORMACIÓN DEL LEAD
===================
Nombre: ${data.contact_name}
Posición: ${data.position}
Empresa: ${data.company_name}
Email: ${data.contact_email}
Teléfono: ${data.contact_phone}

INTENCIÓN
=========
Tipo de solicitud: ${data.intent === 'hiring' ? 'Busca contratar talento' : 'Quiere conversar sobre el servicio'}
`;

        if (isHiring) {
            content += `
DETALLES DE LA POSICIÓN
=====================
Título del rol: ${data.role_title || 'No especificado'}
Tipo de rol: ${data.role_type || 'No especificado'}
Nivel: ${data.level || 'No especificado'}
Modalidad: ${data.work_mode || 'No especificado'}
Urgencia: ${data.urgency || 'No especificado'}
`;
        }

        content += `
LEGAL
=====
Términos aceptados: ${data.terms_acceptance ? 'Sí' : 'No'}

---
Enviado desde: prisma-talent-web
Fecha: ${new Date().toLocaleString('es-PE')}
        `;
        
        return content;
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

    function showError() {
        alert('Hubo un error al enviar la solicitud. Por favor, intenta nuevamente o contáctanos directamente a talent@prisma.pe');
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
        const isValid = field.checkValidity();
        
        if (!isValid) {
            field.style.borderColor = 'var(--color-pink)';
        } else {
            field.style.borderColor = 'var(--color-gray-300)';
        }
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