// Enhanced destinations data with more details and images
const destinations = [
    {
        id: 1,
        name: "Diani Beach",
        location: "South Coast, Mombasa",
        category: "beach",
        image: "https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=800&auto=format&fit=crop&q=60",
        description: "Pristine white sandy beach with crystal-clear turquoise waters, perfect for swimming and water sports.",
        fullDescription: "Diani Beach, located 30km south of Mombasa, is one of Kenya's most beautiful coastal destinations. This 17km stretch of pristine white sand and crystal-clear waters offers the perfect tropical paradise. The beach is lined with luxury resorts, boutique hotels, and beachfront restaurants. Visitors can enjoy kite surfing, diving, snorkeling, and dolphin watching. The coral reefs offshore are home to diverse marine life including sea turtles and colorful tropical fish. The beach is also famous for its iconic baobab trees and vibrant local culture.",
        tags: ["swimming", "water sports", "relaxation", "snorkeling"],
        bestTime: "June to March",
        activities: ["Snorkeling", "Kite surfing", "Dolphin watching", "Beach relaxation", "Scuba diving"],
        duration: "1-3 days",
        priceRange: "$$",
        rating: 4.8,
        featured: true
    },
    {
        id: 2,
        name: "Mount Kenya",
        location: "Central Kenya",
        category: "mountain",
        image: "https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?w=800&auto=format&fit=crop&q=60",
        description: "Africa's second-highest mountain with spectacular hiking trails through diverse ecosystems.",
        fullDescription: "Mount Kenya is Africa's second highest peak at 5,199 meters and a UNESCO World Heritage Site. The mountain offers some of the most spectacular mountain scenery in Africa. The trek takes you through multiple ecological zones: cultivated farmlands, bamboo forests, giant heather and moorland, and finally the alpine desert zone with its unique vegetation. The mountain has three main peaks: Batian, Nelion, and Point Lenana. While Batian and Nelion require technical climbing, Point Lenana can be reached by trekkers. The mountain is sacred to the Kikuyu people and offers breathtaking views of the surrounding landscape.",
        tags: ["hiking", "adventure", "nature", "climbing"],
        bestTime: "January-February, June-October",
        activities: ["Mountain trekking", "Rock climbing", "Wildlife viewing", "Photography", "Camping"],
        duration: "4-7 days",
        priceRange: "$$$",
        rating: 4.9,
        featured: true
    },
    {
        id: 3,
        name: "Maasai Mara National Reserve",
        location: "Narok County",
        category: "wildlife",
        image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800&auto=format&fit=crop&q=60",
        description: "World-renowned wildlife reserve famous for the Great Migration and Big Five sightings.",
        fullDescription: "The Maasai Mara National Reserve is Kenya's most famous wildlife sanctuary. Covering 1,510 square kilometers of pristine wilderness, the reserve is home to an incredible diversity of wildlife including lions, leopards, elephants, rhinos, and buffalo. The annual wildebeest migration between July and October is one of nature's most spectacular events, with over 1.5 million wildebeest, zebras, and gazelles crossing the Mara River. The reserve also offers hot air balloon safaris, cultural visits to Maasai villages, and luxury tented camps. The vast savannah plains dotted with acacia trees create the iconic African landscape that attracts photographers from around the world.",
        tags: ["safari", "big five", "migration", "photography"],
        bestTime: "July to October (migration), January-February",
        activities: ["Game drives", "Hot air balloon safari", "Cultural visits", "Bird watching", "Photography"],
        duration: "3-5 days",
        priceRange: "$$$",
        rating: 4.9,
        featured: true
    },
    {
        id: 4,
        name: "Fourteen Falls",
        location: "Thika, Kiambu County",
        category: "waterfall",
        image: "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?w=800&auto=format&fit=crop&q=60",
        description: "A series of fourteen cascading waterfalls on the Athi River surrounded by lush vegetation.",
        fullDescription: "Fourteen Falls, also known as Thika Falls, is located along the Athi River in Thika. The falls drop about 27 meters and are named for the fourteen separate streams that cascade down the rocky face. The site offers stunning views, picnic spots, and opportunities for photography. Local guides are available to take visitors on trails around the falls. The surrounding area is rich in birdlife and vegetation. It's a popular day trip destination from Nairobi, offering a peaceful escape into nature. The thunderous sound of the falling water and the mist that rises from the base create a mesmerizing atmosphere that captivates every visitor.",
        tags: ["nature", "photography", "picnic", "hiking"],
        bestTime: "April-June (after rains)",
        activities: ["Photography", "Picnicking", "Nature walks", "Bird watching", "Boating"],
        duration: "Half day to full day",
        priceRange: "$",
        rating: 4.3,
        featured: false
    },
    {
        id: 5,
        name: "Lamu Old Town",
        location: "Lamu Island",
        category: "cultural",
        image: "https://images.unsplash.com/photo-1523755231516-e43fd2e8dca5?w=800&auto=format&fit=crop&q=60",
        description: "UNESCO World Heritage Site with Swahili architecture and rich cultural heritage.",
        fullDescription: "Lamu Old Town is Kenya's oldest and best-preserved Swahili settlement, founded in the 12th century. This UNESCO World Heritage Site features winding narrow streets, ornate wooden doors, and stone buildings that reflect centuries of Arab, Persian, Indian, and European influences. The island has no motorized vehicles - only donkeys and dhows (traditional sailing boats). Visitors can explore ancient mosques, museums, and art galleries. The annual Lamu Cultural Festival celebrates traditional dance, poetry, and dhow races. The laid-back atmosphere and pristine beaches make it perfect for cultural immersion and relaxation. The local Swahili cuisine is a highlight, blending African, Arab, and Indian flavors.",
        tags: ["history", "architecture", "culture", "unesco"],
        bestTime: "July-March",
        activities: ["Cultural tours", "Dhow sailing", "Historical site visits", "Beach relaxation", "Shopping"],
        duration: "2-4 days",
        priceRange: "$$",
        rating: 4.7,
        featured: true
    },
    {
        id: 6,
        name: "Lake Nakuru National Park",
        location: "Nakuru County",
        category: "wildlife",
        image: "https://images.unsplash.com/photo-1535083783855-76ae62b2914e?w=800&auto=format&fit=crop&q=60",
        description: "Alkaline lake famous for flamingos, rhino sanctuary, and diverse birdlife.",
        fullDescription: "Lake Nakuru National Park is one of Kenya's premier wildlife destinations. The alkaline lake was once famous for millions of flamingos that created a pink blanket across the water. While flamingo numbers fluctuate, the park remains a haven for over 450 bird species. It's also a rhino sanctuary hosting both black and white rhinos. Other wildlife includes Rothschild's giraffes, lions, leopards, buffalo, and various antelope species. The park offers scenic viewpoints including Baboon Cliff and Lion Hill. Recent years have seen the lake expand significantly, creating new habitats and changing the ecosystem. The park's compact size makes it perfect for day trips or short safaris.",
        tags: ["birds", "rhino", "scenic", "flamingos"],
        bestTime: "June-March",
        activities: ["Game drives", "Bird watching", "Photography", "Rhino tracking", "Nature walks"],
        duration: "1-2 days",
        priceRange: "$$",
        rating: 4.6,
        featured: false
    },
    {
        id: 7,
        name: "Watamu Marine Park",
        location: "Kilifi County",
        category: "beach",
        image: "https://images.unsplash.com/photo-1559827260-d63b66d52bef?w=800&auto=format&fit=crop&q=60",
        description: "Protected marine park with coral reefs, sea turtles, and pristine beaches.",
        fullDescription: "Watamu is a small coastal town known for its stunning beaches and marine biodiversity. The Watamu Marine National Park and Reserve protects coral reefs, seagrass beds, and mangrove forests. It's one of the best places in Kenya for snorkeling and diving, with visibility often exceeding 20 meters. The area is a nesting site for endangered sea turtles, and the Local Ocean Trust runs conservation programs. Visitors can explore the mysterious Gede Ruins, take sunset dhow cruises, or enjoy fresh seafood at beachfront restaurants. The Bio-Ken Snake Farm and Arabuko Sokoke Forest are nearby attractions. The coral gardens are home to countless species of tropical fish, making it a paradise for underwater enthusiasts.",
        tags: ["marine life", "snorkeling", "turtles", "conservation"],
        bestTime: "October-March",
        activities: ["Snorkeling", "Diving", "Turtle watching", "Beach walks", "Dhow cruises"],
        duration: "2-4 days",
        priceRange: "$$",
        rating: 4.5,
        featured: false
    },
    {
        id: 8,
        name: "Hell's Gate National Park",
        location: "Naivasha, Nakuru County",
        category: "wildlife",
        image: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=800&auto=format&fit=crop&q=60",
        description: "Unique park where you can walk and cycle among wildlife with dramatic cliffs.",
        fullDescription: "Hell's Gate National Park is one of the few parks in Kenya where you can walk and cycle alongside wildlife. Named after a narrow break in the cliffs, the park features spectacular scenery including towering cliffs, gorges, and volcanic rock formations. The park inspired the landscape in Disney's 'The Lion King'. Wildlife includes zebras, giraffes, buffaloes, and various antelope species. The dramatic gorges can be explored on foot with a guide. The park also contains a geothermal power station harnessing underground steam. Rock climbing is popular on Fischer's Tower. Nearby Lake Naivasha offers boat rides and birdwatching. The park's unique combination of wildlife, geology, and adventure activities makes it a must-visit destination.",
        tags: ["cycling", "hiking", "adventure", "geothermal"],
        bestTime: "Year-round",
        activities: ["Cycling", "Rock climbing", "Walking safaris", "Gorge exploration", "Photography"],
        duration: "1-2 days",
        priceRange: "$",
        rating: 4.4,
        featured: false
    },
    {
        id: 9,
        name: "Thomson's Falls",
        location: "Nyahururu, Laikipia County",
        category: "waterfall",
        image: "https://images.unsplash.com/photo-1564760055775-d63b17a55c44?w=800&auto=format&fit=crop&q=60",
        description: "73-meter scenic waterfall surrounded by lush vegetation and hiking trails.",
        fullDescription: "Thomson's Falls is a magnificent 73-meter waterfall located in the town of Nyahururu, Kenya's highest town at 2,360 meters above sea level. Named after Scottish explorer Joseph Thomson who was the first European to walk from Mombasa to Lake Victoria, the falls plunge into a forested gorge creating a spectacular sight. A path leads down to the bottom of the falls where visitors can feel the spray and take photos. The surrounding area offers nature walks, horseback riding, and views over the Ewaso Narok River. The cool highland climate makes it a refreshing escape. Local craftsmen sell souvenirs near the viewing platform. The falls are particularly impressive during the rainy season when water volume increases dramatically.",
        tags: ["nature", "hiking", "photography", "adventure"],
        bestTime: "Year-round (best after rains)",
        activities: ["Hiking", "Photography", "Nature walks", "Horseback riding", "Picnicking"],
        duration: "Half day",
        priceRange: "$",
        rating: 4.2,
        featured: false
    },
    {
        id: 10,
        name: "Fort Jesus Museum",
        location: "Mombasa",
        category: "cultural",
        image: "https://images.unsplash.com/photo-1563789031959-4c02bcb41319?w=800&auto=format&fit=crop&q=60",
        description: "16th-century Portuguese fort and UNESCO World Heritage Site.",
        fullDescription: "Fort Jesus is a Portuguese fort built in 1593 to protect the port of Mombasa. This UNESCO World Heritage Site is one of the finest examples of 16th-century Portuguese military architecture. The fort changed hands between the Portuguese and Omani Arabs multiple times over the centuries. Today it houses a museum with artifacts including pottery, beads, and Chinese porcelain that illustrate the diverse cultural influences on Kenya's coast. The fort's walls, bastions, and passageways can be explored. Archaeological excavations have revealed layers of Swahili, Portuguese, Arab, and British occupation. The site offers stunning views of the Old Port of Mombasa and provides fascinating insights into East Africa's colonial history.",
        tags: ["history", "museum", "architecture", "unesco"],
        bestTime: "Year-round",
        activities: ["Historical tours", "Museum visits", "Photography", "Cultural learning"],
        duration: "Half day",
        priceRange: "$",
        rating: 4.3,
        featured: false
    },
    {
        id: 11,
        name: "Amboseli National Park",
        location: "Kajiado County",
        category: "wildlife",
        image: "https://images.unsplash.com/photo-1523805009345-7448845a9e53?w=800&auto=format&fit=crop&q=60",
        description: "Famous for large elephant herds with spectacular views of Mount Kilimanjaro.",
        fullDescription: "Amboseli National Park offers some of the best wildlife viewing in Africa with a backdrop of Mount Kilimanjaro. The park is famous for its large elephant herds - you can get very close to these gentle giants. The permanent swamps fed by Kilimanjaro's melting snows attract diverse wildlife including lions, cheetahs, buffalo, giraffes, and zebras. The park features five distinct wildlife habitats ranging from dried-up Lake Amboseli, wetlands, savannah, and woodlands. Observation Hill offers panoramic views of the park. Cultural visits to Maasai villages provide insight into traditional pastoralist lifestyles. Dawn and dusk offer the clearest views of Kilimanjaro. The park's open plains make wildlife easy to spot and photograph.",
        tags: ["elephants", "kilimanjaro", "safari", "photography"],
        bestTime: "June-October, January-February",
        activities: ["Game drives", "Elephant watching", "Bird watching", "Cultural visits", "Photography"],
        duration: "2-3 days",
        priceRange: "$$$",
        rating: 4.7,
        featured: true
    },
    {
        id: 12,
        name: "Karura Forest",
        location: "Nairobi",
        category: "nature",
        image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&auto=format&fit=crop&q=60",
        description: "Urban forest sanctuary with waterfalls, caves, and hiking trails.",
        fullDescription: "Karura Forest is a 1,041-hectare urban forest providing a green oasis in the heart of Nairobi. The forest features over 50 kilometers of walking, running, and cycling trails through pristine indigenous forest. Highlights include scenic waterfalls, lily-covered ponds, and caves that were used by Mau Mau freedom fighters. The forest is home to over 200 bird species, colobus monkeys, bushbucks, and duikers. It's a popular recreation spot for Nairobi residents offering activities like jogging, cycling, picnicking, and nature walks. The forest also plays a crucial role in carbon sequestration and watershed protection. Entry is affordable and the forest is well-maintained with security patrols, making it accessible to all visitors.",
        tags: ["forest", "trails", "urban nature", "conservation"],
        bestTime: "Year-round",
        activities: ["Hiking", "Cycling", "Bird watching", "Picnicking", "Running"],
        duration: "Half day",
        priceRange: "$",
        rating: 4.5,
        featured: false
    },
    {
        id: 13,
        name: "Samburu National Reserve",
        location: "Samburu County",
        category: "wildlife",
        image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&auto=format&fit=crop&q=60",
        description: "Unique wildlife sanctuary home to the 'Samburu Special Five' species.",
        fullDescription: "Samburu National Reserve is a rugged semi-arid region in northern Kenya known for its unique wildlife. The reserve is home to the 'Samburu Special Five' - Grevy's zebra, Somali ostrich, reticulated giraffe, gerenuk, and Beisa oryx. The Ewaso Ng'iro River flows through the reserve, providing a lifeline for animals and creating beautiful riverine forests. Visitors can see elephants, lions, leopards, and over 450 bird species. The local Samburu people, cousins to the Maasai, maintain their traditional pastoralist lifestyle. Cultural visits to Samburu villages offer insights into their unique customs and colorful dress. The dramatic landscape of rugged hills and vast plains creates a stunning backdrop for photography.",
        tags: ["special five", "safari", "cultural", "photography"],
        bestTime: "June-October, January-February",
        activities: ["Game drives", "Bird watching", "Cultural visits", "Photography", "Nature walks"],
        duration: "2-3 days",
        priceRange: "$$$",
        rating: 4.6,
        featured: false
    },
    {
        id: 14,
        name: "Tsavo East National Park",
        location: "Taita-Taveta County",
        category: "wildlife",
        image: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=800&auto=format&fit=crop&q=60",
        description: "Kenya's largest national park with red elephants and vast wilderness.",
        fullDescription: "Tsavo East National Park is one of the oldest and largest parks in Kenya, covering 13,747 square kilometers. The park is famous for its 'red elephants' that dust-bathe in the red volcanic soil. The Galana River flows through the park, providing a permanent water source and creating a green belt in the otherwise arid landscape. Visitors can see large herds of elephants, lions, leopards, buffalo, and the unique fringe-eared oryx. The Mudanda Rock and Lugard Falls are key attractions. The park's vast wilderness offers a sense of true adventure and isolation. Tsavo East is less visited than other parks, providing a more exclusive safari experience with excellent opportunities for wildlife photography.",
        tags: ["elephants", "wilderness", "safari", "adventure"],
        bestTime: "June-October, January-February",
        activities: ["Game drives", "Bird watching", "Photography", "Wildlife tracking"],
        duration: "2-4 days",
        priceRange: "$$",
        rating: 4.5,
        featured: false
    },
    {
        id: 15,
        name: "Malindi Marine Park",
        location: "Malindi, Kilifi County",
        category: "beach",
        image: "https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=800&auto=format&fit=crop&q=60",
        description: "Protected coral reef ecosystem with vibrant marine life and clear waters.",
        fullDescription: "Malindi Marine National Park is Kenya's first marine protected area, established in 1968. The park protects a spectacular coral reef ecosystem with over 100 species of coral and 300 species of fish. The clear turquoise waters are perfect for snorkeling and glass-bottom boat tours. Visitors can see moray eels, parrotfish, angelfish, and occasionally dolphins and turtles. The park includes the famous 'Malindi Wall' - a dramatic coral drop-off that attracts divers from around the world. Nearby attractions include the Vasco da Gama Pillar and the Gede Ruins. The park's proximity to Malindi town makes it easily accessible while maintaining its pristine natural beauty. Professional guides are available to enhance the marine experience.",
        tags: ["coral reef", "snorkeling", "marine life", "conservation"],
        bestTime: "October-March",
        activities: ["Snorkeling", "Glass-bottom boat tours", "Diving", "Beach relaxation", "Marine education"],
        duration: "1-2 days",
        priceRange: "$$",
        rating: 4.4,
        featured: false
    }
];

// Make destinations available globally
window.destinationsData = destinations;

// Helper function to get featured destinations
window.getFeaturedDestinations = function() {
    return destinations.filter(dest => dest.featured);
};

// Helper function to get destinations by category
window.getDestinationsByCategory = function(category) {
    return destinations.filter(dest => dest.category === category);
};

// Helper function to search destinations
window.searchDestinations = function(query) {
    const searchTerm = query.toLowerCase();
    return destinations.filter(dest => {
        const searchableText = `
            ${dest.name} 
            ${dest.location} 
            ${dest.category} 
            ${dest.description} 
            ${dest.tags.join(' ')}
            ${dest.activities.join(' ')}
        `.toLowerCase();

        return searchableText.includes(searchTerm);
    });
};