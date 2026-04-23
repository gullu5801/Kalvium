class Expense {
  constructor(name, amount, category) {
    this.name = name;
    this.amount = amount;
    this.category = category;
  }
}

let expenses = [];
let filteredExpenses = [];

// Add Expense
const addExpense = () => {
  const name = document.getElementById("name").value;
  const amount = +document.getElementById("amount").value;
  const category = document.getElementById("category").value;

  if (name === "" || amount <= 0) {
    alert("Enter valid data");
    return;
  }

  const newExpense = new Expense(name, amount, category);

  expenses = [...expenses, newExpense];

  saveData();
  displayExpenses(expenses);
};

// Display Expenses
const displayExpenses = (data) => {
  const list = document.getElementById("list");
  list.innerHTML = "";

  data.forEach((e, index) => {
    list.innerHTML += `
      <li>
        ${e.name} (${e.category}) - ₹${e.amount}
        <button onclick="deleteExpense(${index})">❌</button>
        <button onclick="editExpense(${index})">✏️</button>
      </li>
    `;
  });

  calculateTotal(data);
  showStats();
};

// Delete
const deleteExpense = (index) => {
  expenses = expenses.filter((_, i) => i !== index);
  saveData();
  displayExpenses(expenses);
};

// Edit
const editExpense = (index) => {
  const newName = prompt("Enter new name:");
  const newAmount = +prompt("Enter new amount:");

  if (!newName || newAmount <= 0) return;

  expenses[index].name = newName;
  expenses[index].amount = newAmount;

  saveData();
  displayExpenses(expenses);
};

// Total (reduce)
const calculateTotal = (data) => {
  const total = data.reduce((sum, e) => sum + e.amount, 0);
  document.getElementById("total").innerText = `Total: ₹${total}`;
};

// Filter
const filterCategory = (category) => {
  if (category === "All") {
    displayExpenses(expenses);
  } else {
    filteredExpenses = expenses.filter(e => e.category === category);
    displayExpenses(filteredExpenses);
  }
};

// Stats (reduce)
const showStats = () => {
  const stats = expenses.reduce((acc, e) => {
    acc[e.category] = (acc[e.category] || 0) + e.amount;
    return acc;
  }, {});

  let text = "Stats: ";
  for (let key in stats) {
    text += `${key}: ₹${stats[key]}  `;
  }

  document.getElementById("stats").innerText = text;
};

// LocalStorage
const saveData = () => {
  localStorage.setItem("expenses", JSON.stringify(expenses));
};

const loadData = () => {
  const data = JSON.parse(localStorage.getItem("expenses")) || [];
  expenses = data;
  displayExpenses(expenses);
};

// Dark Mode
const toggleDarkMode = () => {
  document.body.classList.toggle("dark");
};

// Recursion
const factorial = (n) => {
  if (n === 0) return 1;
  return n * factorial(n - 1);
};

// IIFE
(() => {
  console.log("Premium App Loaded 🚀");
})();

loadData();