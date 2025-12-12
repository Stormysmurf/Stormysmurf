// ============================================
// WORKING ITINERARY GENERATOR - GUARANTEED TO WORK
// Save this as js/itinerary-generator.js
// ============================================

// Smart itinerary generator that ALWAYS works
function generateItinerary(duration, interest, budget, travelers, season) {
    console.log('Generating itinerary with:', { duration, interest, budget, travelers, season });
    
    const interestMap = {
        'wildlife': 'wildlife',
        'beach': 'beach',
        'culture': 'culture',
        'adventure': 'adventure',
        'luxury': 'luxury',
        'mixed': 'mixed'
    };
    
    const interestKey = interestMap[interest] || 'mixed';
    
    const destinations = {
        wildlife: ['Maasai Mara National Reserve', 'Amboseli National Park', 'Tsavo East & West', 'Lake Nakuru', 'Samburu National Reserve'],
        beach: ['Diani Beach', 'Watamu Marine Park', 'Lamu Island', 'Malindi', 'Kilifi'],
        culture: ['Nairobi Cultural Centers', 'Maasai Villages', 'Lamu Old Town', 'Fort Jesus Mombasa', 'Kisumu'],
        adventure: ['Mount Kenya', 'Hell\'s Gate National Park', 'Great Rift Valley', 'Mount Longonot', 'Kakamega Forest'],
        luxury: ['Maasai Mara Luxury Lodges', 'Lewa Conservancy', 'Giraffe Manor Nairobi', 'Manda Bay', 'Segera Retreat'],
        mixed: ['Nairobi City', 'Maasai Mara', 'Lake Naivasha', 'Amboseli National Park', 'Diani Beach']
    };

    const activities = {
        wildlife: [
            { time: 'Early Morning', title: 'Sunrise Game Drive', desc: 'Experience the magic of the African savanna at dawn. Spot lions, elephants, leopards, and countless other species as they begin their day.', icon: '🦁' },
            { time: 'Mid-Morning', title: 'Bush Breakfast', desc: 'Enjoy a traditional breakfast in the wild, surrounded by the sights and sounds of nature.', icon: '☕' },
            { time: 'Afternoon', title: 'Guided Nature Walk', desc: 'Learn about the smaller ecosystems and track animals on foot with experienced Maasai guides.', icon: '🥾' },
            { time: 'Late Afternoon', title: 'Sunset Safari Drive', desc: 'Golden hour photography and wildlife viewing as animals gather at watering holes.', icon: '🌅' },
            { time: 'Evening', title: 'Campfire Dinner', desc: 'Share stories under the stars while enjoying authentic Kenyan cuisine.', icon: '🔥' },
            { time: 'Night', title: 'Night Game Drive', desc: 'Spot nocturnal animals like hyenas, civets, and bush babies with spotlight tracking.', icon: '🌙' }
        ],
        beach: [
            { time: 'Morning', title: 'Snorkeling Expedition', desc: 'Explore vibrant coral reefs in crystal-clear waters, swimming alongside tropical fish and sea turtles.', icon: '🤿' },
            { time: 'Late Morning', title: 'Dhow Sailing', desc: 'Experience traditional Arabian sailing on a wooden dhow boat along the coast.', icon: '⛵' },
            { time: 'Midday', title: 'Beach Relaxation', desc: 'Unwind on pristine white sand beaches with fresh coconut water and tropical fruits.', icon: '🏖️' },
            { time: 'Afternoon', title: 'Water Sports', desc: 'Try kitesurfing, jet skiing, paddleboarding, or deep-sea fishing.', icon: '🏄' },
            { time: 'Evening', title: 'Seafood Dinner', desc: 'Feast on freshly caught lobster, prawns, and fish at a beachfront restaurant.', icon: '🦞' },
            { time: 'Sunset', title: 'Sunset Cruise', desc: 'Sail into the sunset with champagne and canapés on the Indian Ocean.', icon: '🌅' }
        ],
        culture: [
            { time: 'Morning', title: 'Maasai Village Visit', desc: 'Immerse yourself in traditional Maasai culture, learn ancient customs, and witness traditional dances.', icon: '🎭' },
            { time: 'Late Morning', title: 'Craft Workshop', desc: 'Create your own beaded jewelry with local artisans and learn traditional techniques.', icon: '🎨' },
            { time: 'Afternoon', title: 'Historical Site Tour', desc: 'Explore UNESCO World Heritage sites and learn about Kenya\'s rich history.', icon: '🏛️' },
            { time: 'Late Afternoon', title: 'Local Market Visit', desc: 'Experience authentic Kenyan life at bustling local markets filled with colors and aromas.', icon: '🛍️' },
            { time: 'Evening', title: 'Traditional Feast', desc: 'Enjoy authentic nyama choma (grilled meat), ugali, and sukuma wiki with a local family.', icon: '🍖' },
            { time: 'Night', title: 'Cultural Performance', desc: 'Experience vibrant African rhythms, traditional dances, and storytelling.', icon: '🎵' }
        ],
        adventure: [
            { time: 'Early Morning', title: 'Summit Hike', desc: 'Challenge yourself with a trek up Mount Kenya or Mount Longonot for breathtaking sunrise views.', icon: '⛰️' },
            { time: 'Mid-Morning', title: 'Rock Climbing', desc: 'Scale dramatic cliff faces in Hell\'s Gate National Park with expert guides.', icon: '🧗' },
            { time: 'Afternoon', title: 'Cycling Safari', desc: 'Pedal through wildlife areas for a unique, eco-friendly safari experience.', icon: '🚴' },
            { time: 'Late Afternoon', title: 'Zip-lining Adventure', desc: 'Soar through forest canopies and experience Kenya from above.', icon: '🎢' },
            { time: 'Evening', title: 'Bush Camp Setup', desc: 'Learn survival skills and set up camp in the wilderness.', icon: '⛺' },
            { time: 'Night', title: 'Stargazing Experience', desc: 'Marvel at the Milky Way and learn about African astronomy traditions.', icon: '⭐' }
        ],
        luxury: [
            { time: 'Morning', title: 'Private Game Drive', desc: 'Exclusive safari in a luxury Land Cruiser with your personal guide and photographer.', icon: '🚙' },
            { time: 'Late Morning', title: 'Champagne Breakfast', desc: 'Gourmet breakfast served in the bush with champagne and caviar.', icon: '🥂' },
            { time: 'Midday', title: 'Spa & Wellness', desc: 'Indulge in world-class spa treatments with African-inspired therapies and massages.', icon: '💆' },
            { time: 'Afternoon', title: 'Helicopter Safari', desc: 'Aerial views of the Great Rift Valley, wildlife, and stunning landscapes.', icon: '🚁' },
            { time: 'Evening', title: 'Private Bush Dinner', desc: 'Michelin-quality dining under the stars in an exclusive location.', icon: '🍽️' },
            { time: 'Night', title: 'Presidential Suite', desc: 'Retire to your luxury suite with butler service and premium amenities.', icon: '👑' }
        ],
        mixed: [
            { time: 'Morning', title: 'Safari Game Drive', desc: 'Start your day tracking the Big Five in Kenya\'s world-famous national parks.', icon: '🦁' },
            { time: 'Late Morning', title: 'Nature Walk', desc: 'Guided walking safari to discover smaller wildlife and learn about the ecosystem.', icon: '🥾' },
            { time: 'Afternoon', title: 'Cultural Experience', desc: 'Visit local communities and participate in traditional activities and ceremonies.', icon: '🎭' },
            { time: 'Late Afternoon', title: 'Lake Activities', desc: 'Boat ride, bird watching, or hippo spotting at Lake Naivasha or Lake Nakuru.', icon: '🚤' },
            { time: 'Evening', title: 'Scenic Sundowner', desc: 'Enjoy drinks and snacks while watching an incredible African sunset.', icon: '🌅' },
            { time: 'Night', title: 'Relaxation Time', desc: 'Unwind at your lodge with fine dining and evening entertainment.', icon: '🌙' }
        ]
    };

    const tips = {
        wildlife: [
            'Book safari lodges and camps 3-6 months in advance for peak season (July-October)',
            'Pack neutral-colored clothing (khaki, beige, olive) - avoid bright colors and black',
            'Bring quality binoculars and a camera with at least 200mm zoom lens',
            'Early morning (6-9 AM) and late afternoon (4-7 PM) game drives offer best wildlife viewing',
            'Always maintain a safe distance from animals and never exit your vehicle unless permitted',
            'Malaria prophylaxis is recommended - consult your doctor 4-6 weeks before travel',
            'Respect your guide\'s instructions - they know animal behavior and ensure your safety',
            'Pack layers as mornings can be cold (10-15°C) but afternoons warm (25-30°C)'
        ],
        beach: [
            'Best beach weather is December to March with minimal rainfall',
            'Book dhow sunset cruises and water sports activities in advance',
            'Try authentic Swahili cuisine including coconut rice, biryani, and grilled fish',
            'Respect local customs in Muslim-majority coastal towns - dress modestly when leaving beach areas',
            'Use reef-safe sunscreen to protect delicate coral ecosystems',
            'Scuba diving certification can be obtained in 3-4 days at Watamu or Diani',
            'Negotiate prices at markets but remember fair trade supports local communities',
            'Stay hydrated and drink only bottled or filtered water'
        ],
        culture: [
            'Hire local guides for authentic cultural experiences and support local economy',
            'Learn basic Swahili phrases - "Jambo" (hello), "Asante" (thank you), "Karibu" (welcome)',
            'Always ask permission before photographing people or sacred ceremonies',
            'Purchase handicrafts directly from artisans at fair prices',
            'Dress modestly when visiting villages and religious sites',
            'Remove shoes when entering homes and some cultural centers',
            'Be patient and respectful - African time operates at a more relaxed pace',
            'Participate in activities with enthusiasm - locals appreciate genuine interest'
        ],
        adventure: [
            'Acclimatize properly for high-altitude treks - spend 1-2 days at moderate elevation first',
            'Pack layers for dramatic temperature changes (can range from 0°C to 25°C)',
            'Hire experienced, certified guides for technical climbing and trekking',
            'Carry plenty of water (3-4 liters) and high-energy snacks on hikes',
            'Check weather conditions and trail status before embarking on outdoor activities',
            'Invest in good hiking boots - break them in before your trip',
            'Travel insurance that covers adventure activities is essential',
            'Altitude sickness can affect anyone - descend immediately if symptoms appear'
        ],
        luxury: [
            'Book exclusive luxury lodges and conservancies 6-12 months in advance',
            'Consider private conservancies for more intimate, uncrowded wildlife experiences',
            'Many luxury properties offer personal butlers, private chefs, and concierge services',
            'Helicopter transfers between camps save time and offer spectacular aerial views',
            'Request special occasions setup - bush dinners, bedroom turndowns, celebration cakes',
            'Photography and conservation programs are often included at luxury lodges',
            'Spa treatments can be arranged in your suite or in stunning outdoor settings',
            'Tipping is customary - budget $20-30 per person per day for staff gratuities'
        ],
        mixed: [
            'This balanced itinerary combines Kenya\'s best wildlife, culture, and landscapes',
            'Allow buffer time for travel between diverse locations - Kenya is larger than it appears',
            'Pack versatile clothing suitable for safaris, beaches, and cultural sites',
            'Consider domestic flights to maximize time - Nairobi to Mombasa is 1 hour vs 6 hours driving',
            'Mix accommodation types (luxury lodge, beach resort, eco-camp) for varied experiences',
            'Build in rest days - Kenya offers so much that over-scheduling leads to exhaustion',
            'Travel with an open mind and flexible schedule for spontaneous experiences',
            'Keep some contingency budget for optional activities and authentic souvenirs'
        ]
    };

    const dests = destinations[interestKey];
    const acts = activities[interestKey];
    const tipsArray = tips[interestKey];

    let itinerary = {
        title: `Your ${duration}-Day ${interest.charAt(0).toUpperCase() + interest.slice(1)} Kenya Adventure`,
        subtitle: `Personalized for ${travelers} ${travelers > 1 ? 'travelers' : 'traveler'} • ${budget.charAt(0).toUpperCase() + budget.slice(1)} budget • ${getSeasonText(season)}`,
        days: [],
        tips: tipsArray.slice(0, 6) // Show 6 tips
    };

    const numDays = parseInt(duration);

    for (let day = 1; day <= numDays; day++) {
        let dayPlan = {
            number: day,
            title: getDayTitle(day, numDays, dests),
            activities: []
        };

        // Generate activities for each day
        if (day === 1) {
            // Arrival day
            dayPlan.activities = [
                { time: 'Afternoon', title: 'Arrive in Kenya', desc: 'Land at Jomo Kenyatta International Airport and meet your guide for a warm Kenyan welcome.', icon: '✈️' },
                { time: 'Evening', title: 'Hotel Check-in & Orientation', desc: 'Transfer to your accommodation, freshen up, and receive a detailed trip briefing.', icon: '🏨' },
                { time: 'Night', title: 'Welcome Dinner', desc: 'Enjoy your first taste of authentic Kenyan cuisine and meet fellow travelers.', icon: '🍽️' }
            ];
        } else if (day === numDays) {
            // Departure day
            dayPlan.activities = [
                { time: 'Morning', title: 'Final Breakfast & Packing', desc: 'Enjoy your last Kenyan breakfast and prepare for departure.', icon: '☕' },
                { time: 'Late Morning', title: 'Last-Minute Shopping', desc: 'Visit local markets for authentic handicrafts, coffee, and tea as souvenirs.', icon: '🛍️' },
                { time: 'Afternoon', title: 'Airport Transfer & Departure', desc: 'Say "Kwaheri" (goodbye) to Kenya with unforgettable memories.', icon: '✈️' }
            ];
        } else {
            // Regular activity days
            const numActivities = day % 2 === 0 ? 4 : 3; // Vary number of activities
            for (let i = 0; i < numActivities; i++) {
                const actIndex = ((day - 2) * 3 + i) % acts.length;
                dayPlan.activities.push(acts[actIndex]);
            }
        }

        itinerary.days.push(dayPlan);
    }

    console.log('Generated itinerary:', itinerary);
    return itinerary;
}

