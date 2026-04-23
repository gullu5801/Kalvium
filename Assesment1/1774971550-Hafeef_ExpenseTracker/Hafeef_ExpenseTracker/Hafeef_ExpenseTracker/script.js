// ============================================
// Expense Tracker Application
// ============================================

// IIFE: Immediately Invoked Function Expression
// Wraps all code to avoid polluting global scope
// All functions, classes, and variables are now scoped to this function
(function() {
    'use strict';

    // Pure function to calculate total from expenses array
    // Uses REDUCE: accumulates sum from 0, iterating through each expense
    // Does not modify the original array
    // Destructures amount property from each expense
    const calculateTotal = (expenses) => {
        return expenses.reduce((sum, { amount }) => sum + amount, 0);
    };

    // Pure function to calculate category-wise totals
    // Uses REDUCE to group expenses by category and sum amounts
    // Returns object where keys are categories and values are totals
    // Does not modify the original array
    const calculateCategoryTotals = (expenses) => {
        return expenses.reduce((categoryTotals, { category, amount }) => {
            // Initialize category total to 0 if not exists
            const currentTotal = categoryTotals[category] || 0;
            // Return new object with updated category total
            return {
                ...categoryTotals,
                [category]: currentTotal + amount
            };
        }, {});
    };

    // Utility function with REST parameters
    // Accepts multiple expenses and creates formatted summary
    const createExpenseSummary = (...expenses) => {
        if (expenses.length === 0) return 'No expenses';
        return expenses
            .map(({ category, description, amount }) => 
                `${category}: ${description} - $${amount.toFixed(2)}`
            )
            .join(' | ');
    };

    // Combine multiple expense arrays using SPREAD operator
    const combineExpenses = (...expenseArrays) => {
        return [...expenseArrays].flat();
    };


    // Recursive function to calculate total from expenses array
    // Base case: when index reaches end of array, return 0
    // Recursive case: add current expense amount to total of remaining expenses
    // Time complexity: O(n), Space complexity: O(n) due to call stack
    // Destructures amount from expense at index
    const calculateTotalRecursive = (expenses, index = 0) => {
        // Base case: reached end of array
        if (index >= expenses.length) {
            return 0;
        }
        // Recursive case: destructured amount + recursive call
        const { amount } = expenses[index];
        return amount + calculateTotalRecursive(expenses, index + 1);
    };

// Higher-order function: takes a callback predicate and returns a filter function
// The returned function accepts expenses array and filters by category
const createCategoryFilter = (predicate) => (expenses) => {
    return expenses.filter((expense) => predicate(expense.category));
};

// Pre-built category filters using the higher-order function
const expensesOfCategory = (category) => createCategoryFilter((cat) => cat === category);
const expensesNotOfCategory = (category) => createCategoryFilter((cat) => cat !== category);


    // Function stored in variable to format expense for display
    // DESTRUCTURES: amount, category, description, date from expense
    // Uses TEMPLATE LITERALS for formatted display strings
    const formatExpenseDisplay = ({ amount, category, description, date }) => {
        const formattedAmount = `$${amount.toFixed(2)}`;
        const formattedDate = new Date(date).toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric'
        });
        const displayText = `${category} • ${description}`;
        const summary = `${category}: ${description} - ${formattedAmount}`;
        
        // Return using shorthand property notation
        return { formattedAmount, formattedDate, displayText, summary };
    };


    // Combine filter → map → reduce to analyze expenses by category
    // DESTRUCTURES: category from filter predicate
    // Uses SPREAD to avoid duplicating filter logic
    const analyzeExpensesByCategory = (targetCategory, expenses) => {
        // Filter once using destructuring - destructures category property
        const filtered = expenses.filter(({ category }) => category === targetCategory);
        
        return {
            // Filter: Get expenses matching category
            filtered,
            
            // Map: Format each filtered expense for display
            formatted: filtered.map(formatExpenseDisplay),
            
            // Reduce: Calculate total using destructured amount
            categoryTotal: filtered.reduce((sum, { amount }) => sum + amount, 0),
            
            // Count: Use reduce to count items in category
            count: filtered.length
        };
    };


    // Get all unique categories with stats using map and reduce
    // DESTRUCTURES: category from expenses
    // SPREAD OPERATOR: to create new stats objects
    const getCategoryStats = (expenses) => {
        return expenses
            .map(({ category }) => category)
            .filter((cat, index, arr) => arr.indexOf(cat) === index) // Unique categories
            .reduce((stats, category) => {
                const categoryExpenses = expenses.filter(({ category: cat }) => cat === category);
                const total = categoryExpenses.reduce((sum, { amount }) => sum + amount, 0);
                const count = categoryExpenses.length;
                
                // Using SPREAD to merge new stats
                return {
                    ...stats,
                    [category]: { total, count, percentage: 0 }
                };
            }, {});
    };

