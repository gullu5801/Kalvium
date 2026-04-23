// ==========================
// OOP (Class)
// ==========================
class Expense {
  constructor(name, amount, category) {
    this.name = name;
    this.amount = amount;
    this.category = category;
  }
}

// ==========================
// Prototypal Inheritance
// ==========================
Expense.prototype.getDetails = function () {
  return `${this.name} - ₹${this.amount} (${this.category})`;
};

// ==========================
// Data Storage
// ==========================
let expenses = [];

// ==========================
// Add Expense
// ==========================
function addExpense() {
  const name = document.getElementById("name").value;
  const amount = Number(document.getElementById("amount").value);
  const category = document.getElementById("category").value;

  if (!name || amount <= 0) {
    alert("Please enter valid details");
    return;
  }

  const expense = new Expense(name, amount, category);
  expenses.push(expense);

  displayExpenses();
  clearInputs();
}

// ==========================
// Display Expenses
// ==========================
function displayExpenses() {
  const list = document.getElementById("list");
  list.innerHTML = "";

  // Functional Programming (forEach)
  expenses.forEach((exp, index) => {
    const li = document.createElement("li");

    li.innerHTML = `
      ${exp.getDetails()}
      <span class="delete-btn" onclick="deleteExpense(${index})">❌</span>
    `;

    list.appendChild(li);
  });

  updateTotal();
}

// ==========================
// Delete Expense
// ==========================
function deleteExpense(index) {
  expenses.splice(index, 1);
  displayExpenses();
}

// ==========================
// Recursion (IMPORTANT)
// ==========================
function getTotal(expenses, index = 0) {
  if (index === expenses.length) return 0;
  return expenses[index].amount + getTotal(expenses, index + 1);
}

// ==========================
// Pure Function (Alternative)
// ==========================
const calculateTotal = (expenses) =>
  expenses.reduce((sum, e) => sum + e.amount, 0);

// ==========================
// Update Total Display
// ==========================
function updateTotal() {
  const total = getTotal(expenses); // Using recursion
  document.getElementById("total").innerText = "Total: ₹" + total;
}

// ==========================
// Clear Inputs
// ==========================
function clearInputs() {
  document.getElementById("name").value = "";
  document.getElementById("amount").value = "";
}