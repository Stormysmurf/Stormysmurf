// ============================================
// AI ITINERARY GENERATOR
// Save this as itinerary-generator.js and include it in plan.html
// ============================================

// Itinerary Database - Organized by interest type
const itineraryDatabase = {
    wildlife: {
        destinations: ['Maasai Mara', 'Amboseli National Park', 'Tsavo National Park', 'Lake Nakuru', 'Samburu National Reserve'],
        activities: [
            { time: 'Morning', title: 'Game Drive Safari', desc: 'Early morning game drive to spot lions, elephants, and other wildlife in their most active hours.', icon: '🦁' },
            { time: 'Afternoon', title: 'Bush Lunch', desc: 'Enjoy a picnic lunch in the heart of the wilderness with stunning savanna views.', icon: '🍽️' },
            { time: 'Evening', title: 'Sunset Safari', desc: 'Golden hour photography session and wildlife spotting as animals gather at watering holes.', icon: '🌅' },
            { time: 'Night', title: 'Stargazing Experience', desc: 'Marvel at the African night sky from your luxury tented camp.', icon: '⭐' }
        ],
        tips: [
            'Book safari lodges 3-6 months in advance for best availability',
            'Pack neutral-colored clothing (avoid bright colors that might disturb wildlife)',
            'Bring binoculars and a good camera with zoom lens',
            'Early morning drives offer the best wildlife viewing opportunities',
            'Respect wildlife - maintain safe distances at all times'
        ]
    },
    beach: {
        destinations: ['Diani Beach', 'Watamu', 'Lamu Island', 'Malindi', 'Kilifi'],
        activities: [
            { time: 'Morning', title: 'Snorkeling Adventure', desc: 'Explore vibrant coral reefs and swim with tropical fish in crystal-clear waters.', icon: '🤿' },
            { time: 'Midday', title: 'Beach Relaxation', desc: 'Unwind on pristine white sand beaches under swaying palm trees with fresh coconut water.', icon: '🏖️' },
            { time: 'Afternoon', title: 'Water Sports', desc: 'Try kitesurfing, jet skiing, or paddleboarding in the warm Indian Ocean.', icon: '🏄' },
            { time: 'Evening', title: 'Seafood Dinner', desc: 'Enjoy freshly caught seafood at a beachfront restaurant with ocean views.', icon: '🦞' }
        ],
        tips: [
            'Best beach weather is December to March',
            'Book dhow sunset cruises in advance',
            'Try the local Swahili cuisine - coconut rice and grilled fish',
            'Respect local customs in Muslim-majority coastal towns',
            'Use reef-safe sunscreen to protect marine life'
        ]
    },
    culture: {
        destinations: ['Nairobi', 'Lamu Old Town', 'Maasai Villages', 'Kisumu', 'Fort Jesus (Mombasa)'],
        activities: [
            { time: 'Morning', title: 'Cultural Village Visit', desc: 'Experience authentic Maasai or Samburu culture, learn traditional dances, and understand local customs.', icon: '🎭' },
            { time: 'Afternoon', title: 'Historical Site Tour', desc: 'Explore UNESCO World Heritage sites and learn about Kenya\'s rich history and heritage.', icon: '🏛️' },
            { time: 'Evening', title: 'Traditional Dinner', desc: 'Enjoy authentic Kenyan cuisine including nyama choma (grilled meat) and ugali.', icon: '🍖' },
            { time: 'Night', title: 'Local Music Performance', desc: 'Experience vibrant African rhythms and contemporary Kenyan music scene.', icon: '🎵' }
        ],
        tips: [
            'Hire local guides for authentic cultural experiences',
            'Learn basic Swahili phrases - locals appreciate the effort',
            'Ask permission before photographing people or ceremonies',
            'Purchase authentic handicrafts directly from artisans',
            'Dress modestly when visiting cultural sites and villages'
        ]
    },
    adventure: {
        destinations: ['Mount Kenya', 'Hell\'s Gate National Park', 'Great Rift Valley', 'Kakamega Forest', 'Mount Longonot'],
        activities: [
            { time: 'Morning', title: 'Mountain Trekking', desc: 'Hike through diverse ecosystems from bamboo forests to alpine moorlands on Mount Kenya.', icon: '⛰️' },
            { time: 'Afternoon', title: 'Rock Climbing', desc: 'Scale dramatic cliff faces in Hell\'s Gate with professional guides.', icon: '🧗' },
            { time: 'Evening', title: 'Biking Safari', desc: 'Cycle through wildlife areas for a unique perspective on Kenya\'s nature.', icon: '🚴' },
            { time: 'Night', title: 'Camping Under Stars', desc: 'Sleep in tents surrounded by sounds of the African wilderness.', icon: '⛺' }
        ],
        tips: [
            'Acclimatize properly for high-altitude treks',
            'Pack layers - temperatures vary greatly with altitude',
            'Hire experienced guides for technical climbs',
            'Carry plenty of water and high-energy snacks',
            'Check weather conditions before outdoor activities'
        ]
    },
    luxury: {
        destinations: ['Maasai Mara (Luxury Lodges)', 'Lewa Conservancy', 'Giraffe Manor', 'Manda Bay', 'Segera Retreat'],
        activities: [
            { time: 'Morning', title: 'Private Game Drive', desc: 'Exclusive safari with personal guide in a luxury 4x4 vehicle.', icon: '🚙' },
            { time: 'Midday', title: 'Spa Treatment', desc: 'Indulge in world-class spa treatments with African-inspired therapies.', icon: '💆' },
            { time: 'Afternoon', title: 'Helicopter Tour', desc: 'Aerial views of the Great Rift Valley and wildlife from above.', icon: '🚁' },
            { time: 'Evening', title: 'Private Dinner', desc: 'Gourmet dining experience in exclusive bush locations under the stars.', icon: '🍽️' }
        ],
        tips: [
            'Book luxury lodges 6-12 months in advance',
            'Consider private conservancies for exclusive experiences',
            'Ask about butler and personal chef services',
            'Helicopter transfers available between luxury camps',
            'Many luxury lodges offer photography and conservation programs'
        ]
    },
    mixed: {
        destinations: ['Nairobi', 'Maasai Mara', 'Diani Beach', 'Amboseli', 'Lake Naivasha'],
        activities: [
            { time: 'Morning', title: 'Safari Game Drive', desc: 'Start your day with exciting wildlife encounters in Kenya\'s famous national parks.', icon: '🦁' },
            { time: 'Afternoon', title: 'Cultural Experience', desc: 'Visit local communities and learn about traditional Kenyan lifestyle and crafts.', icon: '🎨' },
            { time: 'Late Afternoon', title: 'Adventure Activity', desc: 'Try hiking, boat rides, or nature walks in diverse landscapes.', icon: '🥾' },
            { time: 'Evening', title: 'Beach Relaxation', desc: 'End your trip relaxing on Kenya\'s beautiful coastal beaches.', icon: '🌴' }
        ],
        tips: [
            'This itinerary combines the best of Kenya\'s offerings',
            'Allow buffer time for travel between diverse locations',
            'Pack for both safari and beach activities',
            'Consider internal flights to maximize time',
            'Mix budget accommodation types for varied experiences'
        ]
    }
};

