
// =======================
// IIFE (Required)
// =======================
(function () {
    console.log("Expense Tracker App Started");
})();

// =======================
// OOP: Expense Class
// =======================
class Expense {
    constructor(title, amount) {
        this.title = title;
        this.amount = Number(amount); // ensure number
    }

    getDetails() {
        return `${this.title}: $${this.amount}`;
    }
}

// =======================
// Prototypal Inheritance
// =======================
function SpecialExpense(title, amount, category) {
    Expense.call(this, title, amount);
    this.category = category;
}

SpecialExpense.prototype = Object.create(Expense.prototype);

// =======================
// Data Handling (SAFE LOAD)
// =======================
let expenses = JSON.parse(localStorage.getItem("expenses")) || [];

// Ensure all amounts are numbers (fix old data)
expenses = expenses.map(e => ({
    ...e,
    amount: Number(e.amount)
}));

// =======================
// DOM Elements
// =======================
const titleInput = document.getElementById("title");
const amountInput = document.getElementById("amount");
const addBtn = document.getElementById("addBtn");
const list = document.getElementById("expenseList");
const totalDisplay = document.getElementById("total");

// =======================
// Recursion (USED)
// =======================
const recursiveSum = (arr) => {
    if (arr.length === 0) return 0;
    return Number(arr[0].amount) + recursiveSum(arr.slice(1));
};

// =======================
// Higher-Order Function
// =======================
const processData = (data, callback) => callback(data);

// =======================
// Render UI
// =======================
const render = () => {
    list.innerHTML = "";

    expenses.map(({ title, amount }, index) => {
        const li = document.createElement("li");

        const text = document.createElement("span");
        text.textContent = `${title} - $${Number(amount).toFixed(2)}`;

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "X";

        deleteBtn.addEventListener("click", () => {
            deleteExpense(index);
        });

        li.appendChild(text);
        li.appendChild(deleteBtn);
        list.appendChild(li);
    });

    // Using recursion for total
    const total = recursiveSum(expenses);

    totalDisplay.textContent = total.toFixed(2);

    localStorage.setItem("expenses", JSON.stringify(expenses));
};

// =======================
// Add Expense
// =======================
addBtn.addEventListener("click", () => {
    const title = titleInput.value.trim();
    const amount = Number(amountInput.value);

    if (!title || amount <= 0) {
        alert("Please enter valid data");
        return;
    }

    const newExpense = new Expense(title, amount);

    // Spread operator (ES6)
    expenses = [...expenses, newExpense];

    render();

    titleInput.value = "";
    amountInput.value = "";
});

// =======================
// Delete Expense
// =======================
const deleteExpense = (index) => {
    expenses = expenses.filter((_, i) => i !== index);
    render();
};

// =======================
// Initial Load
// =======================
render();
