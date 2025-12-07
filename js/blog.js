// Blog Page JavaScript

document.addEventListener('DOMContentLoaded', function() {
    initializeBlogFilters();
    initializeNewsletterForm();
});

function initializeBlogFilters() {
    const filterChips = document.querySelectorAll('.filter-chip');
    const storyCards = document.querySelectorAll('.story-card');

    filterChips.forEach(chip => {
        chip.addEventListener('click', function() {
            // Remove active from all chips
            filterChips.forEach(c => c.classList.remove('active'));
            
            // Add active to clicked chip
            this.classList.add('active');
            
            const filterCategory = this.getAttribute('data-category');
            
            // Filter story cards
            storyCards.forEach(card => {
                if (filterCategory === 'all') {
                    card.style.display = 'block';
                } else {
                    if (card.getAttribute('data-category') === filterCategory) {
                        card.style.display = 'block';
                    } else {
                        card.style.display = 'none';
                    }
                }
            });
        });
    });
}

function initializeNewsletterForm() {
    const newsletterForm = document.querySelector('.newsletter-form-blog');
    
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = this.querySelector('input[type="email"]').value;
            if (email) {
                alert('Thank you for subscribing! You\'ll receive our latest stories in your inbox.');
                this.reset();
            }
        });
    }
}