// ==========================================
// CONCEPT 10: OOP & Prototypal Inheritance
// ==========================================
// Base Class demonstrating OOP concepts
class UtilityItem {
  constructor(title, amount, category) {
    this.id = Date.now().toString() + Math.random().toString(16).slice(2);
    this.title = title;
    this.amount = amount;
    this.category = category;
    this.dateAdded = new Date().toLocaleDateString();
  }
}

// Concept 10: Prototypal Inheritance (adding a method to the prototype)
UtilityItem.prototype.getFormattedAmount = function() {
  return `₹${this.amount.toFixed(2)}`;
};

// ==========================================
// STATE MANAGEMENT
// ==========================================
// Concept 1: ES6 Syntax (let/const)
let expenses = []; 

// DOM Elements Selection
const form = document.getElementById('expense-form');
const titleInput = document.getElementById('expense-title');
const amountInput = document.getElementById('expense-amount');
const categoryInput = document.getElementById('expense-category');
const expenseList = document.getElementById('expense-list');
const totalDisplay = document.getElementById('total-display');
const maxDisplay = document.getElementById('max-display');
const filterSelect = document.getElementById('filter-category');

// ==========================================
// PURE & FIRST-CLASS FUNCTIONS
// ==========================================

// Concept 5: Pure Function (No side effects, same input = same output)
// Concept 1: Arrow function syntax used here as well
const calculateSum = (dataArray) => {
  // Concept 8: Array Methods (reduce)
  return dataArray.reduce((acc, current) => acc + current.amount, 0);
};

// Concept 6: First-Class Function (Function assigned to a variable)
const formatCurrency = function(value) {
  // Concept 2: Template Literals
  return `₹${value.toFixed(2)}`;
};

// ==========================================
// RECURSION
// ==========================================

// Concept 9: Recursion
// A recursive function to find the maximum expense amount in the array
const findMaxExpense = (arr, index = 0, currentMax = 0) => {
  // Base case: if we reach the end of the array
  if (index === arr.length) return currentMax;
  
  // Recursive step
  const newMax = arr[index].amount > currentMax ? arr[index].amount : currentMax;
  return findMaxExpense(arr, index + 1, newMax);
};

// ==========================================
// HIGHER-ORDER FUNCTIONS & DATA TRANSFORMATION
// ==========================================

// Concept 7: Higher-Order Function 
// (Function that returns another function to handle filtering logic)
const createCategoryFilter = (targetCategory) => {
  return (expenseItem) => {
    if (targetCategory === 'All') return true;
    return expenseItem.category.toLowerCase() === targetCategory.toLowerCase();
  };
};

// ==========================================
// CORE APPLICATION LOGIC
// ==========================================

// Function to render expenses to the DOM
const renderDashboard = (dataToRender = expenses) => {
  // Clear the list
  expenseList.innerHTML = '';

  if (dataToRender.length === 0) {
    expenseList.innerHTML = '<li class="empty-state">No expenses found.</li>';
  } else {
    // Concept 8: Array Methods (map) - Transforming array of objects to DOM elements
    dataToRender.map(expense => {
      // Concept 3: Destructuring assignment
      const { id, title, amount, category } = expense;
      
      const li = document.createElement('li');
      li.className = `badge-${category.toLowerCase()}`;
      
      // Concept 2: Template Literals
      li.innerHTML = `
        <div class="expense-info">
          <span class="expense-title">${title}</span>
          <span class="expense-category">${category}</span>
        </div>
        <div class="expense-amount-group">
          <span class="expense-amount">₹${amount.toFixed(2)}</span>
          <button class="delete-btn" data-id="${id}">Delete</button>
        </div>
      `;
      expenseList.appendChild(li);
    });
  }

  // Update Summary Dashboards
  const totalAmount = calculateSum(dataToRender);
  totalDisplay.textContent = formatCurrency(totalAmount);

  const maxAmount = findMaxExpense(dataToRender);
  maxDisplay.textContent = formatCurrency(maxAmount);
};

// ==========================================
// EVENT LISTENERS 
// ==========================================

// Handle Form Submission
form.addEventListener('submit', (e) => {
  e.preventDefault(); // Prevent page reload (Functional Requirement)
  
  const title = titleInput.value.trim();
  const amount = parseFloat(amountInput.value);
  const category = categoryInput.value;

  if (title && amount > 0 && category) {
    // Instantiate new OOP Class
    const newExpense = new UtilityItem(title, amount, category);

    // Concept 4: Spread/Rest Operator
    // Creating a new array to preserve immutability instead of using push()
    expenses = [...expenses, newExpense];
    
    // UI Updates
    renderDashboard();
    form.reset();
  }
});

// Handle List Actions (Delete)
expenseList.addEventListener('click', (e) => {
  if (e.target.classList.contains('delete-btn')) {
    const idToDelete = e.target.getAttribute('data-id');
    
    // Concept 8: Array Methods (filter) to remove item without mutating original array directly
    expenses = expenses.filter(item => item.id !== idToDelete);
    
    // Re-filter before rendering if a category is selected
    const currentCategory = filterSelect.value;
    const filterFunction = createCategoryFilter(currentCategory);
    const filteredExpenses = expenses.filter(filterFunction);
    
    renderDashboard(filteredExpenses);
  }
});

// Handle Filtering
filterSelect.addEventListener('change', (e) => {
  const selectedCategory = e.target.value;
  
  // Using Higher-Order function to get the correct filter callback
  const activeFilter = createCategoryFilter(selectedCategory);
  const filteredData = expenses.filter(activeFilter);
  
  renderDashboard(filteredData);
});

// Initial Render
renderDashboard();
