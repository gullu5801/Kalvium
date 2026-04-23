// Closure for unique ID
const idGenerator = () => {
  let id = 0;
  return () => id++;
};
const getId = idGenerator();

// OOP Class
class Expense {
  constructor(name, amount) {
    this.id = getId();
    this.name = name;
    this.amount = amount;
  }
}

// Prototype Method (Prototypal Inheritance)
Expense.prototype.getFormatted = function () {
  return `${this.name} - $${this.amount}`;
};

let expenses = [];

// DOM Elements
const form = document.getElementById('expense-form');
const list = document.getElementById('list');
const totalEl = document.getElementById('total');

// PURE FUNCTION
const calculateTotal = (data) =>
  data.reduce((sum, { amount }) => sum + amount, 0);

// RECURSION (extra requirement)
const recursiveTotal = (data, index = 0) => {
  if (index >= data.length) return 0;
  return data[index].amount + recursiveTotal(data, index + 1);
};

// Add Expense
form.addEventListener('submit', (e) => {
  e.preventDefault();

  const name = document.getElementById('name').value;
  const amount = +document.getElementById('amount').value;

  const expense = new Expense(name, amount);

  // Spread operator
  expenses = [...expenses, expense];

  render();
  form.reset();
});

// Render UI
const render = () => {
  list.innerHTML = '';

  expenses.forEach((exp) => {
    const { id } = exp; // destructuring

    const li = document.createElement('li');
    li.innerHTML = `
      ${exp.getFormatted()}
      <button onclick="deleteExpense(${id})">X</button>
    `;
    list.appendChild(li);
  });

  // ✅ AUTO TOTAL (main logic)
  const total = calculateTotal(expenses);
  totalEl.textContent = total;
};

// Delete Expense
const deleteExpense = (id) => {
  expenses = expenses.filter(exp => exp.id !== id);
  render();
};

// ✅ BUTTON TOTAL (manual trigger)
const showTotal = () => {
  if (expenses.length === 0) {
    alert("No expenses to calculate!");
    return;
  }

  const total = calculateTotal(expenses);
  totalEl.textContent = total;

  // Optional: verify recursion
  console.log("Recursive Total:", recursiveTotal(expenses));
};

// ✅ RESET BUTTON
const resetExpenses = () => {
  if (confirm("Are you sure you want to delete all expenses?")) {
    expenses = [];
    render();
  }
};