// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Add animation on scroll (will be enhanced as we add more sections)
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        }
    });
}, observerOptions);

// Will add more elements to observe as we build more sections
document.querySelectorAll('.hero-content, .hero-image').forEach(el => {
    observer.observe(el);
});


// Previous JavaScript remains the same

// Add project cards to the intersection observer
document.querySelectorAll('.project-card').forEach(card => {
    observer.observe(card);
});

// Add smooth hover effect for project cards
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        card.style.setProperty('--mouse-x', `${x}px`);
        card.style.setProperty('--mouse-y', `${y}px`);
    });
});


// Previous JavaScript remains the same

// Add animation for focus cards
document.querySelectorAll('.focus-card').forEach(card => {
    observer.observe(card);
});

// Animate the focus icons
document.querySelectorAll('.focus-icon').forEach(icon => {
    icon.addEventListener('mouseenter', () => {
        icon.style.transform = 'scale(1.1)';
        icon.style.transition = 'transform 0.3s ease';
    });
    
    icon.addEventListener('mouseleave', () => {
        icon.style.transform = 'scale(1)';
    });
});

// Previous JavaScript remains the same

// Add counter animation for metrics
function animateCounters() {
    const counters = document.querySelectorAll('.metric-value');
    const speed = 200; // Lower is faster
    
    counters.forEach(counter => {
        const target = +counter.getAttribute('data-count');
        const count = +counter.innerText;
        const increment = target / speed;
        
        if (count < target) {
            counter.innerText = Math.ceil(count + increment);
            setTimeout(animateCounters, 1);
        } else {
            counter.innerText = target;
        }
    });
}

// Only animate when section is in view
const impactObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateCounters();
            impactObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

const impactSection = document.querySelector('.impact-section');
if (impactSection) {
    impactObserver.observe(impactSection);
}

// Add testimonial cards to intersection observer
document.querySelectorAll('.testimonial-card').forEach(card => {
    observer.observe(card);
});


// Add this to your existing JavaScript

// Mobile menu toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
    });
});

// Sticky header on scroll
window.addEventListener('scroll', () => {
    const header = document.querySelector('.main-header');
    header.classList.toggle('scrolled', window.scrollY > 50);
});

// Set current year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// Form submission
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form values
        const formData = new FormData(contactForm);
        const data = Object.fromEntries(formData);
        
        // Here you would typically send the data to a server
        console.log('Form submitted:', data);
        
        // Show success message
        alert('Thank you for your message! I will get back to you soon.');
        contactForm.reset();
    });
}

// Add skills to intersection observer
document.querySelectorAll('.skill-category').forEach(category => {
    observer.observe(category);
});

// Add contact section to intersection observer
document.querySelectorAll('.contact-method, .contact-form').forEach(el => {
    observer.observe(el);
});


// Add these to your existing JavaScript

// Animate timeline items when scrolling
const timelineItems = document.querySelectorAll('.timeline-item');
if (timelineItems.length > 0) {
    const timelineObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = 1;
                    entry.target.style.transform = 'translateX(0)';
                }, index * 100);
            }
        });
    }, { threshold: 0.1 });

    timelineItems.forEach(item => {
        item.style.opacity = 0;
        item.style.transform = 'translateX(-20px)';
        item.style.transition = 'all 0.5s ease';
        timelineObserver.observe(item);
    });
}

// Smooth scroll for anchor links in about page
document.querySelectorAll('.about-page a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});


// Add these to your existing JavaScript

// Animate timeline items when scrolling
const timelineItems = document.querySelectorAll('.timeline-item');
if (timelineItems.length > 0) {
    const timelineObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = 1;
                    entry.target.style.transform = 'translateY(0)';
                }, index * 150);
            }
        });
    }, { threshold: 0.1 });

    timelineItems.forEach(item => {
        item.style.opacity = 0;
        item.style.transform = 'translateY(20px)';
        item.style.transition = 'all 0.5s ease';
        timelineObserver.observe(item);
    });
}

// Add hover effect to achievement cards
document.querySelectorAll('.achievement-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-3px)';
        card.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0)';
        card.style.boxShadow = 'none';
    });
});


// Add these to your existing JavaScript

// Animate education cards when scrolling
const educationCards = document.querySelectorAll('.education-card');
if (educationCards.length > 0) {
    const educationObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = 1;
                    entry.target.style.transform = 'translateY(0)';
                }, index * 100);
            }
        });
    }, { threshold: 0.1 });

    educationCards.forEach(card => {
        card.style.opacity = 0;
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'all 0.5s ease';
        educationObserver.observe(card);
    });
}

// Add hover effect to verify buttons
document.querySelectorAll('.btn-outline').forEach(button => {
    button.addEventListener('mouseenter', () => {
        button.style.backgroundColor = 'rgba(37, 99, 235, 0.1)';
    });
    
    button.addEventListener('mouseleave', () => {
        button.style.backgroundColor = 'transparent';
    });
});



