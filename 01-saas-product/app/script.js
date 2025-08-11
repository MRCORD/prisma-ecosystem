// Prisma PRD Builder - Landing Page JavaScript

// Wait for DOM to be ready
document.addEventListener('DOMContentLoaded', function() {
    
    // Initialize all modules
    initNavigation();
    initSmoothScroll();
    initAgentCards();
    initROICalculator();
    initPricingToggle();
    initFAQ();
    initConversionTracking();
    initAnimations();
    initFormValidation();
    
});

// Navigation functionality
function initNavigation() {
    const nav = document.querySelector('.nav');
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    // Sticky navigation on scroll
    let lastScroll = 0;
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 100) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
        
        // Hide/show navigation on scroll
        if (currentScroll > lastScroll && currentScroll > 500) {
            nav.style.transform = 'translateY(-100%)';
        } else {
            nav.style.transform = 'translateY(0)';
        }
        
        lastScroll = currentScroll;
    });
    
    // Mobile menu toggle
    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            mobileMenuToggle.classList.toggle('active');
        });
    }
}

// Smooth scrolling for anchor links
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offset = 80; // Navigation height
                const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - offset;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Agent cards interaction
function initAgentCards() {
    const agentCards = document.querySelectorAll('.agent-card');
    
    agentCards.forEach(card => {
        card.addEventListener('click', function() {
            // Remove active class from all cards
            agentCards.forEach(c => c.classList.remove('active'));
            // Add active class to clicked card
            this.classList.add('active');
            
            // Track agent card click
            trackEvent('Agent Card', 'Click', this.querySelector('h3').textContent);
        });
    });
}

// ROI Calculator
function initROICalculator() {
    const prdsPerMonth = document.getElementById('prds-per-month');
    const hoursPerPrd = document.getElementById('hours-per-prd');
    const costPerHour = document.getElementById('cost-per-hour');
    
    const hoursSaved = document.getElementById('hours-saved');
    const moneySaved = document.getElementById('money-saved');
    const annualROI = document.getElementById('annual-roi');
    
    function calculateROI() {
        const prds = parseInt(prdsPerMonth.value) || 8;
        const hours = parseInt(hoursPerPrd.value) || 5;
        const cost = parseInt(costPerHour.value) || 75;
        
        // Calculate savings (assuming 70% time reduction)
        const monthlySavedHours = Math.round(prds * hours * 0.7);
        const monthlySavedMoney = monthlySavedHours * cost;
        const annualSavings = monthlySavedMoney * 12;
        
        // Update display with animation
        animateValue(hoursSaved, monthlySavedHours);
        animateValue(moneySaved, monthlySavedMoney, '$');
        animateValue(annualROI, annualSavings, '$');
        
        // Update chart if exists
        updateROIChart(prds, hours, monthlySavedHours);
    }
    
    // Add event listeners
    [prdsPerMonth, hoursPerPrd, costPerHour].forEach(input => {
        if (input) {
            input.addEventListener('input', calculateROI);
        }
    });
    
    // Initial calculation
    if (prdsPerMonth && hoursPerPrd && costPerHour) {
        calculateROI();
    }
}

// Animate number changes
function animateValue(element, endValue, prefix = '') {
    if (!element) return;
    
    const startValue = parseInt(element.textContent.replace(/[^0-9]/g, '')) || 0;
    const duration = 1000;
    const startTime = Date.now();
    
    function update() {
        const currentTime = Date.now();
        const progress = Math.min((currentTime - startTime) / duration, 1);
        
        const currentValue = Math.floor(startValue + (endValue - startValue) * progress);
        element.textContent = prefix + currentValue.toLocaleString();
        
        if (progress < 1) {
            requestAnimationFrame(update);
        }
    }
    
    update();
}