// ============================================
// Expense Class
// ============================================

    class Expense {
        // Constructor with DESTRUCTURING from rest parameters
        constructor(amount, category, description = 'No description') {
            this.id = Date.now();
            this.amount = parseFloat(amount);
            this.category = category;
            this.description = description;
            this.date = new Date().toLocaleDateString();
        }

    // Instance method to format expense for display
    // Returns formatted object with all display properties
        formatForDisplay() {
            // Use DESTRUCTURING when combined with global function
            return formatExpenseDisplay({
                amount: this.amount,
                category: this.category,
                description: this.description,
                date: this.date
            });
        }

    // Get emoji icon for this expense's category
    getCategoryIcon() {
        const icons = {
            Food: '🍔',
            Transport: '🚗',
            Entertainment: '🎬',
            Utilities: '💡',
            Health: '🏥',
            Shopping: '🛍️',
            Other: '📦'
        };
        return icons[this.category] || '📌';
    }

        // Get expense summary string
        // TEMPLATE LITERAL with destructured properties
        getSummary() {
            const { category, description, amount } = this;
            const icon = this.getCategoryIcon();
            return `${icon} ${category}: ${description} - $${amount.toFixed(2)}`;
        }

    // Convert to plain object for storage
    toJSON() {
        return {
            id: this.id,
            amount: this.amount,
            category: this.category,
            description: this.description,
            date: this.date
        };
    }

        // Create Expense instance from stored object
        // DESTRUCTURES: id, date, and constructor params from obj
        static fromJSON({ id, date, amount, category, description }) {
            const expense = new Expense(amount, category, description);
            expense.id = id;
            expense.date = date;
            return expense;
        }
}

// ============================================
// SpecialExpense Class - Prototypal Inheritance
// ============================================
// Inherits from Expense and adds tagging capability
class SpecialExpense extends Expense {
    constructor(amount, category, description, tag = 'important') {
        // Call parent constructor using super()
        super(amount, category, description);
        // Add new property unique to SpecialExpense
        this.tag = tag;
    }

        // Override getCategoryIcon to add tag indicator
        // TEMPLATE LITERAL with destructured tag property
        getCategoryIcon() {
            const baseIcon = super.getCategoryIcon();
            const { tag } = this;
            const tagEmoji = tag === 'important' ? '⭐' : '🔖';
            return `${baseIcon}${tagEmoji}`;
        }

        // Override getSummary to include tag
        getSummary() {
            const baseSummary = super.getSummary();
            return `[${this.tag.toUpperCase()}] ${baseSummary}`;
        }

        // Override toJSON to include tag
        toJSON() {
            const parentJSON = super.toJSON();
            return {
                ...parentJSON,
                tag: this.tag,
                isSpecial: true // Flag to identify SpecialExpense on load
            };
        }

        // Static factory method to create from stored object
        // DESTRUCTURES: all properties needed from stored object
        static fromJSON({ id, date, amount, category, description, tag = 'important' }) {
            const specialExpense = new SpecialExpense(amount, category, description, tag);
            specialExpense.id = id;
            specialExpense.date = date;
            return specialExpense;
        }

