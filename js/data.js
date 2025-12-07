// Kenya Tourist Destinations Data
const destinationsData = [
    {
        id: 1,
        name: "Maasai Mara National Reserve",
        location: "Narok County",
        category: "wildlife",
        image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800",
        description: "Home to the spectacular Great Migration, the Maasai Mara is Kenya's most famous wildlife reserve. Experience incredible game viewing including the Big Five, and immerse yourself in Maasai culture.",
        longDescription: "The Maasai Mara National Reserve is an area of preserved savannah wilderness in southwestern Kenya, along the Tanzanian border. Its animals include lions, cheetahs, elephants, zebras and hippos. Wildebeest traverse its plains during their annual migration. The landscape has grassy plains and rolling hills, and is crossed by the Mara and Talek rivers. The area nearby is dotted with villages (enkangs) of Maasai people.",
        tags: ["Safari", "Big Five", "Migration"],
        bestTime: "July to October",
        activities: ["Game drives", "Hot air balloon safaris", "Cultural visits"],
        featured: true
    },
    {
        id: 2,
        name: "Diani Beach",
        location: "South Coast, Mombasa",
        category: "beach",
        image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800",
        description: "Crystal-clear turquoise waters and pristine white sand beaches make Diani one of Africa's most beautiful coastal destinations. Perfect for water sports, diving, and relaxation.",
        longDescription: "Diani Beach is a major beach resort on the Indian Ocean coast of Kenya. It's known for its coral reefs, black-and-white colobus monkeys and its beach. The area offers various water sports including kitesurfing, jet-skiing, and scuba diving. The Kaya Kinondo Sacred Forest, nearby, is home to indigenous trees and is a site of cultural significance.",
        tags: ["Beach", "Diving", "Relaxation"],
        bestTime: "December to March",
        activities: ["Snorkeling", "Kitesurfing", "Beach relaxation"],
        featured: true
    },
    {
        id: 3,
        name: "Mount Kenya",
        location: "Central Kenya",
        category: "mountain",
        image: "https://images.unsplash.com/photo-1590750107181-4c0abaee9661?w=800",
        description: "Africa's second-highest mountain offers challenging climbs and stunning alpine scenery. The UNESCO World Heritage site features unique flora and fauna in various ecological zones.",
        longDescription: "Mount Kenya is the highest mountain in Kenya and the second-highest in Africa, after Kilimanjaro. The mountain has three main peaks: Batian, Nelion and Lenana. It's a UNESCO World Heritage Site and an important water catchment area. The diverse ecosystem ranges from bamboo forest to alpine moorland and glaciers.",
        tags: ["Trekking", "Adventure", "UNESCO"],
        bestTime: "January to February, July to October",
        activities: ["Mountain climbing", "Wildlife viewing", "Photography"],
        featured: true
    },
    {
        id: 4,
        name: "Amboseli National Park",
        location: "Kajiado County",
        category: "wildlife",
        image: "https://images.unsplash.com/photo-1549366021-9f761d450615?w=800",
        description: "Famous for its large elephant herds and spectacular views of Mount Kilimanjaro. Amboseli offers some of the best opportunities for wildlife photography in Africa.",
        longDescription: "Amboseli National Park is in southern Kenya. It's known for its large elephant herds and views of immense Mount Kilimanjaro across the border in Tanzania. Observation Hill allows panoramic views of the peak and the park's plains and swamps. Varied wildlife includes giraffes, zebras, cheetahs and hundreds of bird species. The western section of the park is dominated by vast Lake Amboseli, which is dry outside the rainy season.",
        tags: ["Elephants", "Photography", "Kilimanjaro Views"],
        bestTime: "June to October, January to February",
        activities: ["Game drives", "Bird watching", "Cultural visits"],
        featured: false
    },
    {
        id: 5,
        name: "Lake Nakuru National Park",
        location: "Nakuru County",
        category: "wildlife",
        image: "https://images.unsplash.com/photo-1535083783855-76ae62b2914e?w=800",
        description: "A birdwatcher's paradise famous for thousands of flamingos that fringe the lake's shores. Also home to endangered rhinos and diverse wildlife.",
        longDescription: "Lake Nakuru National Park is centered on Lake Nakuru, a shallow alkaline lake in the Rift Valley. The park supports a wide ecological diversity with flamingos and other water birds being the major attractions. It's also home to both black and white rhinos, making it one of the largest rhinoceros sanctuaries in Kenya. Other wildlife includes lions, leopards, waterbucks and Rothschild's giraffes.",
        tags: ["Flamingos", "Rhinos", "Bird watching"],
        bestTime: "Year-round",
        activities: ["Bird watching", "Game drives", "Photography"],
        featured: false
    },
    {
        id: 6,
        name: "Lamu Island",
        location: "Lamu County",
        category: "cultural",
        image: "https://images.unsplash.com/photo-1591343395902-bce8b5a5f36e?w=800",
        description: "A UNESCO World Heritage site, Lamu is Kenya's oldest living town with Swahili culture dating back centuries. Explore narrow streets, traditional dhows, and beautiful architecture.",
        longDescription: "Lamu Old Town is the oldest and best-preserved Swahili settlement in East Africa, retaining its traditional functions. Built in coral stone and mangrove timber, the town is characterized by the simplicity of structural forms enriched by such features as inner courtyards, verandas, and elaborately carved wooden doors. There are no motorized vehicles on the island – donkeys, bicycles and boats are the primary modes of transport.",
        tags: ["Culture", "Heritage", "Architecture"],
        bestTime: "October to March",
        activities: ["Cultural tours", "Dhow sailing", "Beach relaxation"],
        featured: true
    },
    {
        id: 7,
        name: "Hell's Gate National Park",
        location: "Nakuru County",
        category: "mountain",
        image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800",
        description: "One of the few parks where you can walk, cycle, or rock climb. Features dramatic scenery including gorges, cliffs, and geothermal hot springs.",
        longDescription: "Hell's Gate National Park is named after a narrow break in the cliffs. The park is notable for its wide variety of wildlife and its scenery including the towering cliffs, gorges, and geothermal steam vents. It's one of only two national parks in Kenya where climbing, walking, and biking are allowed. The park inspired the setting for Disney's The Lion King.",
        tags: ["Cycling", "Rock Climbing", "Gorges"],
        bestTime: "Year-round",
        activities: ["Cycling", "Rock climbing", "Hiking"],
        featured: false
    },
    {
        id: 8,
        name: "Watamu",
        location: "Kilifi County",
        category: "beach",
        image: "https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=800",
        description: "A pristine marine park with spectacular coral reefs, white sandy beaches, and sea turtles. Perfect for diving, snorkeling, and deep-sea fishing.",
        longDescription: "Watamu is a small coastal town in Kenya, northwest of Mombasa. The Watamu Marine National Park is home to sea turtles and dolphins, and is known for its coral reefs. The Gede Ruins, dating back to the 12th century, showcase Swahili architecture and are surrounded by coastal forest. The area is also known for its pristine beaches, with white sands and turquoise waters ideal for water sports.",
        tags: ["Marine Life", "Snorkeling", "Turtles"],
        bestTime: "October to March",
        activities: ["Snorkeling", "Diving", "Turtle watching"],
        featured: false
    },
    {
        id: 9,
        name: "Samburu National Reserve",
        location: "Samburu County",
        category: "wildlife",
        image: "https://images.unsplash.com/photo-1534177616072-ef7dc120449d?w=800",
        description: "Remote and ruggedly beautiful, Samburu is home to unique wildlife species including the Grevy's zebra, reticulated giraffe, and Somali ostrich.",
        longDescription: "Samburu National Reserve is a game reserve on the banks of the Ewaso Ng'iro river in Kenya. On the other side of the river is the Buffalo Springs National Reserve. The park is 165 km² in size and is 350 kilometers from Nairobi. It ranges in altitude from 800 to 1230m above sea level. Samburu is relatively small in size compared to other Kenyan parks and can be conveniently visited in a day trip from Nairobi.",
        tags: ["Unique Wildlife", "Remote", "Photography"],
        bestTime: "June to October",
        activities: ["Game drives", "Bird watching", "Cultural visits"],
        featured: false
    },
    {
        id: 10,
        name: "Karura Forest",
        location: "Nairobi",
        category: "cultural",
        image: "https://images.unsplash.com/photo-1511497584788-876760111969?w=800",
        description: "An urban forest in the heart of Nairobi offering peaceful trails, waterfalls, caves, and abundant birdlife. Perfect for hiking, cycling, and picnics.",
        longDescription: "Karura Forest is an urban forest in Nairobi, the capital of Kenya. The forest was gazetted in 1932 and is managed by the Kenya Forest Service. It covers 1041 hectares and is the largest gazetted forest in the city. The forest has a 50-kilometer trail network for walkers and cyclists. Inside the forest are several sites of interest including caves, waterfalls, and rivers.",
        tags: ["Urban Nature", "Hiking", "Waterfalls"],
        bestTime: "Year-round",
        activities: ["Hiking", "Cycling", "Bird watching"],
        featured: false
    },
    {
        id: 11,
        name: "Tsavo National Parks",
        location: "Coast Province",
        category: "wildlife",
        image: "https://images.unsplash.com/photo-1564760055775-d63b17a55c44?w=800",
        description: "Kenya's largest national park, divided into East and West. Famous for red elephants, diverse landscapes, and the Mzima Springs.",
        longDescription: "Tsavo National Park is made up of Tsavo East and Tsavo West and together they form one of the largest national parks in the world. The park is home to most of the larger mammals, with vast herds of dust-red elephant, Rhino, buffalo, lion, leopard, pods of hippo, crocodile, waterbucks, lesser Kudu, gerenuk and the prolific bird life.",
        tags: ["Red Elephants", "Vast Wilderness", "Mzima Springs"],
        bestTime: "June to October, January to February",
        activities: ["Game drives", "Bird watching", "Photography"],
        featured: false
    },
    {
        id: 12,
        name: "Fourteen Falls",
        location: "Thika",
        category: "waterfall",
        image: "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?w=800",
        description: "A series of spectacular waterfalls on the Athi River, offering breathtaking views and photo opportunities. Great for day trips from Nairobi.",
        longDescription: "Fourteen Falls is a series of waterfalls on the Athi River near Thika in Kenya. The falls drop in about five drops, making fourteen streams, although the exact number varies depending on the season. It's a popular weekend destination for locals and tourists alike, offering stunning views and photo opportunities.",
        tags: ["Waterfalls", "Day Trip", "Photography"],
        bestTime: "March to May (rainy season for best flow)",
        activities: ["Photography", "Picnicking", "Sightseeing"],
        featured: false
    }
];

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = destinationsData;
}