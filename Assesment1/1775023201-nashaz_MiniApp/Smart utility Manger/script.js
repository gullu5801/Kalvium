// Closure for unique ID
const idGenerator = () => {
  let id = 0;
  return () => id++;
};
const getId = idGenerator();

// OOP
class Expense {
  constructor(name, amount) {
    this.id = getId();
    this.name = name;
    this.amount = amount;
  }
}

let expenses = [];

const form = document.getElementById('expense-form');
const list = document.getElementById('list');
const totalEl = document.getElementById('total');

// Add Expense
form.addEventListener('submit', (e) => {
  e.preventDefault();

  const name = document.getElementById('name').value;
  const amount = +document.getElementById('amount').value;

  const expense = new Expense(name, amount);
  expenses.push(expense);

  render();
  form.reset();
});

// Render UI
const render = () => {
  list.innerHTML = '';

  expenses.map(exp => {
    const li = document.createElement('li');
    li.innerHTML = `
      ${exp.name} - $${exp.amount}
      <button onclick="deleteExpense(${exp.id})">X</button>
    `;
    list.appendChild(li);
  });

  // Reduce
  const total = expenses.reduce((sum, exp) => sum + exp.amount, 0);
  totalEl.textContent = total;
};

// Delete
const deleteExpense = (id) => {
  expenses = expenses.filter(exp => exp.id !== id);
  render();
};