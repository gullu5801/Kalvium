# 💰 Expense Tracker

A modern, responsive expense tracking web application built with vanilla JavaScript, showcasing advanced programming concepts and clean code practices.

## 📋 Description

**Expense Tracker** is a single-page application that helps users manage their spending efficiently. It provides real-time expense tracking, category-based filtering, visual statistics with an interactive pie chart, and persistent data storage using localStorage.

The project demonstrates professional software engineering practices including functional programming, object-oriented design, and modern JavaScript ES6+ features.

## ✨ Features

- ✅ **Add Expenses** - Record spending with amount, category, and description
- ✅ **Category Breakdown** - Visual pie chart showing spending by category with color-coded slices
- ✅ **Filter by Category** - View expenses for specific categories or all expenses
- ✅ **Real-time Statistics** - Total amount and category percentages update instantly
- ✅ **Delete Expenses** - Remove individual expenses with confirmation
- ✅ **Persistent Storage** - All data saved to localStorage (survives page refresh)
- ✅ **Responsive Design** - Works seamlessly on desktop, tablet, and mobile devices
- ✅ **Interactive UI** - Smooth animations, hover effects, and visual feedback

## 🚀 Quick Start

### Prerequisites
No installation needed! Just a modern web browser.

### Run the Project
1. Open `index.html` in your browser
   - Double-click the file, or
   - Right-click → Open with → Browser
   - Use a local server (recommended):
     ```bash
     # Python 3.x
     python -m http.server 8000
     
     # Python 2.x
     python -m SimpleHTTPServer 8000
     
     # Node.js (with http-server)
     npx http-server
     ```
   - Visit `http://localhost:8000` in your browser

2. Start tracking expenses immediately - no setup required!

## 💡 JavaScript Concepts Used

### 1. **ES6+ Modern Features**
- **Arrow Functions** - Concise syntax and implicit `this` binding
- **Destructuring** - Extract values from objects and arrays elegantly
- **Template Literals** - Clean string interpolation with backticks
- **Spread Operator** - Flatten arrays and merge objects
- **Rest Parameters** - Accept variable number of function arguments
- **Classes & Inheritance** - Prototypal inheritance with modern syntax
- **Const/Let** - Block-scoped variables instead of `var`

