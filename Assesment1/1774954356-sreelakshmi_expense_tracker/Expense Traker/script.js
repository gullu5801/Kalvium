class Expense {
  constructor(title, amount, category) {
    this.title = title;
    this.amount = amount;
    this.category = category;
  }
}


let expenses = [];

const titleInput = document.getElementById("title");
const amountInput = document.getElementById("amount");
const categoryInput = document.getElementById("category");
const addBtn = document.getElementById("addBtn");
const expenseList = document.getElementById("expenseList");
const totalText = document.getElementById("total");
const filterInput = document.getElementById("filter");

const calculateTotal = list =>
  list.reduce((sum, expense) => sum + expense.amount, 0);

function renderExpenses(list) {
  expenseList.innerHTML = "";

  list.map((expense, index) => {
    const { title, amount, category } = expense;

    expenseList.innerHTML += `
      <div class="expense-card">
        <h3>${title}</h3>
        <p>Amount: ₹${amount}</p>
        <p>Category: ${category}</p>
        <button class="delete-btn" onclick="deleteExpense(${index})">
          Delete
        </button>
      </div>
    `;
  });

  totalText.textContent = `Total Expense: ₹${calculateTotal(list)}`;
}

addBtn.addEventListener("click", () => {
  const title = titleInput.value;
  const amount = Number(amountInput.value);
  const category = categoryInput.value;

  if (title === "" || amount <= 0) {
    alert("Please enter valid data");
    return;
  }

  const newExpense = new Expense(title, amount, category);

  expenses = [...expenses, newExpense];

  renderExpenses(expenses);
  deleteExpense

  titleInput.value = "";
  amountInput.value = "";
});

function deleteExpense(index) {
  expenses = expenses.filter((_, i) => i !== index);
  renderExpenses(expenses);
}

filterInput.addEventListener("change", () => {
  const selected = filterInput.value;

  if (selected === "All") {
    renderExpenses(expenses);
  } else {
    const filtered = expenses.filter(
      expense => expense.category === selected
    );
    renderExpenses(filtered);
  }
});