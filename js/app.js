// Main App JavaScript for index.html

document.addEventListener('DOMContentLoaded', function() {
    // Initialize featured destinations on homepage
    if (document.getElementById('featuredGrid')) {
        renderFeaturedDestinations();
    }

    // Initialize quick link cards with background images
    initializeQuickLinks();

    // Search functionality
    initializeSearch();

    // Mobile menu
    initializeMobileMenu();

    // Newsletter form
    initializeNewsletter();
});

// Render featured destinations
function renderFeaturedDestinations() {
    const grid = document.getElementById('featuredGrid');
    if (!grid) return;

    const featured = destinationsData.filter(dest => dest.featured).slice(0, 6);
    
    grid.innerHTML = featured.map(dest => `
        <article class="destination-card" onclick="openDestinationModal(${dest.id})">
            <div class="card-image-wrapper">
                <img src="${dest.image}" alt="${dest.name}" class="card-image">
                <span class="card-badge">${dest.category.charAt(0).toUpperCase() + dest.category.slice(1)}</span>
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
                    <a href="destinations.html?id=${dest.id}" class="card-link">Learn more →</a>
                </div>
            </div>
        </article>
    `).join('');
}

// Initialize quick link cards with background images
function initializeQuickLinks() {
    const quickLinkCards = document.querySelectorAll('.quick-link-card--bg');
    
    if (quickLinkCards.length === 0) {
        console.warn('No .quick-link-card--bg elements found');
        return;
    }
    
    console.log(`Found ${quickLinkCards.length} quick link cards to initialize`);
    
    quickLinkCards.forEach((card, index) => {
        const bgImage = card.getAttribute('data-bg');
        console.log(`Card ${index}: data-bg="${bgImage}"`);
        
        if (bgImage) {
            // Ensure card has basic styling
            card.style.display = 'block';
            card.style.position = 'relative';
            card.style.minHeight = '200px';
            card.style.borderRadius = '12px';
            card.style.overflow = 'hidden';
            card.style.boxShadow = '0 2px 4px rgba(0,0,0,0.08)';
            
            // Apply background image
            card.style.backgroundImage = `url('${bgImage}')`;
            card.style.backgroundSize = 'cover';
            card.style.backgroundPosition = 'center';
            card.style.backgroundRepeat = 'no-repeat';
            
            // Set fallback color
            card.style.backgroundColor = '#006747';
            
            // Debug: Add border to see card boundaries
            card.style.border = '2px solid red'; // Remove this after debugging
            
            console.log(`Applied background image to card ${index}: ${bgImage}`);
            
            // Preload image
            const img = new Image();
            img.src = bgImage;
            img.onload = () => {
                console.log(`✓ Image loaded: ${bgImage}`);
                card.style.border = 'none'; // Remove debug border
                card.style.backgroundColor = 'transparent';
                card.style.opacity = '1';
            };
            img.onerror = () => {
                console.error(`✗ Failed to load image: ${bgImage}`);
                // Keep fallback color
                card.style.border = '2px solid orange'; // Error border
                card.style.backgroundColor = '#006747';
                card.style.backgroundImage = 'none';
            };
        } else {
            console.warn(`Card ${index} has no data-bg attribute`);
            card.style.backgroundColor = '#006747'; // Fallback color
        }
        
        // Ensure overlay exists
        let overlay = card.querySelector('.quick-link-card__overlay');
        if (!overlay) {
            console.warn(`Card ${index} missing overlay, creating one`);
            overlay = document.createElement('div');
            overlay.className = 'quick-link-card__overlay';
            const h3 = card.querySelector('h3') || document.createElement('h3');
            const p = card.querySelector('p') || document.createElement('p');
            overlay.appendChild(h3);
            overlay.appendChild(p);
            card.appendChild(overlay);
        }
    });
}

// Search overlay functionality
function initializeSearch() {
    const searchToggle = document.getElementById('searchToggle');
    const searchOverlay = document.getElementById('searchOverlay');
    const searchClose = document.getElementById('searchClose');
    const mainSearch = document.getElementById('mainSearch');

    if (searchToggle && searchOverlay) {
        searchToggle.addEventListener('click', function() {
            searchOverlay.classList.add('active');
            document.body.style.overflow = 'hidden';
            if (mainSearch) mainSearch.focus();
        });
    }

    if (searchClose) {
        searchClose.addEventListener('click', function() {
            searchOverlay.classList.remove('active');
            document.body.style.overflow = '';
        });
    }

    if (searchOverlay) {
        searchOverlay.addEventListener('click', function(e) {
            if (e.target === searchOverlay) {
                searchOverlay.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    }

    // Search submit
    const searchSubmit = document.querySelector('.search-submit');
    if (searchSubmit && mainSearch) {
        searchSubmit.addEventListener('click', function() {
            const query = mainSearch.value;
            if (query.trim()) {
                window.location.href = `destinations.html?search=${encodeURIComponent(query)}`;
            }
        });
    }

    // Enter key on search
    if (mainSearch) {
        mainSearch.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                const query = mainSearch.value;
                if (query.trim()) {
                    window.location.href = `destinations.html?search=${encodeURIComponent(query)}`;
                }
            }
        });
    }

    // Suggestion tags
    const suggestionTags = document.querySelectorAll('.suggestion-tag');
    suggestionTags.forEach(tag => {
        tag.addEventListener('click', function(e) {
            e.preventDefault();
            const query = this.textContent;
            window.location.href = `destinations.html?search=${encodeURIComponent(query)}`;
        });
    });
}