### 2. **Pure Functions**
Pure functions are functions that:
- Return the same output for the same input
- Have no side effects (don't modify external state)

**Examples in the project:**
```javascript
// Calculates total using reduce (no side effects)
const calculateTotal = (expenses) => {
    return expenses.reduce((sum, { amount }) => sum + amount, 0);
};

// Groups expenses by category (pure, returns new object)
const calculateCategoryTotals = (expenses) => {
    return expenses.reduce((categoryTotals, { category, amount }) => {
        return {
            ...categoryTotals,
            [category]: (categoryTotals[category] || 0) + amount
        };
    }, {});
};

// Formats expense for display (no mutations)
const formatExpenseDisplay = ({ amount, category, description, date }) => {
    return {
        formattedAmount: `$${amount.toFixed(2)}`,
        formattedDate: new Date(date).toLocaleDateString(),
        displayText: `${category} • ${description}`
    };
};
```

### 3. **Higher-Order Functions (HOF)**
Functions that return other functions or accept functions as parameters.

**Example in the project:**
```javascript
// Returns a filter function for a specific category
const createCategoryFilter = (predicate) => (expenses) => {
    return expenses.filter((expense) => predicate(expense.category));
};

// Pre-built filters using HOF
const expensesOfCategory = (category) => 
    createCategoryFilter((cat) => cat === category);

// Usage: Filter expenses by category
const foodExpenses = expensesOfCategory('Food')(allExpenses);
```

### 4. **Recursion**
A function calling itself to solve a problem with a base case and recursive case.

**Where it's used:**
```javascript
// Calculates total expense amount recursively
// Base case: when index reaches end of array, return 0
// Recursive case: add current amount and call recursively for next item
const calculateTotalRecursive = (expenses, index = 0) => {
    // BASE CASE: Stop when we've processed all expenses
    if (index >= expenses.length) {
        return 0;
    }
    
    // RECURSIVE CASE: Add current expense and recurse for remaining
    const { amount } = expenses[index];
    return amount + calculateTotalRecursive(expenses, index + 1);
};

// Example: [50, 75, 100]
// = 50 + calculateTotalRecursive([75, 100], 1)
// = 50 + 75 + calculateTotalRecursive([100], 2)
// = 50 + 75 + 100 + calculateTotalRecursive([], 3)
// = 50 + 75 + 100 + 0 = 225
```

**Why use recursion?**
- Demonstrates functional programming concepts
- Alternative to loops (though `calculateTotal` with reduce is preferred for performance)
- Shows understanding of call stack and base/recursive case patterns

### 5. **Object-Oriented Programming (OOP)**

#### **Expense Class**
Base class for modeling an expense with:
- **Properties**: id, amount, category, description, date
- **Methods**: formatting, serialization, icon display

```javascript
class Expense {
    constructor(amount, category, description = 'No description') {
        this.id = Date.now();
        this.amount = parseFloat(amount);
        this.category = category;
        this.description = description;
        this.date = new Date().toLocaleDateString();
    }

    formatForDisplay() {
        // Returns formatted object for display
    }

    getCategoryIcon() {
        // Returns emoji icon for category
    }

    getSummary() {
        // Returns human-readable summary
    }

    toJSON() {
        // Convert to plain object for localStorage
    }

    static fromJSON(obj) {
        // Create instance from stored data
    }
}
```

#### **SpecialExpense Class - Prototypal Inheritance**
Extends `Expense` with additional tagging capability and overridden methods:

```javascript
class SpecialExpense extends Expense {
    constructor(amount, category, description, tag = 'important') {
        super(amount, category, description); // Call parent constructor
        this.tag = tag; // Add unique property
    }

    // Override parent method and extend functionality
    getCategoryIcon() {
        const baseIcon = super.getCategoryIcon();
        const tagEmoji = this.tag === 'important' ? '⭐' : '🔖';
        return `${baseIcon}${tagEmoji}`;
    }

    // Override getSummary to include tag
    getSummary() {
        const baseSummary = super.getSummary();
        return `[${this.tag.toUpperCase()}] ${baseSummary}`;
    }

    // Add new methods specific to SpecialExpense
    highlightedDisplay() {
        const formatted = this.formatForDisplay();
        return {
            ...formatted,
            highlighted: true,
            tagBadge: `<span class="tag-${this.tag}">${this.tag.toUpperCase()}</span>`
        };
    }
}
```

**Inheritance Benefits:**
- ✅ **Code Reuse** - `SpecialExpense` inherits all `Expense` methods without duplication
- ✅ **DRY Principle** - Don't repeat constructor logic and shared methods
- ✅ **Polymorphism** - Override methods with specialized behavior
- ✅ **Extensibility** - Easy to add new expense types in the future
- ✅ **Maintainability** - Changes to base class automatically apply to subclasses

#### **ExpenseTracker Class**
Main controller handling:
- State management (expenses array)
- DOM manipulation
- Event handling
- Filter logic
- Rendering statistics

```javascript
class ExpenseTracker {
    constructor() {
        this.expenses = this.loadFromStorage() || [];
        this.selectedCategory = '';
        this.form = document.getElementById('expenseForm');
        // ... other DOM references
        this.init();
    }

    // Instance methods for functionality
    handleFormSubmit(e) { /* Handle form submission */ }
    deleteExpense(id) { /* Delete expense by ID */ }
    render() { /* Re-render entire UI */ }
    renderCategoryStats() { /* Render pie chart */ }
    // ... more methods
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    new ExpenseTracker();
});
```

### 6. **IIFE - Immediately Invoked Function Expression**
Wraps all code to prevent global scope pollution and variable conflicts:

```javascript
(function() {
    'use strict';
    
    // All variables, functions, and classes here are scoped
    // They won't leak to global window object
    
    const calculateTotal = (expenses) => { /* ... */ };
    class Expense { /* ... */ }
    class ExpenseTracker { /* ... */ }
    
})(); // Executes immediately when script loads
```

### 7. **Functional Programming Patterns**

**Filter → Map → Reduce chains:**
```javascript
// Filter: Get expenses from a specific category
const categoryExpenses = expenses.filter(({ category }) => category === 'Food');

// Map: Format each expense for display
const formatted = categoryExpenses.map(expense => formatExpenseDisplay(expense));

// Reduce: Calculate total amount
const total = categoryExpenses.reduce((sum, { amount }) => sum + amount, 0);
```

## 📁 Project Structure

```
ExpenseTracker/
├── index.html      # HTML structure and DOM elements
├── style.css       # Responsive styling (Flexbox, Grid, Media queries)
├── script.js       # All JavaScript logic (500+ lines)
└── README.md       # This documentation
```

## 🎨 Design Highlights

- **Responsive Grid Layout** - 2-column desktop, single column mobile
- **Modern Color Palette** - Indigo (#6366f1) accent with neutral grays
- **Custom Scrollbars** - Styled scrollbars for better UX
- **Pie Chart Visualization** - SVG-based interactive statistics
- **Smooth Animations** - CSS transitions and hover effects
- **Accessible Forms** - Proper labels and input validation

## 🔧 Technologies

- **HTML5** - Semantic structure and form elements
- **CSS3** - Flexbox, Grid, Media Queries, Animations
- **JavaScript ES6+** - Classes, Arrow Functions, Destructuring, Spread Operator
- **localStorage API** - Client-side data persistence
- **SVG** - Scalable graphics for pie chart visualization

## 💾 Data Persistence

Expenses are automatically saved to browser's localStorage:
- Survives page refresh and browser restart
- Stored as JSON in `localStorage.expenses` key
- Automatically loaded and parsed on page load
- Supports both `Expense` and `SpecialExpense` instances

## 🎓 Learning Resources

This project demonstrates:
- ✅ Real-world OOP patterns with inheritance
- ✅ Functional programming concepts and composition
- ✅ Responsive web design with mobile-first approach
- ✅ State management without external libraries
- ✅ DOM manipulation best practices
- ✅ Clean code principles (IIFE, pure functions, meaningful names)
- ✅ Advanced JavaScript patterns (HOF, recursion, destructuring)

## 📝 Example Usage

```javascript
// Create new expense
const expense = new Expense(50.00, 'Food', 'Lunch at cafe');

// Calculate totals (multiple approaches)
const sum1 = calculateTotal([expense]);          // Pure function with reduce
const sum2 = calculateTotalRecursive([expense]); // Recursive approach

// Filter by category using higher-order function
const foodFilter = createCategoryFilter(cat => cat === 'Food');
const foodExpenses = foodFilter([expense]);

// Create special expense with tag
const special = new SpecialExpense(150, 'Transport', 'Airfare', 'important');
console.log(special.getSummary()); 
// Output: [IMPORTANT] 🚗⭐ Transport: Airfare - $150.00
```

## 🎯 Key OOP Concepts Demonstrated

1. **Encapsulation** - Classes group related data (properties) and behavior (methods)
2. **Inheritance** - `SpecialExpense` reuses and extends `Expense` functionality
3. **Polymorphism** - Subclass overrides parent methods with specialized implementations
4. **Abstraction** - Complex logic hidden behind simple class interfaces

## 🔄 Data Flow

```
User Input (Form)
    ↓
handleFormSubmit() creates Expense instance
    ↓
saveToStorage() persists to localStorage
    ↓
render() updates DOM
    ├→ renderExpensesList() (with filter applied)
    ├→ updateTotal() (shows filtered total)
    └→ renderCategoryStats() (generates pie chart)
```

---

**Built with ❤️ showcasing modern JavaScript patterns, OOP principles, and functional programming concepts.**
