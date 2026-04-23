(() => {
  let expenses = [];

  class Expense {
    constructor(name, amount) {
      this.name = name;
      this.amount = amount;
    }
  }

  class PremiumExpense extends Expense {
    constructor(name, amount, category = "General") {
      super(name, amount);
      this.category = category;
    }
  }

  function addItem(arr, item) {
    return [...arr, item];
  }

  function recursiveTotal(arr, index = 0) {
    if (index === arr.length) return 0;
    return arr[index].amount + recursiveTotal(arr, index + 1);
  }

  const renderExpenses = () => {
    const list = document.getElementById("expenseList");
    list.innerHTML = "";

    expenses.map(({ name, amount }, index) => {
      list.innerHTML += `<li>${index + 1}. ${name} - ₹${amount}</li>`;
    });
  };

  window.addExpense = function () {
    const name = document.getElementById("expenseName").value;
    const amount = Number(document.getElementById("expenseAmount").value);

    const expense = new PremiumExpense(name, amount);

    expenses = addItem(expenses, expense);

    renderExpenses();
  };

  window.showTotal = function () {
    const total = recursiveTotal(expenses);
    document.getElementById("totalDisplay").innerText =
      `Total Expense: ₹${total}`;
  };
})();