// ROI Chart (simplified visualization)
function updateROIChart(prds, hours, savedHours) {
    const canvas = document.getElementById('roi-chart');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    const width = canvas.width = canvas.offsetWidth;
    const height = canvas.height = canvas.offsetHeight;
    
    // Clear canvas
    ctx.clearRect(0, 0, width, height);
    
    // Draw simple bar chart
    const barWidth = width / 3;
    const maxHeight = height - 40;
    const totalHours = prds * hours;
    
    // Current process bar
    ctx.fillStyle = '#666666';
    ctx.fillRect(0, height - (totalHours / totalHours * maxHeight), barWidth - 10, totalHours / totalHours * maxHeight);
    
    // With Prisma bar
    ctx.fillStyle = '#47FFBF';
    ctx.fillRect(barWidth, height - ((totalHours - savedHours) / totalHours * maxHeight), barWidth - 10, (totalHours - savedHours) / totalHours * maxHeight);
    
    // Time saved bar
    ctx.fillStyle = '#8376FF';
    ctx.fillRect(barWidth * 2, height - (savedHours / totalHours * maxHeight), barWidth - 10, savedHours / totalHours * maxHeight);
    
    // Labels
    ctx.fillStyle = '#FFFFFF';
    ctx.font = '14px Inter';
    ctx.textAlign = 'center';
    ctx.fillText('Actual', barWidth / 2 - 5, height - 10);
    ctx.fillText('Con Prisma', barWidth * 1.5 - 5, height - 10);
    ctx.fillText('Tiempo Ahorrado', barWidth * 2.5 - 5, height - 10);
}

// Pricing toggle
function initPricingToggle() {
    const toggle = document.getElementById('pricing-toggle');
    const amounts = document.querySelectorAll('.amount[data-monthly][data-annual]');
    
    if (toggle) {
        toggle.addEventListener('change', function() {
            amounts.forEach(amount => {
                const monthly = amount.getAttribute('data-monthly');
                const annual = amount.getAttribute('data-annual');
                amount.textContent = this.checked ? annual : monthly;
            });
            
            // Track pricing toggle
            trackEvent('Pricing', 'Toggle', this.checked ? 'Annual' : 'Monthly');
        });
    }
}

// FAQ Accordion
function initFAQ() {
    const faqQuestions = document.querySelectorAll('.faq-question');
    
    faqQuestions.forEach(question => {
        question.addEventListener('click', function() {
            const faqItem = this.closest('.faq-item');
            const isActive = faqItem.classList.contains('active');
            
            // Close all FAQ items
            document.querySelectorAll('.faq-item').forEach(item => {
                item.classList.remove('active');
                item.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
            });
            
            // Toggle current item
            if (!isActive) {
                faqItem.classList.add('active');
                this.setAttribute('aria-expanded', 'true');
                
                // Track FAQ interaction
                trackEvent('FAQ', 'Open', this.textContent.trim());
            }
        });
    });
}

// Conversion tracking
function initConversionTracking() {
    // Track CTA clicks
    document.querySelectorAll('[data-action]').forEach(element => {
        element.addEventListener('click', function(e) {
            const action = this.getAttribute('data-action');
            
            // Track event
            trackEvent('CTA', 'Click', action);
            
            // For apply-early-access, let the link work normally (don't prevent default)
            if (action === 'apply-early-access') {
                return; // Let the link navigate to the waitlist
            }
            
            // For other actions, prevent default and handle
            e.preventDefault();
            
            // Handle different actions
            switch(action) {
                case 'start-free':
                case 'final-start-free':
                    showSignupModal('free');
                    break;
                case 'start-pro':
                    showSignupModal('pro');
                    break;
                case 'book-demo':
                    showDemoModal();
                    break;
                case 'contact-sales':
                case 'enterprise-contact':
                    showContactModal();
                    break;
                default:
                    console.log('Action:', action);
            }
        });
    });
    
    // Track scroll depth
    let scrollDepths = [25, 50, 75, 100];
    let triggeredDepths = [];
    
    window.addEventListener('scroll', throttle(() => {
        const scrollPercent = (window.scrollY + window.innerHeight) / document.documentElement.scrollHeight * 100;
        
        scrollDepths.forEach(depth => {
            if (scrollPercent >= depth && !triggeredDepths.includes(depth)) {
                triggeredDepths.push(depth);
                trackEvent('Scroll', 'Depth', depth + '%');
            }
        });
    }, 500));
    
    // Track time on page
    let timeOnPage = 0;
    setInterval(() => {
        timeOnPage += 5;
        if (timeOnPage === 30 || timeOnPage === 60 || timeOnPage === 120) {
            trackEvent('Engagement', 'Time on Page', timeOnPage + ' seconds');
        }
    }, 5000);
}