function getDayTitle(dayNum, totalDays, destinations) {
    if (dayNum === 1) return 'Arrival in Nairobi';
    if (dayNum === totalDays) return 'Departure Day';
    
    const destIndex = (dayNum - 2) % destinations.length;
    return destinations[destIndex];
}

function getSeasonText(season) {
    const seasonMap = {
        'dry': 'Dry Season (Best Wildlife)',
        'wet': 'Green Season',
        'migration': 'Great Migration Season'
    };
    return seasonMap[season] || season;
}

// Render itinerary to HTML
function renderItinerary(itinerary) {
    console.log('Rendering itinerary...');
    
    let html = `
        <div class="itinerary-content">
            <div class="itinerary-header-section">
                <h3>${itinerary.title}</h3>
                <p style="color: var(--text-gray); font-size: 1.1em; margin-top: 10px;">${itinerary.subtitle}</p>
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
                        <span>🇰🇪</span>
                        <span>Kenya Adventure</span>
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
                        <div style="color: var(--text-gray); margin-top: 4px; font-size: 0.95em;">${day.title}</div>
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

        html += `</div>`; // Close day section
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
                📥 Download Itinerary
            </button>
            <button class="itinerary-action-btn secondary" onclick="shareItinerary()">
                📤 Share
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
            <p class="generator-loading-text">Creating your perfect Kenya itinerary...</p>
        </div>
    `;
}

