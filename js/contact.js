document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    const formStatus = document.getElementById('formStatus');
    
    if (contactForm) {
        contactForm.addEventListener('submit', async function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(contactForm);
            
            // Disable submit button during submission
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            submitBtn.disabled = true;
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
            
            try {
                // Send form data to Formspree
                const response = await fetch(contactForm.action, {
                    method: 'POST',
                    body: formData,
                    headers: {
                        'Accept': 'application/json'
                    }
                });
                
                if (response.ok) {
                    // Show success message
                    formStatus.textContent = 'Thank you! Your message has been sent successfully. I will get back to you soon.';
                    formStatus.className = 'form-status success';
                    contactForm.reset();
                } else {
                    // Show error message
                    formStatus.textContent = 'Oops! There was a problem sending your message. Please try again later.';
                    formStatus.className = 'form-status error';
                }
            } catch (error) {
                // Show error message
                formStatus.textContent = 'Oops! There was a network error. Please check your connection and try again.';
                formStatus.className = 'form-status error';
            } finally {
                // Re-enable submit button
                submitBtn.disabled = false;
                submitBtn.innerHTML = '<i class="fas fa-paper-plane"></i> Send Message';
                
                // Scroll to form status
                formStatus.scrollIntoView({ behavior: 'smooth', block: 'center' });
                
                // Hide status message after 5 seconds
                setTimeout(() => {
                    formStatus.style.opacity = '0';
                    setTimeout(() => {
                        formStatus.style.display = 'none';
                        formStatus.style.opacity = '1';
                    }, 300);
                }, 5000);
            }
        });
    }
    
    // Animate contact sections when scrolling
    const contactSections = document.querySelectorAll('.contact-method, .contact-form-container, .cta-content');
    const contactObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = 1;
                    entry.target.style.transform = 'translateY(0)';
                }, index * 100);
            }
        });
    }, { threshold: 0.1 });
    
    contactSections.forEach(section => {
        section.style.opacity = 0;
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'all 0.5s ease';
        contactObserver.observe(section);
    });
});


// Add this to your existing contact.js file

// FAQ Accordion Functionality
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    
    question.addEventListener('click', () => {
        // Close all other items
        faqItems.forEach(otherItem => {
            if (otherItem !== item) {
                otherItem.classList.remove('active');
            }
        });
        
        // Toggle current item
        item.classList.toggle('active');
    });
});

// Animate new elements when scrolling
const newSections = document.querySelectorAll('.profile-card, .faq-item, .availability-calendar');
const newObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
            }, index * 100);
        }
    });
}, { threshold: 0.1 });

newSections.forEach(section => {
    section.style.opacity = 0;
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'all 0.5s ease';
    newObserver.observe(section);
});