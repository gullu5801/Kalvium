(function () {
  console.log("App Started");
})();

const form = document.getElementById("expense-form");
const list = document.getElementById("expense-list");
const totalDisplay = document.getElementById("total");

let expenses = [];

class Expense {
  constructor(title, amount, category) {
    this.title = title;
    this.amount = Number(amount);
    this.category = category;
  }
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const title = document.getElementById("title").value;
  const amount = document.getElementById("amount").value;
  const category = document.getElementById("category").value;

  const expense = new Expense(title, amount, category);

  expenses = [...expenses, expense];

  renderExpenses();
  form.reset();
});

const renderExpenses = () => {
  list.innerHTML = "";

  expenses.forEach((expense, index) => {
    const { title, amount, category } = expense;

    const li = document.createElement("li");

    li.innerHTML = `
      ${title} - ₹${amount} (${category})
      <button onclick="deleteExpense(${index})">X</button>
    `;

    list.appendChild(li);
  });

  updateTotal();
};

function deleteExpense(index) {
  expenses = expenses.filter((_, i) => i !== index);
  renderExpenses();
}

const calculateTotal = (data) => {
  return data.reduce((sum, item) => sum + item.amount, 0);
};

const recursiveTotal = (arr, index = 0) => {
  if (index === arr.length) return 0;
  return arr[index].amount + recursiveTotal(arr, index + 1);
};

const updateTotal = () => {
  const total = calculateTotal(expenses);
  totalDisplay.textContent = `Total: ₹${total}`; // ✅ FIXED
};