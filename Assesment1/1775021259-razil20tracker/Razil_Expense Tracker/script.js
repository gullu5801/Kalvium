// IIFE (Requirement satisfied)
const App = (() => {

  console.log("Application Started");

  // ---------------- OOP ----------------
  class Transaction {
    constructor(desc, amount, type) {
      this.desc = desc;
      this.amount = amount;
      this.type = type;
    }
  }

  // ----------- Prototypal Inheritance -----------
  function PremiumTransaction(desc, amount, type, category) {
    Transaction.call(this, desc, amount, type);
    this.category = category;
  }

  PremiumTransaction.prototype = Object.create(Transaction.prototype);
  PremiumTransaction.prototype.constructor = PremiumTransaction;

  // ---------------- Data ----------------
  let transactions = [];

  // ---------------- DOM ----------------
  const form = document.getElementById("form");
  const list = document.getElementById("list");
  const balanceEl = document.getElementById("balance");
  const incomeEl = document.getElementById("income");
  const expenseEl = document.getElementById("expense");

  // ---------------- First-Class Function ----------------
  const logData = function(data) {
    console.log("Data:", data);
  };

  // Higher-order function
  const processData = (fn, data) => fn(data);

  // ---------------- Pure Function ----------------
  const getTotal = (arr) =>
    arr.reduce((sum, { amount }) => sum + amount, 0);

  // ---------------- Recursion ----------------
  const recursiveSum = (arr, n) => {
    if (n <= 0) return 0;
    return arr[n - 1].amount + recursiveSum(arr, n - 1);
  };

  // ---------------- Add Transaction ----------------
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const desc = document.getElementById("desc").value;
    const amount = parseFloat(document.getElementById("amount").value);
    const type = document.getElementById("type").value;

    const newTransaction = new Transaction(desc, amount, type);

    // Spread operator
    transactions = [...transactions, newTransaction];

    updateUI();
    form.reset();
  });

  // ---------------- Update UI ----------------
  const updateUI = () => {
    list.innerHTML = "";

    // map() + template literals
    transactions.map((t, index) => {
      const li = document.createElement("li");

      li.classList.add(t.type);

      li.innerHTML = `
        ${t.desc} - ₹${t.amount}
        <button onclick="deleteTransaction(${index})">X</button>
      `;

      list.appendChild(li);
    });

    calculate();
  };

  // ---------------- Calculate ----------------
  const calculate = () => {

    // Destructuring used
    const income = transactions
      .filter(({ type }) => type === "income")
      .reduce((sum, { amount }) => sum + amount, 0);

    const expense = transactions
      .filter(({ type }) => type === "expense")
      .reduce((sum, { amount }) => sum + amount, 0);

    const balance = income - expense;

    incomeEl.textContent = income;
    expenseEl.textContent = expense;
    balanceEl.textContent = balance;

    // Recursion used
    const totalRecursive = recursiveSum(transactions, transactions.length);
    console.log("Recursive Total:", totalRecursive);

    // First-class + Higher-order usage
    processData(logData, transactions);
  };

  // ---------------- Delete ----------------
  window.deleteTransaction = (index) => {
    transactions.splice(index, 1);
    updateUI();
  };

})();
