
// Destinations Page JavaScript

let currentFilter = 'all';
let searchQuery = '';

document.addEventListener('DOMContentLoaded', function() {
    // Initialize filters
    initializeFilters();
    
    // Initialize search
    initializeDestinationSearch();
    
    // Render all destinations
    renderDestinations();
    
    // Check URL parameters
    checkURLParameters();
    
    // Initialize search overlay
    initializeSearchOverlay();
    
   
});

// Initialize filter chips
function initializeFilters() {
    const filterChips = document.querySelectorAll('.filter-chip');
    
    filterChips.forEach(chip => {
        chip.addEventListener('click', function() {
            // Remove active class from all chips
            filterChips.forEach(c => c.classList.remove('active'));
            
            // Add active class to clicked chip
            this.classList.add('active');
            
            // Update current filter
            currentFilter = this.getAttribute('data-filter');
            
            // Re-render destinations
            renderDestinations();
        });
    });
}

// Initialize destination search
function initializeDestinationSearch() {
    const searchInput = document.getElementById('destinationSearch');
    
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            searchQuery = this.value.toLowerCase();
            renderDestinations();
        });
    }
}

// Render destinations based on filters
function renderDestinations() {
    const grid = document.getElementById('destinationsList');
    const emptyState = document.getElementById('emptyState');
    const resultsCount = document.getElementById('resultsCount');
    
    if (!grid) return;
    
    // Filter destinations
    let filtered = destinationsData;
    
    // Apply category filter
    if (currentFilter !== 'all') {
        filtered = filtered.filter(dest => dest.category === currentFilter);
    }
    
    // Apply search filter
    if (searchQuery) {
        filtered = filtered.filter(dest => 
            dest.name.toLowerCase().includes(searchQuery) ||
            dest.location.toLowerCase().includes(searchQuery) ||
            dest.description.toLowerCase().includes(searchQuery) ||
            dest.tags.some(tag => tag.toLowerCase().includes(searchQuery))
        );
    }
    
    // Update results count
    if (resultsCount) {
        const count = filtered.length;
        resultsCount.textContent = `Showing ${count} destination${count !== 1 ? 's' : ''}`;
    }
    
    // Show empty state if no results
    if (filtered.length === 0) {
        grid.style.display = 'none';
        if (emptyState) emptyState.style.display = 'block';
        return;
    }
    
    grid.style.display = 'grid';
    if (emptyState) emptyState.style.display = 'none';
    
    // Render cards
    grid.innerHTML = filtered.map(dest => `
        <article class="destination-card" onclick="openDestinationModal(${dest.id})">
            <div class="card-image-wrapper">
                <img src="${dest.image}" alt="${dest.name}" class="card-image">
                <span class="card-badge">${dest.category}</span>
            </div>
            <div class="card-body">
                <h3 class="card-title">${dest.name}</h3>
                <p class="card-location">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                        <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                    ${dest.location}
                </p>
                <p class="card-description">${dest.description}</p>
                <div class="card-footer">
                    <div class="card-tags">
                        ${dest.tags.slice(0, 2).map(tag => `<span class="tag">${tag}</span>`).join('')}
                    </div>
                    <a href="#" class="card-link" onclick="event.preventDefault();">Learn more →</a>
                </div>
            </div>
        </article>
    `).join('');
}

// Check URL parameters
function checkURLParameters() {
    const urlParams = new URLSearchParams(window.location.search);
    const searchParam = urlParams.get('search');
    const idParam = urlParams.get('id');
    
    // If there's a search parameter, apply it
    if (searchParam) {
        searchQuery = searchParam.toLowerCase();
        const searchInput = document.getElementById('destinationSearch');
        if (searchInput) {
            searchInput.value = searchParam;
        }
        renderDestinations();
    }
    
    // If there's an id parameter, open that destination's modal
    if (idParam) {
        const id = parseInt(idParam);
        setTimeout(() => openDestinationModal(id), 100);
    }
}

// Open destination modal
function openDestinationModal(id) {
    const destination = destinationsData.find(d => d.id === id);
    if (!destination) return;
    
    const modal = document.getElementById('destinationModal');
    const modalBody = document.getElementById('modalBody');
    
    if (!modal || !modalBody) return;
    
    modalBody.innerHTML = `
        <img src="${destination.image}" alt="${destination.name}" class="modal-header-image">
        <div class="modal-content-body">
            <h2 class="modal-title-large">${destination.name}</h2>
            <p class="modal-location-large">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                </svg>
                ${destination.location}
            </p>
            <p class="modal-description-large">${destination.longDescription}</p>
            
            <div class="modal-info-grid">
                <div class="modal-info-item">
                    <h4>Best time to visit</h4>
                    <p>${destination.bestTime}</p>
                </div>
                <div class="modal-info-item">
                    <h4>Category</h4>
                    <p>${destination.category.charAt(0).toUpperCase() + destination.category.slice(1)}</p>
                </div>
            </div>
            
            <div class="modal-info-item">
                <h4>Popular activities</h4>
                <p>${destination.activities.join(' • ')}</p>
            </div>
            
            <div style="margin-top: 32px; display: flex; gap: 12px;">
                <a href="plan.html" class="btn btn-primary">Plan your visit</a>
                <button onclick="shareDestination(${id})" class="btn btn-secondary" style="color: var(--primary-color); border-color: var(--primary-color);">Share</button>
            </div>
        </div>
    `;
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
    
    // Update URL without reload
    const newUrl = `${window.location.pathname}?id=${id}`;
    window.history.pushState({}, '', newUrl);
}

