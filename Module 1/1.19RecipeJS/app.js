// Data (From Part 1)
const recipes = [
    { id: 1, title: "Classic Spaghetti Carbonara", time: 25, difficulty: "easy", description: "A creamy Italian pasta dish made with eggs, cheese, pancetta, and black pepper.", category: "pasta" },
    { id: 2, title: "Chicken Tikka Masala", time: 45, difficulty: "medium", description: "Tender chicken pieces in a creamy, spiced tomato sauce.", category: "curry" },
    { id: 3, title: "Homemade Croissants", time: 180, difficulty: "hard", description: "Buttery, flaky French pastries that require patience but deliver amazing results.", category: "baking" },
    { id: 4, title: "Greek Salad", time: 15, difficulty: "easy", description: "Fresh vegetables, feta cheese, and olives tossed in olive oil and herbs.", category: "salad" },
    { id: 5, title: "Beef Wellington", time: 120, difficulty: "hard", description: "Tender beef fillet coated with mushroom duxelles and wrapped in puff pastry.", category: "meat" },
    { id: 6, title: "Vegetable Stir Fry", time: 20, difficulty: "easy", description: "Colorful mixed vegetables cooked quickly in a savory sauce.", category: "vegetarian" },
    { id: 7, title: "Pad Thai", time: 30, difficulty: "medium", description: "Thai stir-fried rice noodles with shrimp, peanuts, and tangy tamarind sauce.", category: "noodles" },
    { id: 8, title: "Margherita Pizza", time: 60, difficulty: "medium", description: "Classic Italian pizza with fresh mozzarella, tomatoes, and basil.", category: "pizza" }
];

// ============================================
// [PART 2 NEW] STATE MANAGEMENT
// Variables to remember what the user has selected
// ============================================
let currentFilter = 'all';
let currentSort = 'none';

// DOM Selection
const recipeContainer = document.querySelector('#recipe-container');
// [PART 2 NEW] Select all buttons
const filterButtons = document.querySelectorAll('.filter-btn');
const sortButtons = document.querySelectorAll('.sort-btn');

// Render Functions (From Part 1)
const createRecipeCard = (recipe) => {
    return `
        <div class="recipe-card" data-id="${recipe.id}">
            <h3>${recipe.title}</h3>
            <div class="recipe-meta">
                <span>⏱️ ${recipe.time} min</span>
                <span class="difficulty ${recipe.difficulty}">${recipe.difficulty}</span>
            </div>
            <p>${recipe.description}</p>
        </div>
    `;
};

const renderRecipes = (recipesToRender) => {
    const recipeCardsHTML = recipesToRender.map(createRecipeCard).join('');
    recipeContainer.innerHTML = recipeCardsHTML;
};

// ============================================
// [PART 2 NEW] PURE HELPER FUNCTIONS
// These functions perform specific tasks without side effects
// ============================================

// Filter Logic
const filterByDifficulty = (recipes, difficulty) => {
    return recipes.filter(recipe => recipe.difficulty === difficulty);
};

const filterByTime = (recipes, maxTime) => {
    return recipes.filter(recipe => recipe.time <= maxTime);
};

// Sort Logic (Note: We use [...recipes] to copy the array so we don't mutate the original)
const sortByName = (recipes) => {
    return [...recipes].sort((a, b) => a.title.localeCompare(b.title));
};

const sortByTime = (recipes) => {
    return [...recipes].sort((a, b) => a.time - b.time);
};

// ============================================
// [PART 2 NEW] MAIN APPLICATION LOGIC
// Orchestrates the filtering, sorting, and rendering
// ============================================

// 1. Determine which filter to apply
const applyFilter = (recipes, filterType) => {
    switch (filterType) {
        case 'easy': return filterByDifficulty(recipes, 'easy');
        case 'medium': return filterByDifficulty(recipes, 'medium');
        case 'hard': return filterByDifficulty(recipes, 'hard');
        case 'quick': return filterByTime(recipes, 30);
        default: return recipes; // 'all'
    }
};

// 2. Determine which sort to apply
const applySort = (recipes, sortType) => {
    switch (sortType) {
        case 'name': return sortByName(recipes);
        case 'time': return sortByTime(recipes);
        default: return recipes; // 'none'
    }
};

// 3. The Master Update Function (Chains everything together)
const updateDisplay = () => {
    // Step A: Filter the data
    let result = applyFilter(recipes, currentFilter);

    // Step B: Sort the filtered data
    result = applySort(result, currentSort);

    // Step C: Render the result
    renderRecipes(result);

    // Step D: Visual feedback (highlight buttons)
    updateActiveButtons();
};

// Helper to toggle the 'active' class on buttons
const updateActiveButtons = () => {
    filterButtons.forEach(btn => {
        // Toggle 'active' if this button matches the current state
        if (btn.dataset.filter === currentFilter) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });

    sortButtons.forEach(btn => {
        if (btn.dataset.sort === currentSort) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
};

// ============================================
// [PART 2 NEW] EVENT LISTENERS
// Making the buttons interactive
// ============================================
const setupEventListeners = () => {
    // Add click events to Filter Buttons
    filterButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            currentFilter = e.target.dataset.filter; // Update state
            updateDisplay(); // Refresh UI
        });
    });

    // Add click events to Sort Buttons
    sortButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            currentSort = e.target.dataset.sort; // Update state
            updateDisplay(); // Refresh UI
        });
    });
};

// Initialization
setupEventListeners(); // [PART 2 NEW] Start listeners
updateDisplay();       // [PART 2 NEW] Initial render