// Download itinerary
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
        }).catch(err => console.log('Share cancelled'));
    } else {
        alert('Download the itinerary to share it via email or messaging!');
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
    document.getElementById('itineraryGeneratorForm').scrollIntoView({ behavior: 'smooth' });
}

// Initialize form handler
document.addEventListener('DOMContentLoaded', function() {
    console.log('Itinerary generator loaded');
    
    const form = document.getElementById('itineraryGeneratorForm');
    
    if (form) {
        console.log('Form found, attaching handler');
        
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            console.log('Form submitted!');

            // Get form values
            const duration = document.getElementById('gen-duration').value;
            const interest = document.getElementById('gen-interest').value;
            const budget = document.getElementById('gen-budget').value;
            const travelers = document.getElementById('gen-travelers').value;
            const season = document.getElementById('gen-season').value;

            console.log('Form values:', { duration, interest, budget, travelers, season });

            // Validate
            if (!duration || !interest || !budget || !season) {
                alert('Please fill in all required fields');
                return;
            }

            // Show loading
            showLoading();

            // Generate itinerary with small delay for UX
            setTimeout(() => {
                try {
                    const itinerary = generateItinerary(duration, interest, budget, travelers, season);
                    const html = renderItinerary(itinerary);
                    document.getElementById('itineraryOutput').innerHTML = html;
                    
                    // Scroll to output
                    document.getElementById('itineraryOutput').scrollIntoView({ 
                        behavior: 'smooth', 
                        block: 'start' 
                    });
                    
                    console.log('Itinerary rendered successfully');
                } catch (error) {
                    console.error('Error generating itinerary:', error);
                    alert('Sorry, there was an error generating your itinerary. Please try again.');
                }
            }, 1500);
        });
    } else {
        console.error('Form not found!');
    }
});