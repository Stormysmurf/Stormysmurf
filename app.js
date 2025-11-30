// Application State
let currentFilter = 'all';
let currentSearchQuery = '';

// DOM Elements
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const destinationsGrid = document.getElementById('destinationsGrid');
const resultsCount = document.getElementById('resultsCount');
const emptyState = document.getElementById('emptyState');
const filterChips = document.querySelectorAll('.filter-chip');
const modal = document.getElementById('destinationModal');
const modalOverlay = document.getElementById('modalOverlay');
const modalClose = document.getElementById('modalClose');
const modalBody = document.getElementById('modalBody');
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');

// Initialize the application
function init() {
    renderDestinations(window.destinationsData);
    setupEventListeners();
    setActiveFilter('all');
}

// Setup event listeners
function setupEventListeners() {
    // Search functionality
    searchBtn.addEventListener('click', handleSearch);
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            handleSearch();
        }
    });

    // Real-time search (optional)
    searchInput.addEventListener('input', debounce(handleSearch, 300));

    // Filter chips
    filterChips.forEach(chip => {
        chip.addEventListener('click', () => {
            const filter = chip.dataset.filter;
            currentFilter = filter;
            setActiveFilter(filter);
            filterAndRender();
        });
    });

    // Modal controls
    modalClose.addEventListener('click', closeModal);
    modalOverlay.addEventListener('click', closeModal);

    // Mobile menu
    mobileMenuBtn.addEventListener('click', toggleMobileMenu);

    // Smooth scroll for navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
                // Close mobile menu if open
                navLinks.classList.remove('active');
            }
        });
    });
}

// Toggle mobile menu
function toggleMobileMenu() {
    navLinks.classList.toggle('active');
}

// Handle search
function handleSearch() {
    currentSearchQuery = searchInput.value.toLowerCase().trim();
    filterAndRender();
}

// Filter and render destinations
function filterAndRender() {
    let filtered = window.destinationsData;

    // Apply category filter
    if (currentFilter !== 'all') {
        filtered = filtered.filter(dest => dest.category === currentFilter);
    }

    // Apply search filter
    if (currentSearchQuery) {
        filtered = filtered.filter(dest => {
            const searchableText = `
                ${dest.name} 
                ${dest.location} 
                ${dest.category} 
                ${dest.description} 
                ${dest.tags.join(' ')}
            `.toLowerCase();

            return searchableText.includes(currentSearchQuery);
        });
    }

    renderDestinations(filtered);
}

// Render destinations
function renderDestinations(destinations) {
    destinationsGrid.innerHTML = '';

    if (destinations.length === 0) {
        destinationsGrid.style.display = 'none';
        emptyState.style.display = 'block';
        updateResultsCount(0);
        return;
    }

    destinationsGrid.style.display = 'grid';
    emptyState.style.display = 'none';

    destinations.forEach(dest => {
        const card = createDestinationCard(dest);
        destinationsGrid.appendChild(card);
    });

    updateResultsCount(destinations.length);
}

// Create destination card
function createDestinationCard(dest) {
    const card = document.createElement('div');
    card.className = 'destination-card';
    card.onclick = () => openModal(dest);

    const categoryColors = {
        beach: '#2a9d8f',
        mountain: '#e76f51',
        wildlife: '#f4a261',
        waterfall: '#457b9d',
        cultural: '#e63946',
        nature: '#2d6a4f'
    };

    const categoryColor = categoryColors[dest.category] || '#6c757d';

    card.innerHTML = `
        <img src="${dest.image}" alt="${dest.name}" class="card-image" loading="lazy">
        <div class="card-content">
            <div class="card-header">
                <div>
                    <h3 class="card-title">${dest.name}</h3>
                    <p class="card-location"><i class="fas fa-map-marker-alt"></i> ${dest.location}</p>
                </div>
                <span class="card-category" style="background: ${categoryColor}">
                    ${dest.category.toUpperCase()}
                </span>
            </div>
            <p class="card-description">${dest.description}</p>
            <div class="card-footer">
                <div class="card-tags">
                    ${dest.tags.slice(0, 2).map(tag => 
                        `<span class="tag">${tag}</span>`
                    ).join('')}
                </div>
                <button class="card-btn" onclick="event.stopPropagation(); openModal(${dest.id})">
                    <i class="fas fa-eye"></i> View Details
                </button>
            </div>
        </div>
    `;

    return card;
}

