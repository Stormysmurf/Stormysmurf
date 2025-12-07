// Kenyan Slang Dictionary Data
const slangDictionary = [
    // A
    { word: "Asante", pronunciation: "ah-SAN-teh", meaning: "Thank you", example: "Asante sana for the directions!", category: "Swahili", letter: "A" },
    { word: "Aki", pronunciation: "AH-kee", meaning: "Really? / Seriously?", example: "Aki, you went to Maasai Mara without me?", category: "Sheng", letter: "A" },
    
    // B
    { word: "Brathe", pronunciation: "BRAH-theh", meaning: "Brother / Friend", example: "Brathe, let's grab some nyama choma tonight", category: "Sheng", letter: "B" },
    { word: "Buda", pronunciation: "BOO-dah", meaning: "Father / Old man", example: "My buda is visiting from upcountry", category: "Sheng", letter: "B" },
    { word: "Bash", pronunciation: "bash", meaning: "Party / Celebration", example: "There's a bash at my place this weekend", category: "Sheng", letter: "B" },
    
    // C
    { word: "Chipo", pronunciation: "CHEE-poh", meaning: "Broken / Damaged", example: "My phone is chipo, I need a new one", category: "Sheng", letter: "C" },
    { word: "Chokoraa", pronunciation: "cho-ko-RAH", meaning: "Street child", example: "Let's donate to the chokoraa charity", category: "Sheng", letter: "C" },
    
    // D
    { word: "Doh", pronunciation: "doh", meaning: "Money", example: "I need some doh to buy lunch", category: "Sheng", letter: "D" },
    { word: "Dunda", pronunciation: "DOON-dah", meaning: "Idiot / Fool", example: "Don't be a dunda, think before you act", category: "Sheng", letter: "D" },
    
    // F
    { word: "Fala", pronunciation: "FAH-lah", meaning: "Stupid person", example: "That fala tried to scam me", category: "Sheng", letter: "F" },
    { word: "Freshi", pronunciation: "FRESH-ee", meaning: "Cool / Awesome / Fresh", example: "Those sneakers are freshi!", category: "Sheng", letter: "F" },
    
    // G
    { word: "Gari", pronunciation: "GAH-ree", meaning: "Car / Vehicle", example: "Nice gari you got there!", category: "Swahili", letter: "G" },
    { word: "Gova", pronunciation: "GOH-vah", meaning: "Girlfriend", example: "I'm taking my gova to Diani this weekend", category: "Sheng", letter: "G" },
    { word: "Ganji", pronunciation: "GAN-jee", meaning: "Money", example: "I'm broke, no ganji at all", category: "Sheng", letter: "G" },
    
    // H
    { word: "Hakuna Matata", pronunciation: "hah-KOO-nah mah-TAH-tah", meaning: "No worries / No problem", example: "The bus is late? Hakuna matata, we'll catch the next one", category: "Swahili", letter: "H" },
    { word: "Hii ni noma", pronunciation: "HEE nee NOH-mah", meaning: "This is tough / difficult", example: "Hii ni noma, this exam is hard!", category: "Swahili/Sheng", letter: "H" },
    { word: "Hawezani", pronunciation: "hah-weh-ZAH-nee", meaning: "Impossible / Can't do it", example: "Climbing Mt Kenya in one day? Hawezani!", category: "Swahili", letter: "H" },
    
    // J
    { word: "Jambo", pronunciation: "JAM-boh", meaning: "Hello", example: "Jambo! Welcome to Kenya!", category: "Swahili", letter: "J" },
    
    // K
    { word: "Kitu kidogo", pronunciation: "KEE-too kee-DOH-goh", meaning: "A little something (bribe)", example: "The officer asked for kitu kidogo", category: "Swahili", letter: "K" },
    { word: "Kwanza", pronunciation: "KWAN-zah", meaning: "First of all / To begin with", example: "Kwanza, we need to find a matatu", category: "Swahili", letter: "K" },
    { word: "Kula", pronunciation: "KOO-lah", meaning: "To eat", example: "Let's kula some mandazi", category: "Swahili", letter: "K" },
    
    // M
    { word: "Matatu", pronunciation: "mah-TAH-too", meaning: "Public minibus", example: "Take a matatu from town to Westlands", category: "Swahili", letter: "M" },
    { word: "Mandazi", pronunciation: "man-DAH-zee", meaning: "Kenyan doughnut", example: "I love mandazi with chai", category: "Swahili", letter: "M" },
    { word: "Mzee", pronunciation: "mm-ZEH", meaning: "Old man / Elder / Sir", example: "Mzee, can you show me the way?", category: "Swahili", letter: "M" },
    { word: "Mbaya", pronunciation: "mm-BAH-yah", meaning: "Bad / Terrible", example: "The traffic today is mbaya sana", category: "Swahili", letter: "M" },
    { word: "Mzito", pronunciation: "mm-ZEE-toh", meaning: "Big shot / VIP / Heavy", example: "That guy is mzito in this area", category: "Sheng", letter: "M" },
    
    // N
    { word: "Ngoma", pronunciation: "nn-GOH-mah", meaning: "Party / Music / Dance", example: "Let's hit the ngoma tonight", category: "Swahili", letter: "N" },
    { word: "Njaa", pronunciation: "nn-JAH", meaning: "Hunger / Hungry", example: "I have njaa, let's eat", category: "Swahili", letter: "N" },
    { word: "Noma", pronunciation: "NOH-mah", meaning: "Difficult / Tough / Cool", example: "That car is noma (cool) / This test is noma (hard)", category: "Sheng", letter: "N" },
    { word: "Nyama Choma", pronunciation: "NYAH-mah CHO-mah", meaning: "Grilled meat (BBQ)", example: "Let's have nyama choma this evening", category: "Swahili", letter: "N" },
    
    // P
    { word: "Poa", pronunciation: "POH-ah", meaning: "Cool / Fine / Okay", example: "How are you? Poa! (I'm fine)", category: "Swahili", letter: "P" },
    { word: "Pole", pronunciation: "POH-leh", meaning: "Sorry / Slowly", example: "Pole pole (slowly slowly) - take your time", category: "Swahili", letter: "P" },
    { word: "Pesa", pronunciation: "PEH-sah", meaning: "Money", example: "I need pesa to buy that shirt", category: "Swahili", letter: "P" },
    
    // S
    { word: "Sawa", pronunciation: "SAH-wah", meaning: "Okay / Alright / Good", example: "Sawa sawa, I understand", category: "Swahili", letter: "S" },
    { word: "Shida", pronunciation: "SHEE-dah", meaning: "Problem / Trouble", example: "No shida, we can fix it", category: "Swahili", letter: "S" },
    { word: "Sasa", pronunciation: "SAH-sah", meaning: "Now / What's up?", example: "Sasa brathe? (What's up brother?)", category: "Swahili/Sheng", letter: "S" },
    { word: "Si noma", pronunciation: "see NOH-mah", meaning: "That's cool / Awesome", example: "You got promoted? Si noma!", category: "Sheng", letter: "S" },
    { word: "Shosho", pronunciation: "SHOH-shoh", meaning: "Grandmother", example: "My shosho lives in the village", category: "Sheng", letter: "S" },
    
    // T
    { word: "Tuko sawa", pronunciation: "TOO-koh SAH-wah", meaning: "We're good / We're okay", example: "Don't worry, tuko sawa", category: "Swahili", letter: "T" },
    { word: "Tulia", pronunciation: "too-LEE-ah", meaning: "Calm down / Relax", example: "Tulia, hakuna shida (Calm down, no problem)", category: "Swahili", letter: "T" },
    
    // U
    { word: "Uko sawa?", pronunciation: "OO-koh SAH-wah", meaning: "Are you okay?", example: "Uko sawa? You look tired", category: "Swahili", letter: "U" },
    { word: "Ugali", pronunciation: "oo-GAH-lee", meaning: "Maize meal staple food", example: "Let's have ugali with sukuma wiki", category: "Swahili", letter: "U" },
    
    // V
    { word: "Vipi", pronunciation: "VEE-pee", meaning: "How's it going? / What's up?", example: "Vipi brathe? (What's up brother?)", category: "Swahili", letter: "V" },
    { word: "Vitu ni fiti", pronunciation: "VEE-too nee FEE-tee", meaning: "Things are cool / All good", example: "How's life? Vitu ni fiti!", category: "Sheng", letter: "V" },
    
    // W
    { word: "Wacha", pronunciation: "WAH-chah", meaning: "Stop it / Leave it / Come on!", example: "Wacha! You're kidding me!", category: "Swahili", letter: "W" },
    { word: "Wazee", pronunciation: "wah-ZEH", meaning: "Elders / Old people / Parents", example: "I need to visit my wazee this weekend", category: "Swahili", letter: "W" }
];

