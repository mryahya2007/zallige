document.addEventListener('DOMContentLoaded', function() {
    // Category filtering
    const categoryTags = document.querySelectorAll('.category-tag');
    const sections = document.querySelectorAll('.section');
    
    categoryTags.forEach(tag => {
        tag.addEventListener('click', function() {
            // Remove active class from all tags
            categoryTags.forEach(t => t.classList.remove('active'));
            
            // Add active class to clicked tag
            this.classList.add('active');
            
            // Get category name
            const category = this.textContent.trim();
            
            // Filter sections based on category
            if (category === 'الكل') {
                // Show all sections
                sections.forEach(section => {
                    section.style.display = 'block';
                    setTimeout(() => {
                        section.style.opacity = '1';
                        section.style.transform = 'translateY(0)';
                    }, 10);
                });
            } else {
                // Filter sections
                sections.forEach(section => {
                    const sectionTitle = section.querySelector('h3').textContent;
                    
                    if (sectionTitle.includes(category)) {
                        section.style.display = 'block';
                        setTimeout(() => {
                            section.style.opacity = '1';
                            section.style.transform = 'translateY(0)';
                        }, 10);
                    } else {
                        section.style.opacity = '0';
                        section.style.transform = 'translateY(20px)';
                        setTimeout(() => {
                            section.style.display = 'none';
                        }, 300);
                    }
                });
            }
        });
    });
    
    // Search functionality
    const searchInput = document.querySelector('.search-input');
    
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            const searchTerm = this.value.trim().toLowerCase();
            
            // If search term is empty, show all sections
            if (searchTerm === '') {
                sections.forEach(section => {
                    section.style.display = 'block';
                    setTimeout(() => {
                        section.style.opacity = '1';
                        section.style.transform = 'translateY(0)';
                    }, 10);
                });
                return;
            }
            
            // Filter sections based on search term
            sections.forEach(section => {
                const sectionTitle = section.querySelector('h3').textContent.toLowerCase();
                const sectionDesc = section.querySelector('p').textContent.toLowerCase();
                
                if (sectionTitle.includes(searchTerm) || sectionDesc.includes(searchTerm)) {
                    section.style.display = 'block';
                    setTimeout(() => {
                        section.style.opacity = '1';
                        section.style.transform = 'translateY(0)';
                    }, 10);
                } else {
                    section.style.opacity = '0';
                    section.style.transform = 'translateY(20px)';
                    setTimeout(() => {
                        section.style.display = 'none';
                    }, 300);
                }
            });
        });
    }
    
    // Pagination functionality
    const pageLinks = document.querySelectorAll('.page-link');
    
    if (pageLinks.length > 0) {
        pageLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                // Don't prevent default here to allow navigation
                
                // Remove active class from all page links
                pageLinks.forEach(l => l.classList.remove('active'));
                
                // Add active class to clicked link
                this.classList.add('active');
                
                // Scroll to top of sections
                const sectionsElement = document.querySelector('.sections');
                if (sectionsElement) {
                    sectionsElement.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            });
        });
    }
    
    // Add hover effect to section cards
    sections.forEach(section => {
        section.addEventListener('mouseenter', function() {
            const button = this.querySelector('.button');
            if (button) {
                button.style.transform = 'translateY(-3px)';
            }
        });
        
        section.addEventListener('mouseleave', function() {
            const button = this.querySelector('.button');
            if (button) {
                button.style.transform = 'translateY(0)';
            }
        });
    });

    // Add animation to sections
    sections.forEach((section, index) => {
        section.style.animation = `fadeIn 0.5s ease forwards ${0.1 * (index + 1)}s`;
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
    });
});