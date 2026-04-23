// IIFE
(function () {
    console.log("Expense Tracker Loaded");
})();

// OOP Class
class Expense {
    constructor(title, amount) {
        this.title = title;
        this.amount = amount;
    }
}

// Prototype Inheritance
function SpecialExpense(title, amount, category) {
    Expense.call(this, title, amount);
    this.category = category;
}

SpecialExpense.prototype = Object.create(Expense.prototype);

// Array to store data
let expenses = [];

// Higher-order function
const calculateTotal = (arr, callback) => {
    return callback(arr);
};

// Recursion example (sum)
function recursiveSum(arr, index = 0) {
    if (index >= arr.length) return 0;
    return arr[index].amount + recursiveSum(arr, index + 1);
}

// Add Expense
function addExpense() {
    const title = document.getElementById("title").value;
    const amount = parseFloat(document.getElementById("amount").value);

    // Destructuring example
    const expense = new Expense(title, amount);
    expenses.push(expense);

    renderExpenses();
}

// Render Data
function renderExpenses() {
    const list = document.getElementById("expenseList");
    list.innerHTML = "";

    // Array method (map)
    expenses.map(({ title, amount }) => {
        const li = document.createElement("li");
        li.innerText = `${title}: ₹${amount}`;
        list.appendChild(li);
    });

    // Higher-order + recursion
    const total = calculateTotal(expenses, recursiveSum);

    document.getElementById("total").innerText = `Total: ₹${total}`;
}