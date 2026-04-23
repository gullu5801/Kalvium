(function () {
  "use strict";

  // ==============================
  // OOP - Parent Class
  // ==============================
  class Utility {
    constructor(title, amount) {
      this.title = title;
      this.amount = amount;
    }

    getDetails() {
      return `${this.title} - ₹${this.amount}`;
    }
  }

  // ==============================
  // Prototypal Inheritance
  // ==============================
  class Expense extends Utility {
    constructor(title, amount, category) {
      super(title, amount);
      this.category = category;
    }
  }

  // ==============================
  // DOM Elements
  // ==============================
  const expenseForm = document.getElementById("expenseForm");
  const expenseList = document.getElementById("expenseList");
  const totalDisplay = document.getElementById("total");

  let expenses = [];

  // ==============================
  // Pure Function (No side effects)
  // ==============================
  const calculateTotal = (expenseArray) => {
    return expenseArray.reduce((sum, item) => sum + item.amount, 0);
  };

  // ==============================
  // Recursion Example
  // Adds 2% tax multiple times
  // ==============================
  const calculateTaxRecursive = (amount, times) => {
    if (times === 0) return amount;
    return calculateTaxRecursive(amount * 1.02, times - 1);
  };

  // ==============================
  // Higher Order Function
  // ==============================
  const processExpenses = (callback) => {
    return callback(expenses);
  };

  // ==============================
  // Render Expenses
  // ==============================
  const renderExpenses = () => {
    expenseList.innerHTML = "";

    expenses.forEach(({ title, amount, category }, index) => {
      const li = document.createElement("li");

      li.innerHTML = `
        ${title} - ₹${amount} (${category})
        <button data-index="${index}">Delete</button>
      `;

      expenseList.appendChild(li);
    });

    const total = processExpenses(calculateTotal);

    // Using recursion for tax calculation (2 times)
    const totalWithTax = calculateTaxRecursive(total, 2);

    totalDisplay.textContent = totalWithTax.toFixed(2);
  };

  // ==============================
  // Add Expense Event
  // ==============================
  expenseForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const titleInput = document.getElementById("title").value;
    const amountInput = Number(document.getElementById("amount").value);
    const categoryInput = document.getElementById("category").value;

    const newExpense = new Expense(titleInput, amountInput, categoryInput);

    // Spread Operator
    expenses = [...expenses, newExpense];

    expenseForm.reset();
    renderExpenses();
  });

  // ==============================
  // Delete Using Event Delegation
  // ==============================
  expenseList.addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON") {
      const index = Number(e.target.dataset.index);

      // Using filter()
      expenses = expenses.filter((_, i) => i !== index);

      renderExpenses();
    }
  });

})();