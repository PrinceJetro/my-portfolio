document.addEventListener('DOMContentLoaded', function() {
    // View Toggle Functionality
    const viewButtons = document.querySelectorAll('.view-btn');
    const projectsContainer = document.getElementById('projects-container');
    
    viewButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            viewButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            this.classList.add('active');
            
            // Set the view mode
            if (this.dataset.view === 'list') {
                projectsContainer.classList.add('list-view');
            } else {
                projectsContainer.classList.remove('list-view');
            }
        });
    });
    
    // Category Filter Functionality
    const categoryFilter = document.getElementById('category-filter');
    
    categoryFilter.addEventListener('change', function() {
        const selectedCategory = this.value;
        const projectCards = document.querySelectorAll('.project-card');
        
        projectCards.forEach(card => {
            if (selectedCategory === 'all' || card.dataset.category.includes(selectedCategory)) {
                card.style.display = 'flex';
            } else {
                card.style.display = 'none';
            }
        });
    });
    
    // Quick View Modal Functionality
    const quickViewButtons = document.querySelectorAll('.quick-view');
    const projectModal = document.getElementById('project-modal');
    const modalClose = document.querySelector('.modal-close');
    const modalBody = document.querySelector('.modal-body');
    
    // Sample project data (in a real scenario, this might come from an API)
    const projectsData = {
        'tutorial-haven': {
            title: 'Tutorial Haven',
            description: 'A comprehensive EdTech platform providing interactive coding tutorials, real-world projects, and personalized learning paths for aspiring developers. The platform features AI-powered code assessment, video lessons, and a project-based curriculum.',
            image: 'images/projects/tutorial-haven.jpg',
            tags: ['React', 'Node.js', 'MongoDB', 'AI Integration', 'AWS'],
            demoUrl: 'https://tutorialhaven.example.com',
            githubUrl: 'https://github.com/username/tutorial-haven',
            caseStudy: {
                challenge: 'Many coding education platforms focus on passive learning through videos without giving students enough hands-on practice.',
                solution: 'Built an interactive platform where students learn by building real projects with instant feedback from our AI assessment system.',
                impact: 'Increased student completion rates to 80% compared to industry average of 45%. Expanded to 10+ Nigerian states with 15 partner schools.'
            }
        },
        // Add data for other projects similarly
    };
    
    quickViewButtons.forEach(button => {
        button.addEventListener('click', function() {
            const projectId = this.dataset.project;
            const project = projectsData[projectId];
            
            // Populate modal with project data
            modalBody.innerHTML = `
                <div class="modal-project">
                    <div class="modal-image">
                        <img src="${project.image}" alt="${project.title}">
                    </div>
                    <div class="modal-content">
                        <h2>${project.title}</h2>
                        <p class="modal-description">${project.description}</p>
                        
                        <div class="modal-tech">
                            <h3>Technologies Used</h3>
                            <div class="tech-tags">
                                ${project.tags.map(tag => `<span>${tag}</span>`).join('')}
                            </div>
                        </div>
                        
                        <div class="modal-case-study">
                            <h3>Project Highlights</h3>
                            <div class="case-study-point">
                                <h4>Challenge</h4>
                                <p>${project.caseStudy.challenge}</p>
                            </div>
                            <div class="case-study-point">
                                <h4>Solution</h4>
                                <p>${project.caseStudy.solution}</p>
                            </div>
                            <div class="case-study-point">
                                <h4>Impact</h4>
                                <p>${project.caseStudy.impact}</p>
                            </div>
                        </div>
                        
                        <div class="modal-actions">
                            <a href="${project.demoUrl}" target="_blank" class="btn btn-primary">
                                <i class="fas fa-external-link-alt"></i> Live Demo
                            </a>
                            <a href="${project.githubUrl}" target="_blank" class="btn btn-secondary">
                                <i class="fab fa-github"></i> GitHub Repository
                            </a>
                        </div>
                    </div>
                </div>
            `;
            
            // Show modal
            projectModal.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    });
    
    // Close modal
    modalClose.addEventListener('click', function() {
        projectModal.classList.remove('active');
        document.body.style.overflow = 'auto';
    });
    
    // Close modal when clicking outside content
    projectModal.addEventListener('click', function(e) {
        if (e.target === projectModal) {
            projectModal.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    });
    
    // Case Study Buttons (similar to quick view)
    const caseStudyButtons = document.querySelectorAll('.case-study-btn');
    caseStudyButtons.forEach(button => {
        button.addEventListener('click', function() {
            const projectId = this.dataset.project;
            // You could implement a different view for case studies
            // For now, we'll use the same modal
            document.querySelector(`.quick-view[data-project="${projectId}"]`).click();
        });
    });
    
    // Animate project cards on scroll
    const projectCards = document.querySelectorAll('.project-card');
    const projectObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = 1;
                    entry.target.style.transform = 'translateY(0)';
                }, index * 100);
            }
        });
    }, { threshold: 0.1 });
    
    projectCards.forEach(card => {
        card.style.opacity = 0;
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'all 0.5s ease';
        projectObserver.observe(card);
    });
});



// Tab Functionality
const tabButtons = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');

tabButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons and contents
        tabButtons.forEach(btn => btn.classList.remove('active'));
        tabContents.forEach(content => content.classList.remove('active'));
        
        // Add active class to clicked button
        button.classList.add('active');
        
        // Show corresponding content
        const tabId = button.dataset.tab;
        document.getElementById(tabId).classList.add('active');
    });
});

// Video Modal
const videoModal = document.getElementById('video-modal');
const playButtons = document.querySelectorAll('.play-demo');
const modalClose = document.querySelector('.video-modal .modal-close');
const projectVideo = document.getElementById('project-video');

playButtons.forEach(button => {
    button.addEventListener('click', () => {
        const videoSrc = button.dataset.video;
        projectVideo.src = `${videoSrc}`;
        videoModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    });
});

modalClose.addEventListener('click', () => {
    videoModal.classList.remove('active');
    projectVideo.pause();
    document.body.style.overflow = 'auto';
});

// Close modal when clicking outside
videoModal.addEventListener('click', (e) => {
    if (e.target === videoModal) {
        videoModal.classList.remove('active');
        projectVideo.pause();
        document.body.style.overflow = 'auto';
    }
});

// Pause video when modal is closed
videoModal.addEventListener('transitionend', () => {
    if (!videoModal.classList.contains('active')) {
        projectVideo.src = '';
    }
});