// Mobile menu functionality - FIXED VERSION
function initializeMobileMenu() {
    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.querySelector('.nav-menu');

    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', function(e) {
            e.stopPropagation();
            
            // Toggle menu visibility
            const isActive = !navMenu.classList.contains('active');
            
            if (isActive) {
                navMenu.classList.add('active');
                menuToggle.classList.add('active');
                document.body.style.overflow = 'hidden';
            } else {
                navMenu.classList.remove('active');
                menuToggle.classList.remove('active');
                document.body.style.overflow = '';
            }
        });

        // Close menu when clicking outside on mobile
        document.addEventListener('click', function(e) {
            if (window.innerWidth <= 768 && 
                navMenu.classList.contains('active') && 
                !navMenu.contains(e.target) && 
                !menuToggle.contains(e.target)) {
                
                navMenu.classList.remove('active');
                menuToggle.classList.remove('active');
                document.body.style.overflow = '';
            }
        });

        // Close menu when clicking a link
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                if (window.innerWidth <= 768 && navMenu.classList.contains('active')) {
                    navMenu.classList.remove('active');
                    menuToggle.classList.remove('active');
                    document.body.style.overflow = '';
                }
            });
        });
        
        // Close menu on escape key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                menuToggle.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    }
}

// Newsletter form initialization
function initializeNewsletter() {
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const emailInput = this.querySelector('.newsletter-input');
            const email = emailInput.value.trim();
            
            if (email && isValidEmail(email)) {
                // Show success message
                alert('Thank you for subscribing! We\'ll keep you updated with the latest from Kenya.');
                emailInput.value = '';
            } else {
                alert('Please enter a valid email address.');
                emailInput.focus();
            }
        });
    }
}

// Email validation helper
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Open destination modal from homepage
function openDestinationModal(id) {
    const destination = destinationsData.find(d => d.id === id);
    if (!destination) return;

    // Check if modal exists on current page
    const modal = document.getElementById('destinationModal');
    
    if (!modal) {
        // If no modal on this page, navigate to destinations page
        window.location.href = `destinations.html?id=${id}`;
        return;
    }

    const modalBody = document.getElementById('modalBody');
    
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
            <p class="modal-description-large">${destination.longDescription || destination.description}</p>
            
            <div class="modal-info-grid">
                <div class="modal-info-item">
                    <h4>Best time to visit</h4>
                    <p>${destination.bestTime}</p>
                </div>
                <div class="modal-info-item">
                    <h4>Category</h4>
                    <p>${destination.category.charAt(0).toUpperCase() + destination.category.slice(1)}</p>
                </div>
                <div class="modal-info-item">
                    <h4>Activities</h4>
                    <p>${destination.activities ? destination.activities.join(' • ') : 'Various activities available'}</p>
                </div>
            </div>

            <div style="margin-top: 32px; display: flex; gap: 16px;">
                <a href="plan.html" class="btn btn-primary">Plan your visit</a>
                <a href="destinations.html?id=${destination.id}" class="btn btn-secondary">View details</a>
            </div>
        </div>
    `;

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Close modal functionality
function initializeModal() {
    const modalClose = document.getElementById('modalClose');
    if (modalClose) {
        modalClose.addEventListener('click', function() {
            const modal = document.getElementById('destinationModal');
            if (modal) {
                modal.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    }

    // Close modal on overlay click
    const modalOverlay = document.querySelector('.modal-overlay');
    if (modalOverlay) {
        modalOverlay.addEventListener('click', function() {
            const modal = document.getElementById('destinationModal');
            if (modal) {
                modal.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    }

    // Close modal on escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            const modal = document.getElementById('destinationModal');
            if (modal && modal.classList.contains('active')) {
                modal.classList.remove('active');
                document.body.style.overflow = '';
            }
        }
    });
}

// Initialize modal functionality if modal exists
if (document.getElementById('destinationModal')) {
    initializeModal();
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href === '#') return;
        
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Lazy load images for better performance
function initializeLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');
    
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    imageObserver.unobserve(img);
                }
            });
        });

        images.forEach(img => imageObserver.observe(img));
    } else {
        // Fallback for older browsers
        images.forEach(img => {
            img.src = img.dataset.src;
            img.removeAttribute('data-src');
        });
    }
}

// Initialize lazy loading
initializeLazyLoading();

// Add loading animation removal
window.addEventListener('load', function() {
    // Remove any loading animations
    const loaders = document.querySelectorAll('.loading, .skeleton');
    loaders.forEach(loader => {
        loader.style.opacity = '0';
        setTimeout(() => {
            if (loader.parentNode) {
                loader.parentNode.removeChild(loader);
            }
        }, 300);
    });
    
    // Initialize animations for cards
    const cards = document.querySelectorAll('.destination-card, .inspiration-card, .quick-link-card--bg');
    cards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
        card.classList.add('animate-in');
    });
});