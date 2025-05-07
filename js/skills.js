document.addEventListener('DOMContentLoaded', function() {
    // Skill Category Filtering
    const categoryButtons = document.querySelectorAll('.category-btn');
    const skillCards = document.querySelectorAll('.skill-category-card');
    
    categoryButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            this.classList.add('active');
            
            const category = this.dataset.category;
            
            // Show/hide skill cards based on category
            skillCards.forEach(card => {
                if (category === 'all' || card.dataset.categories.includes(category)) {
                    card.style.display = 'block';
                    
                    // Animate progress bars when they become visible
                    if (category !== 'all') {
                        animateProgressBars(card);
                    }
                } else {
                    card.style.display = 'none';
                }
            });
            
            // Animate all progress bars when "All" is selected
            if (category === 'all') {
                animateProgressBars();
            }
        });
    });
    
    // Animate progress bars on initial load
    animateProgressBars();
    
    // Function to animate progress bars
    function animateProgressBars(container = document) {
        const progressBars = container.querySelectorAll('.progress');
        
        progressBars.forEach(bar => {
            const targetWidth = bar.style.width;
            bar.style.width = '0';
            
            setTimeout(() => {
                bar.style.width = targetWidth;
            }, 100);
        });
    }
    
    // Animate skill cards when scrolling
    const skillCardsObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = 1;
                    entry.target.style.transform = 'translateY(0)';
                }, index * 100);
            }
        });
    }, { threshold: 0.1 });
    
    skillCards.forEach(card => {
        card.style.opacity = 0;
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'all 0.5s ease';
        skillCardsObserver.observe(card);
    });
    
    // Animate certification cards
    const certCards = document.querySelectorAll('.certification-card');
    const certObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = 1;
                    entry.target.style.transform = 'translateY(0)';
                }, index * 100);
            }
        });
    }, { threshold: 0.1 });
    
    certCards.forEach(card => {
        card.style.opacity = 0;
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'all 0.5s ease';
        certObserver.observe(card);
    });
});