// Share destination
function shareDestination(id) {
    const destination = destinationsData.find(d => d.id === id);
    const url = `${window.location.origin}${window.location.pathname}?id=${id}`;
    
    if (navigator.share) {
        navigator.share({
            title: destination.name,
            text: destination.description,
            url: url
        }).catch(err => console.log('Error sharing:', err));
    } else {
        // Fallback: copy to clipboard
        navigator.clipboard.writeText(url).then(() => {
            alert('Link copied to clipboard!');
        });
    }
}

// Close modal
const modalClose = document.getElementById('modalClose');
if (modalClose) {
    modalClose.addEventListener('click', function() {
        closeModal();
    });
}

// Close modal on overlay click
const modal = document.getElementById('destinationModal');
if (modal) {
    modal.addEventListener('click', function(e) {
        if (e.target.classList.contains('modal-overlay')) {
            closeModal();
        }
    });
}

function closeModal() {
    const modal = document.getElementById('destinationModal');
    modal.classList.remove('active');
    document.body.style.overflow = '';
    
    // Update URL to remove id parameter
    const newUrl = window.location.pathname;
    window.history.pushState({}, '', newUrl);
}

// Sort functionality
const sortSelect = document.querySelector('.sort-select');
if (sortSelect) {
    sortSelect.addEventListener('change', function() {
        const value = this.value;
        
        if (value === 'Sort by: Name A-Z') {
            destinationsData.sort((a, b) => a.name.localeCompare(b.name));
        } else if (value === 'Sort by: Name Z-A') {
            destinationsData.sort((a, b) => b.name.localeCompare(a.name));
        }
        
        renderDestinations();
    });
}

// Search overlay functionality
function initializeSearchOverlay() {
    const searchToggle = document.getElementById('searchToggle');
    const searchOverlay = document.getElementById('searchOverlay');
    const searchClose = document.getElementById('searchClose');

    if (searchToggle && searchOverlay) {
        searchToggle.addEventListener('click', function() {
            searchOverlay.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    }

    if (searchClose && searchOverlay) {
        searchClose.addEventListener('click', function() {
            searchOverlay.classList.remove('active');
            document.body.style.overflow = '';
        });
    }
}


// Handle browser back/forward
window.addEventListener('popstate', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const idParam = urlParams.get('id');
    
    if (idParam) {
        openDestinationModal(parseInt(idParam));
    } else {
        closeModal();
    }
});

// Mobile menu functionality
function initializeMobileMenu() {
    console.log('Initializing mobile menu in destinations.js...');
    
    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.querySelector('.nav-menu');

    console.log('Menu toggle found:', !!menuToggle);
    console.log('Nav menu found:', !!navMenu);

    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            console.log('Menu toggle clicked in destinations.js');
            
            // Toggle active classes
            navMenu.classList.toggle('active');
            this.classList.toggle('active');
            
            // Toggle body overflow
            if (navMenu.classList.contains('active')) {
                document.body.classList.add('menu-open');
                document.body.style.overflow = 'hidden';
            } else {
                document.body.classList.remove('menu-open');
                document.body.style.overflow = '';
            }
        });

        // Close menu when clicking a link
        navMenu.addEventListener('click', function(e) {
            if (e.target.tagName === 'A') {
                navMenu.classList.remove('active');
                menuToggle.classList.remove('active');
                document.body.classList.remove('menu-open');
                document.body.style.overflow = '';
            }
        });

        // Close menu when clicking outside
        document.addEventListener('click', function(e) {
            if (navMenu.classList.contains('active') && 
                !navMenu.contains(e.target) && 
                !menuToggle.contains(e.target)) {
                navMenu.classList.remove('active');
                menuToggle.classList.remove('active');
                document.body.classList.remove('menu-open');
                document.body.style.overflow = '';
            }
        });

        // Close menu on escape key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                menuToggle.classList.remove('active');
                document.body.classList.remove('menu-open');
                document.body.style.overflow = '';
            }
        });
    } else {
        console.error('Mobile menu elements not found!');
    }
}