// Generate itinerary based on user inputs
function generateItinerary(duration, interest, budget, travelers, season) {
    const data = itineraryDatabase[interest] || itineraryDatabase.mixed;
    const days = parseInt(duration);
    
    let itinerary = {
        title: `Your ${days}-Day ${interest.charAt(0).toUpperCase() + interest.slice(1)} Adventure`,
        subtitle: `Customized for ${travelers} ${travelers > 1 ? 'travelers' : 'traveler'} • ${budget.charAt(0).toUpperCase() + budget.slice(1)} tier • ${season === 'migration' ? 'Great Migration Season' : season === 'dry' ? 'Dry Season' : 'Wet Season'}`,
        days: [],
        tips: data.tips
    };

    // Generate day-by-day itinerary
    for (let day = 1; day <= days; day++) {
        let dayPlan = {
            number: day,
            title: getDayTitle(day, days, interest, data.destinations),
            activities: []
        };

        // Select appropriate activities for the day
        const activitiesPerDay = day === 1 || day === days ? 3 : 4;
        const selectedActivities = selectActivitiesForDay(data.activities, day, days, activitiesPerDay);
        
        dayPlan.activities = selectedActivities;
        itinerary.days.push(dayPlan);
    }

    return itinerary;
}

// Get contextual title for each day
function getDayTitle(day, totalDays, interest, destinations) {
    if (day === 1) return `Arrival & Welcome to Kenya`;
    if (day === totalDays) return `Departure & Farewell`;
    
    // Rotate through destinations for middle days
    const destIndex = (day - 2) % destinations.length;
    return destinations[destIndex];
}

// Select activities based on day position
function selectActivitiesForDay(allActivities, day, totalDays, count) {
    let activities = [];
    
    if (day === 1) {
        // Arrival day - lighter activities
        activities = [
            { time: 'Afternoon', title: 'Airport Transfer & Hotel Check-in', desc: 'Meet your guide at the airport and transfer to your accommodation for rest and orientation.', icon: '✈️' },
            { time: 'Evening', title: 'Welcome Dinner', desc: 'Get acquainted with Kenyan cuisine and meet your travel companions.', icon: '🍽️' },
            { time: 'Night', title: 'Rest & Preparation', desc: 'Relax and prepare for your exciting adventure ahead.', icon: '🌙' }
        ];
    } else if (day === totalDays) {
        // Departure day
        activities = [
            { time: 'Morning', title: 'Final Breakfast', desc: 'Enjoy your last Kenyan meal and take final photos.', icon: '☕' },
            { time: 'Late Morning', title: 'Souvenir Shopping', desc: 'Last-minute shopping for authentic Kenyan handicrafts and gifts.', icon: '🛍️' },
            { time: 'Afternoon', title: 'Airport Transfer', desc: 'Depart for the airport with wonderful memories of Kenya.', icon: '✈️' }
        ];
    } else {
        // Regular days - full activities
        const startIndex = ((day - 2) * 2) % allActivities.length;
        activities = [];
        for (let i = 0; i < count; i++) {
            activities.push(allActivities[(startIndex + i) % allActivities.length]);
        }
    }
    
    return activities;
}

