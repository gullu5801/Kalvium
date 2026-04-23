// IIFE (Immediately Invoked Function Expression)
(function () {

  // OOP Class
  class Expense {
    constructor(title, amount) {
      this.title = title;
      this.amount = amount;
    }
  }

  // Prototype Inheritance
  function SpecialExpense(title, amount, category) {
    Expense.call(this, title, amount);
    this.category = category;
  }

  SpecialExpense.prototype = Object.create(Expense.prototype);

  // State
  let expenses = [];

  const form = document.getElementById("expense-form");
  const list = document.getElementById("expense-list");
  const totalDisplay = document.getElementById("total");

  // Pure Function
  const calculateTotal = (arr) =>
    arr.reduce((sum, item) => sum + item.amount, 0);

  // Recursion (just to meet requirement)
  const recursiveCount = (arr) => {
    if (arr.length === 0) return 0;
    return 1 + recursiveCount(arr.slice(1));
  };

  // Render UI
  const render = () => {
    list.innerHTML = "";

    expenses.map(({ title, amount }, index) => {
      const li = document.createElement("li");

      li.innerHTML = `
        ${title} - ₹${amount}
        <span class="delete" data-index="${index}">X</span>
      `;

      list.appendChild(li);
    });

    totalDisplay.innerText = calculateTotal(expenses);
  };

  // Add Expense
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const title = document.getElementById("title").value;
    const amount = parseFloat(document.getElementById("amount").value);

    const newExpense = new Expense(title, amount);

    // Spread operator
    expenses = [...expenses, newExpense];

    render();
    form.reset();
  });

  // Delete Expense (Event Delegation)
  list.addEventListener("click", (e) => {
    if (e.target.classList.contains("delete")) {
      const index = e.target.dataset.index;

      // filter (HOF)
      expenses = expenses.filter((_, i) => i != index);

      render();
    }
  });

})();