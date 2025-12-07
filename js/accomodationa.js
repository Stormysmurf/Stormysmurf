// Accommodation Page JavaScript

document.addEventListener('DOMContentLoaded', function() {
    initializeAccommodationFilters();
});

function initializeAccommodationFilters() {
    const filterChips = document.querySelectorAll('.filter-chip');
    const accommodationCards = document.querySelectorAll('.accommodation-card');

    filterChips.forEach(chip => {
        chip.addEventListener('click', function() {
            // Remove active from all chips
            filterChips.forEach(c => c.classList.remove('active'));
            
            // Add active to clicked chip
            this.classList.add('active');
            
            const filterType = this.getAttribute('data-type');
            
            // Filter cards
            accommodationCards.forEach(card => {
                if (filterType === 'all') {
                    card.style.display = 'block';
                } else {
                    if (card.getAttribute('data-type') === filterType) {
                        card.style.display = 'block';
                    } else {
                        card.style.display = 'none';
                    }
                }
            });
        });
    });
}