let currentFilter = 'all';
let searchQuery = '';

document.addEventListener('DOMContentLoaded', function() {
    renderSlangCards();
    initializeAlphabetFilter();
    initializeSearch();
});

function renderSlangCards() {
    const slangGrid = document.getElementById('slangGrid');
    const emptyState = document.getElementById('slangEmptyState');
    
    let filtered = slangDictionary;
    
    // Apply letter filter
    if (currentFilter !== 'all') {
        filtered = filtered.filter(slang => slang.letter === currentFilter);
    }
    
    // Apply search filter
    if (searchQuery) {
        filtered = filtered.filter(slang => 
            slang.word.toLowerCase().includes(searchQuery) ||
            slang.meaning.toLowerCase().includes(searchQuery) ||
            slang.example.toLowerCase().includes(searchQuery)
        );
    }
    
    // Show/hide empty state
    if (filtered.length === 0) {
        slangGrid.style.display = 'none';
        emptyState.style.display = 'block';
        return;
    } else {
        slangGrid.style.display = 'grid';
        emptyState.style.display = 'none';
    }
    
    // Sort alphabetically
    filtered.sort((a, b) => a.word.localeCompare(b.word));
    
    // Render cards
    slangGrid.innerHTML = filtered.map(slang => `
        <div class="slang-card">
            <div class="slang-word">${slang.word}</div>
            <div class="slang-pronunciation">(${slang.pronunciation})</div>
            <div class="slang-meaning">${slang.meaning}</div>
            <div class="slang-example"><strong>Example:</strong> "${slang.example}"</div>
            <span class="slang-category">${slang.category}</span>
        </div>
    `).join('');
}

function initializeAlphabetFilter() {
    const alphabetBtns = document.querySelectorAll('.alphabet-btn');
    
    alphabetBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Remove active from all
            alphabetBtns.forEach(b => b.classList.remove('active'));
            
            // Add active to clicked
            this.classList.add('active');
            
            // Update filter
            currentFilter = this.getAttribute('data-letter');
            
            // Re-render
            renderSlangCards();
        });
    });
}

function initializeSearch() {
    const searchInput = document.getElementById('slangSearch');
    const searchBtn = document.querySelector('.slang-search-btn');
    
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            searchQuery = this.value.toLowerCase();
            renderSlangCards();
        });
    }
    
    if (searchBtn) {
        searchBtn.addEventListener('click', function() {
            searchQuery = searchInput.value.toLowerCase();
            renderSlangCards();
        });
    }
}