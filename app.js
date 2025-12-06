// Main App JavaScript for index.html

document.addEventListener('DOMContentLoaded', function() {
    // Initialize featured destinations on homepage
    if (document.getElementById('featuredGrid')) {
        renderFeaturedDestinations();
    }

    // Search functionality
    initializeSearch();

    // Mobile menu
    initializeMobileMenu();
    
    // Trip Planning Form (EmailJS)
    initializeTripPlanningForm();
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

// Search overlay functionality
function initializeSearch() {
    const searchToggle = document.getElementById('searchToggle');
    const searchOverlay = document.getElementById('searchOverlay');
    const searchClose = document.getElementById('searchClose');
    const mainSearch = document.getElementById('mainSearch');

    if (searchToggle) {
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
    if (searchSubmit) {
        searchSubmit.addEventListener('click', function() {
            const query = mainSearch ? mainSearch.value : '';
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

// Mobile menu functionality
function initializeMobileMenu() {
    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.querySelector('.nav-menu');

    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            this.classList.toggle('active');
        });
    }
}

// Newsletter form
const newsletterForm = document.querySelector('.newsletter-form');
if (newsletterForm) {
    newsletterForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const email = this.querySelector('.newsletter-input').value;
        if (email) {
            alert('Thank you for subscribing! We\'ll keep you updated with the latest from Kenya.');
            this.reset();
        }
    });
}

// Trip Planning Form with EmailJS
function initializeTripPlanningForm() {
    const planningForm = document.getElementById('planningForm');
    if (!planningForm) return;
    
    // Load EmailJS library dynamically
    const emailjsScript = document.createElement('script');
    emailjsScript.src = 'https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js';
    emailjsScript.onload = function() {
        // Initialize EmailJS with your Public Key
        emailjs.init("kWwPttIOCMN0lL616");
        
        // Setup form submission handler
        planningForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const submitBtn = this.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            
            // Show loading state
            submitBtn.textContent = 'Sending...';
            submitBtn.disabled = true;
            
            // Send email using EmailJS
            emailjs.sendForm('service_2xbjyf7', 'template_rf6952', this)
                .then(function(response) {
                    console.log('SUCCESS!', response.status, response.text);
                    alert('✅ Thank you! Your trip request has been sent. Check your email for confirmation and expect personalized recommendations within 24 hours.');
                    planningForm.reset();
                }, function(error) {
                    console.error('FAILED...', error);
                    alert('❌ Oops! Failed to send. Please email us directly at: securetechsolutions71@gmail.com');
                })
                .finally(function() {
                    // Restore button
                    submitBtn.textContent = originalText;
                    submitBtn.disabled = false;
                });
        });
    };
    
    // Handle script load error
    emailjsScript.onerror = function() {
        console.error('Failed to load EmailJS library');
        planningForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Service temporarily unavailable. Please email: securetechsolutions71@gmail.com');
        });
    };
    
    document.head.appendChild(emailjsScript);
}

// Open destination modal
function openDestinationModal(id) {
    const destination = destinationsData.find(d => d.id === id);
    if (!destination) return;

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

            <div style="margin-top: 32px;">
                <a href="plan.html" class="btn btn-primary">Plan your visit</a>
            </div>
        </div>
    `;

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Close modal
const modalClose = document.getElementById('modalClose');
if (modalClose) {
    modalClose.addEventListener('click', function() {
        const modal = document.getElementById('destinationModal');
        modal.classList.remove('active');
        document.body.style.overflow = '';
    });
}

// Close modal on overlay click
const modalOverlay = document.querySelector('.modal-overlay');
if (modalOverlay) {
    modalOverlay.addEventListener('click', function() {
        const modal = document.getElementById('destinationModal');
        modal.classList.remove('active');
        document.body.style.overflow = '';
    });
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