// Event tracking function
function trackEvent(category, action, label = null, value = null) {
    // Google Analytics 4
    if (typeof gtag !== 'undefined') {
        gtag('event', action, {
            'event_category': category,
            'event_label': label,
            'value': value
        });
    }
    
    // Console log for development
    console.log('Track Event:', { category, action, label, value });
    
    // You can add other analytics platforms here
}

// Show signup modal (placeholder)
function showSignupModal(plan) {
    console.log('Show signup modal for plan:', plan);
    // In production, this would open a real modal or redirect to signup
    alert(`¡Excelente decisión! Redirigiendo al registro para el plan ${plan}...`);
    trackEvent('Conversion', 'Signup Started', plan);
}

// Show demo modal (placeholder)
function showDemoModal() {
    console.log('Show demo modal');
    alert('¡Perfecto! Te contactaremos pronto para agendar una demo personalizada.');
    trackEvent('Conversion', 'Demo Requested');
}

// Show contact modal (placeholder)
function showContactModal() {
    console.log('Show contact modal');
    alert('¡Gracias por tu interés! Nuestro equipo de ventas te contactará en las próximas 24 horas.');
    trackEvent('Conversion', 'Sales Contact');
}

// Scroll animations
function initAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
                
                // Stagger animations for children
                const children = entry.target.querySelectorAll('.animate-child');
                children.forEach((child, index) => {
                    setTimeout(() => {
                        child.classList.add('animated');
                    }, index * 100);
                });
            }
        });
    }, observerOptions);
    
    // Observe elements
    document.querySelectorAll('.problem-card, .feature-card, .testimonial-card, .pricing-card, .agent-card').forEach(el => {
        observer.observe(el);
    });
}

// Form validation
function initFormValidation() {
    // Add validation to any forms on the page
    const forms = document.querySelectorAll('form');
    
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Basic validation
            const inputs = form.querySelectorAll('input[required]');
            let isValid = true;
            
            inputs.forEach(input => {
                if (!input.value.trim()) {
                    isValid = false;
                    input.classList.add('error');
                } else {
                    input.classList.remove('error');
                }
            });
            
            if (isValid) {
                // Submit form
                console.log('Form submitted');
                trackEvent('Form', 'Submit', form.id || 'Unknown');
            }
        });
    });
}

// Utility function: Throttle
function throttle(func, wait) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, wait);
        }
    };
}

// Add CSS for animations dynamically
const style = document.createElement('style');
style.textContent = `
    .animated {
        opacity: 1 !important;
        transform: translateY(0) !important;
    }
    
    .problem-card,
    .feature-card,
    .testimonial-card,
    .pricing-card,
    .agent-card {
        opacity: 0;
        transform: translateY(20px);
        transition: all 0.6s var(--ease-out);
    }
    
    .nav.scrolled {
        background: rgba(0, 0, 0, 0.95);
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
    }
    
    .nav-menu.active {
        display: flex;
        position: absolute;
        top: 100%;
        left: 0;
        right: 0;
        background: rgba(0, 0, 0, 0.95);
        flex-direction: column;
        padding: var(--space-xl);
        border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    }
    
    .mobile-menu-toggle.active span:nth-child(1) {
        transform: rotate(45deg) translate(5px, 5px);
    }
    
    .mobile-menu-toggle.active span:nth-child(2) {
        opacity: 0;
    }
    
    .mobile-menu-toggle.active span:nth-child(3) {
        transform: rotate(-45deg) translate(7px, -6px);
    }
    
    input.error {
        border-color: var(--color-error) !important;
    }
`;
document.head.appendChild(style);

// Performance optimization: Lazy load images
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// Add keyboard navigation for accessibility
document.addEventListener('keydown', (e) => {
    // Escape key closes modals
    if (e.key === 'Escape') {
        // Close any open modals
        document.querySelectorAll('.modal.active').forEach(modal => {
            modal.classList.remove('active');
        });
    }
    
    // Tab navigation improvements
    if (e.key === 'Tab') {
        document.body.classList.add('keyboard-nav');
    }
});

// Remove keyboard navigation indicator on mouse click
document.addEventListener('mousedown', () => {
    document.body.classList.remove('keyboard-nav');
});

// Page load performance tracking
window.addEventListener('load', () => {
    if (window.performance) {
        const perfData = window.performance.timing;
        const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
        trackEvent('Performance', 'Page Load Time', 'Landing Page', pageLoadTime);
    }
});