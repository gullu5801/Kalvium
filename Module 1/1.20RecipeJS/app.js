// [PART 3 NEW] IIFE MODULE PATTERN
// We wrap the entire application in an Immediately Invoked Function Expression
// to create a private scope and avoid polluting the global namespace.

const RecipeApp = (() => {

    // DATA SECTION
    // [PART 1]: Base structure (id, title, time, difficulty, etc.)
    // [PART 3]: Added 'ingredients' and recursive 'steps' arrays
    
    const recipes = [
        {
            id: 1,
            title: "Classic Spaghetti Carbonara",
            time: 25,
            difficulty: "easy",
            description: "A creamy Italian pasta dish made with eggs, cheese, pancetta, and black pepper.",
            category: "pasta",
            // [PART 3 NEW]: Ingredients Array
            ingredients: ["400g spaghetti", "4 large eggs", "100g parmesan cheese", "150g pancetta", "Black pepper", "Salt"],
            // [PART 3 NEW]: Recursive Steps Structure
            steps: [
                "Boil a large pot of salted water.",
                "Cook spaghetti until al dente.",
                {
                    text: "Prepare the sauce:", // Nested Step
                    substeps: ["Whisk eggs and cheese in a bowl.", "Season generously with pepper."]
                },
                "Fry pancetta until crisp.",
                "Toss hot pasta with pancetta and egg mixture (off heat) to create creamy sauce."
            ]
        },
        {
            id: 2,
            title: "Chicken Tikka Masala",
            time: 45,
            difficulty: "medium",
            description: "Tender chicken pieces in a creamy, spiced tomato sauce.",
            category: "curry",
            ingredients: ["500g chicken breast", "Yogurt", "Tomato puree", "Cream", "Garlic & Ginger", "Spices"],
            steps: [
                {
                    text: "Marinate the chicken:",
                    substeps: ["Mix yogurt and spices.", "Coat chicken and rest for 20 mins."]
                },
                "Cook chicken in a hot pan until charred.",
                {
                    text: "Make the sauce:",
                    substeps: ["Sauté onions, ginger, and garlic.", "Add tomato puree and simmer.", "Stir in cream."]
                },
                "Combine chicken and sauce."
            ]
        },
        // ... (Includes all other recipes with updated Steps/Ingredients) ...
        {
             id: 3, 
             title: "Homemade Croissants", 
             time: 180, 
             difficulty: "hard", 
             description: "Buttery, flaky French pastries.", 
             category: "baking",
             ingredients: ["Flour", "Butter", "Yeast", "Milk", "Sugar"],
             steps: ["Mix dough", { text: "Laminate dough", substeps: ["Fold butter", "Roll out", "Chill"] }, "Bake"]
        },
        {
            id: 4, title: "Greek Salad", time: 15, difficulty: "easy", description: "Fresh vegetables and feta.", category: "salad",
            ingredients: ["Cucumber", "Tomato", "Feta", "Olives"], steps: ["Chop veggies", "Mix in bowl", "Add feta", "Drizzle oil"]
        },
        {
            id: 5, title: "Beef Wellington", time: 120, difficulty: "hard", description: "Beef fillet in puff pastry.", category: "meat",
            ingredients: ["Beef fillet", "Mushrooms", "Prosciutto", "Puff pastry"], steps: ["Sear beef", { text: "Make duxelles", substeps: ["Chop mushrooms", "Fry dry"] }, "Wrap in pastry", "Bake"]
        },
        {
            id: 6, title: "Vegetable Stir Fry", time: 20, difficulty: "easy", description: "Quick veggies in sauce.", category: "vegetarian",
            ingredients: ["Broccoli", "Carrots", "Soy sauce", "Ginger"], steps: ["Chop veggies", "Stir fry hard veggies", "Add sauce", "Serve"]
        },
        {
            id: 7, title: "Pad Thai", time: 30, difficulty: "medium", description: "Thai rice noodles.", category: "noodles",
            ingredients: ["Rice noodles", "Shrimp", "Peanuts", "Tamarind", "Egg"], steps: ["Soak noodles", {text: "Make sauce", substeps: ["Mix tamarind", "Sugar", "Fish sauce"]}, "Fry shrimp", "Toss everything"]
        },
        {
            id: 8, title: "Margherita Pizza", time: 60, difficulty: "medium", description: "Classic Italian pizza.", category: "pizza",
            ingredients: ["Dough", "Tomatoes", "Mozzarella", "Basil"], steps: ["Stretch dough", "Add sauce", "Add cheese", "Bake high heat"]
        }
    ];

    
    // STATE MANAGEMENT
    // [PART 2]: Variables to track current filter and sort
    
    let currentFilter = 'all';
    let currentSort = 'none';

    
    // DOM SELECTION
    // [PART 1]: Recipe container
    // [PART 2]: Filter and Sort buttons
    
    const recipeContainer = document.querySelector('#recipe-container');
    const filterButtons = document.querySelectorAll('.filter-btn');
    const sortButtons = document.querySelectorAll('.sort-btn');

    
    // HELPER FUNCTIONS
    

    // [PART 3 NEW]: Recursive Function
    // Handles nested steps (steps inside steps)
    const renderSteps = (steps) => {
        let html = '<ul class="steps-list">';
        
        steps.forEach(step => {
            if (typeof step === 'string') {
                // Base Case: It's just a text string
                html += `<li class="step-item"><span class="step-text">${step}</span></li>`;
            } else if (typeof step === 'object') {
                // Recursive Case: It's an object with substeps
                html += `
                    <li class="step-item">
                        <span class="step-text">${step.text}</span>
                        <div class="substeps">
                            ${renderSteps(step.substeps)} </div>
                    </li>
                `;
            }
        });
        
        html += '</ul>';
        return html;
    };

    // [PART 3 NEW]: Ingredients Renderer
    const createIngredientsHTML = (ingredients) => {
        return `
            <h4>🛒 Ingredients</h4>
            <ul class="ingredients-list">
                ${ingredients.map(ing => `<li>${ing}</li>`).join('')}
            </ul>
        `;
    };

    // [PART 1 & 3]: Card Creator
    // Updated in Part 3 to include Toggle Buttons and Hidden Containers
    const createRecipeCard = (recipe) => {
        return `
            <div class="recipe-card" data-id="${recipe.id}">
                <h3>${recipe.title}</h3>
                <div class="recipe-meta">
                    <span>⏱️ ${recipe.time} min</span>
                    <span class="difficulty ${recipe.difficulty}">${recipe.difficulty}</span>
                </div>
                <p>${recipe.description}</p>
                
                <div class="card-actions">
                    <button class="view-btn toggle-btn" data-action="ingredients" data-id="${recipe.id}">
                        Show Ingredients
                    </button>
                    <button class="view-btn toggle-btn" data-action="steps" data-id="${recipe.id}">
                        Show Steps
                    </button>
                </div>

                <div class="ingredients-container" id="ingredients-${recipe.id}">
                    ${createIngredientsHTML(recipe.ingredients)}
                </div>

                <div class="steps-container" id="steps-${recipe.id}">
                    <h4>👩‍🍳 Instructions</h4>
                    ${renderSteps(recipe.steps)}
                </div>
            </div>
        `;
    };

    // [PART 1]: Main Render Function
    const renderRecipes = (recipesToRender) => {
        const recipeCardsHTML = recipesToRender.map(createRecipeCard).join('');
        recipeContainer.innerHTML = recipeCardsHTML;
    };

    
    // FILTER & SORT LOGIC (PURE FUNCTIONS)
    // [PART 2]: Logic to filter/sort data without mutating original
    
    const filterByDifficulty = (recipes, difficulty) => recipes.filter(r => r.difficulty === difficulty);
    const filterByTime = (recipes, maxTime) => recipes.filter(r => r.time <= maxTime);
    
    const applyFilter = (recipes, filterType) => {
        switch(filterType) {
            case 'easy': return filterByDifficulty(recipes, 'easy');
            case 'medium': return filterByDifficulty(recipes, 'medium');
            case 'hard': return filterByDifficulty(recipes, 'hard');
            case 'quick': return filterByTime(recipes, 30);
            default: return recipes;
        }
    };

    const applySort = (recipes, sortType) => {
        const sorted = [...recipes]; // Copy array (Immutability)
        switch(sortType) {
            case 'name': return sorted.sort((a, b) => a.title.localeCompare(b.title));
            case 'time': return sorted.sort((a, b) => a.time - b.time);
            default: return sorted;
        }
    };

    // [PART 2]: UI Update for buttons
    const updateActiveButtons = () => {
        filterButtons.forEach(btn => btn.classList.toggle('active', btn.dataset.filter === currentFilter));
        sortButtons.forEach(btn => btn.classList.toggle('active', btn.dataset.sort === currentSort));
    };

    // [PART 2]: Master Update Function
    // Chains Filter -> Sort -> Render
    const updateDisplay = () => {
        let result = applyFilter(recipes, currentFilter);
        result = applySort(result, currentSort);
        renderRecipes(result);
        updateActiveButtons();
    };

    
    // EVENT HANDLERS
    

    // [PART 3 NEW]: Event Delegation Handler
    // Handles clicks on dynamically created toggle buttons
    const handleToggleClick = (e) => {
        // Check if the clicked element is a toggle button
        if (!e.target.classList.contains('toggle-btn')) return;

        const btn = e.target;
        const action = btn.dataset.action; // 'steps' or 'ingredients'
        const id = btn.dataset.id;
        
        // Find the specific container
        const container = document.getElementById(`${action}-${id}`);
        
        // Toggle visibility class
        container.classList.toggle('visible');
        
        // Update button text based on state
        const isVisible = container.classList.contains('visible');
        const textMap = {
            'ingredients': isVisible ? 'Hide Ingredients' : 'Show Ingredients',
            'steps': isVisible ? 'Hide Steps' : 'Show Steps'
        };
        btn.textContent = textMap[action];
    };

    // [PART 2 & 3]: Setup Listeners
    const setupEventListeners = () => {
        // [PART 2] Filter/Sort Buttons
        filterButtons.forEach(btn => {
            btn.addEventListener('click', (e) => {
                currentFilter = e.target.dataset.filter;
                updateDisplay();
            });
        });

        sortButtons.forEach(btn => {
            btn.addEventListener('click', (e) => {
                currentSort = e.target.dataset.sort;
                updateDisplay();
            });
        });

        // [PART 3 NEW] Event Delegation on the Parent Container
        recipeContainer.addEventListener('click', handleToggleClick);
    };

   
    // [PART 3 NEW] PUBLIC API
    // Exposes only the init function to the outside world
    
    return {
        init: () => {
            console.log('RecipeApp initializing...');
            setupEventListeners();
            updateDisplay();
            console.log('RecipeApp ready!');
        }
    };

})(); // End of IIFE

// Start the app
RecipeApp.init();