// Open modal with destination details
function openModal(destId) {
    const dest = typeof destId === 'object' ? destId : 
                 window.destinationsData.find(d => d.id === destId);

    if (!dest) return;

    const categoryColors = {
        beach: '#2a9d8f',
        mountain: '#e76f51',
        wildlife: '#f4a261',
        waterfall: '#457b9d',
        cultural: '#e63946',
        nature: '#2d6a4f'
    };

    const categoryColor = categoryColors[dest.category] || '#6c757d';

    modalBody.innerHTML = `
        <img src="${dest.image}" alt="${dest.name}" class="modal-image">
        <div class="modal-body">
            <div class="modal-header">
                <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: 1rem;">
                    <div>
                        <h2 class="modal-title">${dest.name}</h2>
                        <p class="modal-location"><i class="fas fa-map-marker-alt"></i> ${dest.location}</p>
                    </div>
                    <span class="card-category" style="background: ${categoryColor}">
                        ${dest.category.toUpperCase()}
                    </span>
                </div>
            </div>
            
            <p class="modal-description">${dest.fullDescription}</p>
            
            <div class="modal-info">
                <div class="info-item">
                    <h4><i class="fas fa-calendar-alt"></i> Best Time to Visit</h4>
                    <p>${dest.bestTime}</p>
                </div>
                <div class="info-item">
                    <h4><i class="fas fa-clock"></i> Recommended Duration</h4>
                    <p>${dest.duration}</p>
                </div>
            </div>
            
            <div class="modal-info">
                <div class="info-item">
                    <h4><i class="fas fa-hiking"></i> Activities</h4>
                    <p>${dest.activities.join(', ')}</p>
                </div>
            </div>
            
            <div style="margin-top: 2rem;">
                <h4 style="margin-bottom: 1rem; color: var(--primary-color);"><i class="fas fa-tags"></i> Tags</h4>
                <div class="card-tags">
                    ${dest.tags.map(tag => 
                        `<span class="tag">${tag}</span>`
                    ).join('')}
                </div>
            </div>
            
            <div style="margin-top: 2rem; padding-top: 2rem; border-top: 1px solid var(--gray-light);">
                <button class="card-btn" style="width: 100%; padding: 1rem; font-size: 1.1rem;" 
                        onclick="addToItinerary('${dest.name}')">
                    <i class="fas fa-plus"></i> Add to My Itinerary
                </button>
            </div>
        </div>
    `;

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Close modal
function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Add to itinerary (placeholder function)
function addToItinerary(destName) {
    alert(`"${destName}" has been added to your itinerary! 
    
(This is a demo. In the full version, this would save to your personalized trip planner.)`);
    closeModal();
}

// Update results count
function updateResultsCount(count) {
    if (count === window.destinationsData.length && !currentSearchQuery) {
        resultsCount.textContent = 'Showing all attractions';
    } else if (currentSearchQuery && currentFilter !== 'all') {
        resultsCount.textContent = `Found ${count} result${count !== 1 ? 's' : ''} for "${currentSearchQuery}" in ${currentFilter}`;
    } else if (currentSearchQuery) {
        resultsCount.textContent = `Found ${count} result${count !== 1 ? 's' : ''} for "${currentSearchQuery}"`;
    } else {
        const categoryName = currentFilter.charAt(0).toUpperCase() + currentFilter.slice(1);
        resultsCount.textContent = `${count} ${categoryName} destination${count !== 1 ? 's' : ''}`;
    }
}

// Set active filter chip
function setActiveFilter(filter) {
    filterChips.forEach(chip => {
        if (chip.dataset.filter === filter) {
            chip.classList.add('active');
        } else {
            chip.classList.remove('active');
        }
    });
}

// Debounce function for search
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Close modal with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
        closeModal();
    }
});

// Initialize when DOM is loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}