    // Additional method specific to SpecialExpense
        highlightedDisplay() {
            const formatted = this.formatForDisplay();
            return {
                ...formatted,
                highlighted: true,
                tagBadge: `<span class="tag-badge tag-${this.tag}">${this.tag.toUpperCase()}</span>`
            };
        }
    }


    class ExpenseTracker {
        constructor() {
            // Array to store all expenses
            this.expenses = this.loadFromStorage() || [];
            
            // Track current category filter (empty = show all)
            this.selectedCategory = '';
            
            // DOM Elements
            this.form = document.getElementById('expenseForm');
            this.amountInput = document.getElementById('amount');
            this.categoryInput = document.getElementById('category');
            this.descriptionInput = document.getElementById('description');
            this.addBtn = document.getElementById('addBtn');
            this.categoryFilter = document.getElementById('categoryFilter');
            this.expensesList = document.getElementById('expensesList');
            this.totalAmount = document.getElementById('totalAmount');
            this.categoryStats = document.getElementById('categoryStats');
            
            // Initialize event listeners
            this.init();
        }

        // Initialize the app
        init() {
            this.form.addEventListener('submit', (e) => this.handleFormSubmit(e));
            this.categoryFilter.addEventListener('change', (e) => this.handleFilterChange(e));
            this.render();
        }

        // Handle form submission
        // DESTRUCTURES: value from each input element
        handleFormSubmit(e) {
            e.preventDefault();

            // Destructure values from DOM input elements
            const { value: amount } = this.amountInput;
            const { value: category } = this.categoryInput;
            const { value: description } = this.descriptionInput;

            // Validation
            if (!amount || parseFloat(amount) <= 0 || !category) {
                const message = `Please fill in all required fields`;
                alert(message);
                return;
            }

            // Create Expense instance
            const expense = new Expense(amount, category, description);

            // Add to array using SPREAD to create new array
            this.expenses = [expense, ...this.expenses];

            // Save to localStorage
            this.saveToStorage();

            // Reset form
            this.form.reset();
            this.amountInput.focus();

            // Re-render
            this.render();
        }

        // Delete expense by ID
        // DESTRUCTURES: id from expense for comparison
        deleteExpense(id) {
            this.expenses = this.expenses.filter(({ id: expenseId }) => expenseId !== id);
            this.saveToStorage();
            this.render();
        }

        // Handle category filter change
        // DESTRUCTURES: value from select element
        // Uses higher-order function pattern from createCategoryFilter
        handleFilterChange(e) {
            const { value: category } = e.target;
            this.selectedCategory = category;
            this.render();
        }

        // Get filtered expenses based on selected category
        // Returns all expenses if no category selected
        // Uses the higher-order createCategoryFilter function with callback
        getFilteredExpenses() {
            // If no category selected, return all expenses
            if (!this.selectedCategory) {
                return this.expenses;
            }
            
            // Use higher-order function: createCategoryFilter returns a filter function
            // that takes an expenses array and filters by the selected category
            const filterByCategory = createCategoryFilter((cat) => cat === this.selectedCategory);
            return filterByCategory(this.expenses);
        }

    // Calculate total expenses using REDUCE
    // The pure function calculateTotal uses reduce to accumulate the sum
    // reduce signature: (accumulator, currentValue) => newAccumulator
    getTotal() {
        return calculateTotal(this.expenses);
    }

    // Save expenses to localStorage
    saveToStorage() {
        localStorage.setItem('expenses', JSON.stringify(this.expenses));
    }

        // Load expenses from localStorage and convert to Expense instances
        // Uses SPREAD OPERATOR to combine with fallback
        loadFromStorage() {
            const stored = localStorage.getItem('expenses');
            if (!stored) return null;
            
            // Parse stored data and convert back to Expense instances
            const data = JSON.parse(stored);
            return data.map(obj => {
                // Check if it's a SpecialExpense using isSpecial flag
                const { isSpecial } = obj;
                return isSpecial ? SpecialExpense.fromJSON(obj) : Expense.fromJSON(obj);
            });
        }

    // Render all expenses to DOM
    render() {
        this.renderExpensesList();
        this.updateTotal();
        this.renderCategoryStats();
    }

// Render expenses list with applied filter
        renderExpensesList() {
            // Clear current list
            this.expensesList.innerHTML = '';

            // Get filtered expenses (uses higher-order function)
            const filteredExpenses = this.getFilteredExpenses();

            // Show empty state if no expenses (after filter applied)
            if (filteredExpenses.length === 0) {
                const message = this.selectedCategory 
                    ? `No expenses in ${this.selectedCategory}` 
                    : 'No expenses yet';
                this.expensesList.innerHTML = `
                    <div class="empty-state">
                        <span class="empty-icon">🧾</span>
                        <span>${message}</span>
                    </div>
                `;
                return;
            }

            // Functional programming: Filter → Map → Render
            // MAP: Transform each filtered expense to HTML string
            const expensesHTML = filteredExpenses
            .map((expense) => this.createExpenseItemHTML(expense))
            .join('');

        this.expensesList.innerHTML = expensesHTML;

        // Add delete event listeners
        this.attachDeleteListeners();
    }

        // Example: Filter by category, map to formatted data, reduce to total
        // Usage: const foodStats = this.getCategoryExpensesWithTotal('Food');
        // DESTRUCTURES: category from filter predicate
        getCategoryExpensesWithTotal(targetCategory) {
            const categoryExpenses = this.expenses.filter(({ category }) => category === targetCategory);
            
            return {
                // FILTER: Get only expenses from this category
                expenses: categoryExpenses,
                
                // MAP: Format all expenses in this category for display
                formatted: categoryExpenses.map(expense => formatExpenseDisplay(expense)),
                
                // REDUCE: Calculate total for this category using destructured amount
                total: categoryExpenses.reduce((sum, { amount }) => sum + amount, 0),
                
                // Count expenses in this category
                count: categoryExpenses.length
            };
        }

        // Create HTML for a single expense item
        // DESTRUCTURES: properties from expense and formatted data
        createExpenseItemHTML(expense) {
            const categoryIcon = expense.getCategoryIcon();
            const { formattedAmount, formattedDate } = expense.formatForDisplay();
            const { id, category, description } = expense;

            // TEMPLATE LITERAL with destructured properties
            return `
                <div class="expense-item" data-id="${id}">
                    <div class="expense-info">
                        <div class="expense-category">
                            <span>${categoryIcon}</span>
                            <span>${category}</span>
                        </div>
                        <div class="expense-description">${description}</div>
                        <div class="expense-date">${formattedDate}</div>
                    </div>
                    <div class="expense-amount">${formattedAmount}</div>
                    <div class="expense-actions">
                        <button class="btn btn-delete" data-id="${id}">Delete</button>
                    </div>
                </div>
            `;
        }

    // Get emoji icon for category
    getCategoryIcon(category) {
        const icons = {
            Food: '🍔',
            Transport: '🚗',
            Entertainment: '🎬',
            Utilities: '💡',
            Health: '🏥',
            Shopping: '🛍️',
            Other: '📦'
        };
        return icons[category] || '📌';
    }

        // Attach delete event listeners
        // DESTRUCTURES: dataset from target element
        attachDeleteListeners() {
            const deleteButtons = this.expensesList.querySelectorAll('.btn-delete');
            deleteButtons.forEach((btn) => {
                btn.addEventListener('click', (e) => {
                    const { target } = e;
                    const { id } = target.dataset;
                    const confirmed = confirm('Are you sure you want to delete this expense?');
                    if (confirmed) {
                        this.deleteExpense(parseInt(id));
                    }
                });
            });
        }

        // Update total amount display
        // Shows filtered total if a category is selected, otherwise shows all expenses total
        // DESTRUCTURES: totalAmount property
        updateTotal() {
            // Calculate total based on filtered expenses
            const filteredExpenses = this.getFilteredExpenses();
            const { totalAmount } = this;
            const total = filteredExpenses.reduce((sum, { amount }) => sum + amount, 0);
            totalAmount.textContent = `$${total.toFixed(2)}`;
        }

        // Render category statistics
        // Uses pure function calculateCategoryTotals to get totals by category
        // Get category color
        getCategoryColor(category) {
            const colors = {
                'Food': '#8b5cf6',
                'Transport': '#06b6d4',
                'Entertainment': '#ec4899',
                'Utilities': '#f59e0b',
                'Health': '#ef4444',
                'Shopping': '#6366f1',
                'Other': '#6b7280'
            };
            return colors[category] || '#6b7280';
        }

        // Helper to create SVG arc path for pie slice
        createPieSlice(startAngle, endAngle, radius = 45, centerX = 50, centerY = 50) {
            const toRad = (deg) => (deg * Math.PI) / 180;
            const x1 = centerX + radius * Math.cos(toRad(startAngle));
            const y1 = centerY + radius * Math.sin(toRad(startAngle));
            const x2 = centerX + radius * Math.cos(toRad(endAngle));
            const y2 = centerY + radius * Math.sin(toRad(endAngle));
            
            const largeArc = endAngle - startAngle > 180 ? 1 : 0;
            return `M ${centerX} ${centerY} L ${x1} ${y1} A ${radius} ${radius} 0 ${largeArc} 1 ${x2} ${y2} Z`;
        }

        // Displays category breakdown as single pie chart
        renderCategoryStats() {
            // Get category totals using pure function
            const categoryTotals = calculateCategoryTotals(this.expenses);
            
            // Check if there are any expenses
            if (Object.keys(categoryTotals).length === 0) {
                this.categoryStats.innerHTML = '<p class="stats-empty">Add expenses to see statistics</p>';
                return;
            }

            // Calculate grand total for percentage calculation
            const grandTotal = calculateTotal(this.expenses);

            // Sort categories by amount (highest first)
            const sortedCategories = Object.entries(categoryTotals)
                .sort(([, a], [, b]) => b - a);

            // Build pie slices
            let currentAngle = -90; // Start from top
            const slices = sortedCategories.map(([category, total]) => {
                const percentage = grandTotal > 0 ? ((total / grandTotal) * 100).toFixed(1) : 0;
                const sliceAngle = (percentage / 100) * 360;
                const endAngle = currentAngle + sliceAngle;
                const color = this.getCategoryColor(category);
                
                const path = this.createPieSlice(currentAngle, endAngle);
                const slice = `<path d="${path}" fill="${color}" stroke="white" stroke-width="2" class="pie-slice"/>`;
                
                currentAngle = endAngle;
                return { category, total, percentage, color, slice };
            });

            // Generate pie chart SVG
            const pieSVG = `
                <svg class="main-pie-chart" width="200" height="200" viewBox="0 0 100 100">
                    ${slices.map(s => s.slice).join('')}
                </svg>
            `;

            // Generate legend
            const legendHTML = slices.map(({ category, total, percentage, color }) => {
                const icon = this.getCategoryIcon(category);
                return `
                    <div class="legend-item">
                        <div class="legend-color" style="background-color: ${color}"></div>
                        <div class="legend-label">
                            <span class="legend-category">${icon} ${category}</span>
                            <span class="legend-value">$${total.toFixed(2)} (${percentage}%)</span>
                        </div>
                    </div>
                `;
            }).join('');

            this.categoryStats.innerHTML = `
                <div class="pie-container">
                    ${pieSVG}
                    <div class="pie-legend">
                        ${legendHTML}
                    </div>
                </div>
            `;
        }
    }

    // Initialize app when DOM is ready
    document.addEventListener('DOMContentLoaded', () => {
        new ExpenseTracker();
        console.log('✅ Expense Tracker initialized');
    });

})(); // End IIFE