// Render itinerary to HTML
function renderItinerary(itinerary) {
    let html = `
        <div class="itinerary-content">
            <div class="itinerary-header-section">
                <h3>${itinerary.title}</h3>
                <p style="color: var(--text-gray); font-size: 1.1em;">${itinerary.subtitle}</p>
                <div class="itinerary-meta-info">
                    <div class="itinerary-meta-item">
                        <span>📅</span>
                        <span>${itinerary.days.length} Days</span>
                    </div>
                    <div class="itinerary-meta-item">
                        <span>🗺️</span>
                        <span>Multiple Destinations</span>
                    </div>
                    <div class="itinerary-meta-item">
                        <span>⭐</span>
                        <span>AI Generated</span>
                    </div>
                </div>
            </div>
    `;

    // Render each day
    itinerary.days.forEach(day => {
        html += `
            <div class="itinerary-day-section">
                <div class="day-header-section">
                    <div class="day-number-badge">${day.number}</div>
                    <div>
                        <div class="day-title-text">Day ${day.number}</div>
                        <div style="color: var(--text-gray); margin-top: 4px;">${day.title}</div>
                    </div>
                </div>
        `;

        // Render activities for the day
        day.activities.forEach(activity => {
            html += `
                <div class="itinerary-activity">
                    <div class="activity-time-badge">${activity.time}</div>
                    <div class="activity-title-text">
                        <span class="activity-icon">${activity.icon}</span>
                        ${activity.title}
                    </div>
                    <div class="activity-description-text">${activity.desc}</div>
                </div>
            `;
        });

        html += `</div>`;
    });

    // Add tips section
    html += `
        <div class="itinerary-tips-section">
            <h4>💡 Essential Tips for Your Journey</h4>
            <ul class="itinerary-tips-list">
    `;
    
    itinerary.tips.forEach(tip => {
        html += `<li>${tip}</li>`;
    });

    html += `
            </ul>
        </div>
        
        <div class="itinerary-action-buttons">
            <button class="itinerary-action-btn primary" onclick="downloadItinerary()">
                📥 Download PDF
            </button>
            <button class="itinerary-action-btn secondary" onclick="shareItinerary()">
                📤 Share Itinerary
            </button>
            <button class="itinerary-action-btn secondary" onclick="resetGenerator()">
                🔄 Generate New
            </button>
        </div>
    </div>
    `;

    return html;
}

// Show loading state
function showLoading() {
    const output = document.getElementById('itineraryOutput');
    output.innerHTML = `
        <div class="generator-loading">
            <div class="generator-spinner"></div>
            <p class="generator-loading-text">Crafting your perfect Kenya adventure...</p>
        </div>
    `;
}

// Download itinerary as text (PDF requires library)
function downloadItinerary() {
    const content = document.querySelector('.itinerary-content');
    if (!content) return;

    const text = content.innerText;
    const blob = new Blob([text], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'kenya-itinerary.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}

// Share itinerary
function shareItinerary() {
    if (navigator.share) {
        navigator.share({
            title: 'My Kenya Itinerary',
            text: 'Check out my customized Kenya travel itinerary!',
            url: window.location.href
        }).catch(err => console.log('Error sharing:', err));
    } else {
        alert('Share functionality is not supported on this browser. You can download the itinerary instead!');
    }
}

// Reset generator
function resetGenerator() {
    document.getElementById('itineraryGeneratorForm').reset();
    document.getElementById('itineraryOutput').innerHTML = `
        <div class="generator-empty-state">
            <div class="generator-empty-state-icon">🗺️</div>
            <h3>Ready to Plan Your Adventure?</h3>
            <p>Fill in your preferences and click "Generate My Itinerary" to get started!</p>
        </div>
    `;
    // Scroll back to form
    document.getElementById('itineraryGeneratorForm').scrollIntoView({ behavior: 'smooth' });
}

// Initialize form handler
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('itineraryGeneratorForm');
    
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();

            // Get form values
            const duration = document.getElementById('gen-duration').value;
            const interest = document.getElementById('gen-interest').value;
            const budget = document.getElementById('gen-budget').value;
            const travelers = document.getElementById('gen-travelers').value;
            const season = document.getElementById('gen-season').value;

            // Validate
            if (!duration || !interest || !budget || !season) {
                alert('Please fill in all required fields');
                return;
            }

            // Show loading
            showLoading();

            // Generate itinerary with delay for effect
            setTimeout(() => {
                const itinerary = generateItinerary(duration, interest, budget, travelers, season);
                const html = renderItinerary(itinerary);
                document.getElementById('itineraryOutput').innerHTML = html;
                
                // Scroll to output
                document.getElementById('itineraryOutput').scrollIntoView({ behavior: 'smooth', block: 'start' });
            }, 1500);
        });
    }
});