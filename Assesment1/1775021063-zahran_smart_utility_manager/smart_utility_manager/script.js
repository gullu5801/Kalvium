// IIFE
(function () {
console.log("Smart Utility Manager Loaded");
})();

// Class (OOP)
class Expense {
constructor(id, title, amount, category) {
this.id = id;
this.title = title;
this.amount = amount;
this.category = category;
}
}

// Prototypal Inheritance
function PremiumExpense() {
Expense.apply(this, arguments);
}

PremiumExpense.prototype = Object.create(Expense.prototype);

// Data Store
let expenses = [];

// Pure Function
const calculateTotal = (data) =>
data.reduce((sum, item) => sum + item.amount, 0);

// Recursion
const countItems = (arr) => {
if (arr.length === 0) return 0;
return 1 + countItems(arr.slice(1));
};

// Higher Order Function
const filterByCategory = (category) => {
return expenses.filter((item) => item.category === category);
};

// DOM Elements
const form = document.getElementById("expenseForm");
const list = document.getElementById("expenseList");
const total = document.getElementById("total");
const count = document.getElementById("count");

// Add Expense
form.addEventListener("submit", (e) => {
e.preventDefault();

const title = document.getElementById("title").value;
const amount = +document.getElementById("amount").value;
const category = document.getElementById("category").value;

const expense = new Expense(Date.now(), title, amount, category);

expenses = [...expenses, expense]; // Spread Operator

render(expenses);

form.reset();
});

// Delete Expense
const deleteExpense = (id) => {
expenses = expenses.filter((item) => item.id !== id);
render(expenses);
};

// Render Function
const render = (data) => {

list.innerHTML = data.map(item => `
<li>
${item.title} - $${item.amount} (${item.category})
<button class="delete" onclick="deleteExpense(${item.id})">X</button>
</li>
`).join("");

total.textContent = calculateTotal(data);
count.textContent = countItems(data);
};

// Filters
document.getElementById("all").addEventListener("click", () => render(expenses));

document.getElementById("food").addEventListener("click", () =>
render(filterByCategory("Food"))
);

document.getElementById("transport").addEventListener("click", () =>
render(filterByCategory("Transport"))
);

document.getElementById("shopping").addEventListener("click", () =>
render(filterByCategory("Shopping"))
);

// First-Class Function
const init = function () {
render(expenses);
};

init();