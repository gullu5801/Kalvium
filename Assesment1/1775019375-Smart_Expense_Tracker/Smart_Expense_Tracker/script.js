(() => console.log("App Initialized"))();

class Expense {
  constructor(name, amount) {
    this.name = name;
    this.amount = amount;
  }
}

function SpecialExpense(name, amount, category) {
  Expense.call(this, name, amount);
  this.category = category;
}
SpecialExpense.prototype = Object.create(Expense.prototype);

let expenses = [];

const calculateTotal = (data) => data.reduce((sum, { amount }) => sum + amount, 0);

const recursiveTotal = (arr, index = 0) => {
  if (index === arr.length) return 0;
  return arr[index].amount + recursiveTotal(arr, index + 1);
};

const processData = (callback) => callback(expenses);

const addExpense = () => {
  const name = document.getElementById("name").value;
  const amount = parseFloat(document.getElementById("amount").value);

  if (!name || !amount) return;

  const expense = new Expense(name, amount);
  expenses = [...expenses, expense];

  render();
};

const deleteExpense = (index) => {
  expenses = expenses.filter((_, i) => i !== index);
  render();
};

const render = () => {
  const list = document.getElementById("list");
  list.innerHTML = "";

  expenses.map(({ name, amount }, index) => {
    const li = document.createElement("li");
    li.innerHTML = `${name} - ₹${amount} <button onclick="deleteExpense(${index})">X</button>`;
    list.appendChild(li);
  });

  const total = processData(calculateTotal);
  const recursiveSum = recursiveTotal(expenses);

  document.getElementById("total").innerText = `${total} (Rec: ${recursiveSum})`;
};
