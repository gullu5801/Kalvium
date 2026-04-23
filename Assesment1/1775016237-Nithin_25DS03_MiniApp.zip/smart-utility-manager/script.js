// IIFE (Immediately Invoked Function Expression)
(function () {
  console.log("App Started");
})();

// Global Data
let items = [];

// OOP - Class
class Item {
  constructor(name, amount) {
    this.name = name;
    this.amount = amount;
  }
}

// Prototypal Inheritance
function SpecialItem(name, amount, category) {
  Item.call(this, name, amount);
  this.category = category;
}
SpecialItem.prototype = Object.create(Item.prototype);

// Add Item
const addItem = () => {
  const name = document.getElementById("name").value;
  const amount = parseFloat(document.getElementById("amount").value);

  const item = new Item(name, amount);

  // Spread operator
  items = [...items, item];

  displayItems(items);
};

// Display Items
const displayItems = (data) => {
  const list = document.getElementById("list");
  list.innerHTML = "";

  data.map(({ name, amount }) => {   // Destructuring
    const li = document.createElement("li");

    // Template literal
    li.textContent = `${name} - ₹${amount}`;

    list.appendChild(li);
  });
};

// Pure Function
const calculateSum = (arr) => {
  return arr.reduce((sum, item) => sum + item.amount, 0);
};

// Higher Order Function
const processData = (callback) => {
  return callback(items);
};

// Calculate Total
const calculateTotal = () => {
  const total = processData(calculateSum);

  document.getElementById("result").textContent =
    `Total: ₹${total}`;
};

// Filter Items
const filterHigh = () => {
  const filtered = items.filter(item => item.amount > 100);
  displayItems(filtered);
};

// Recursion Example (factorial)
const factorial = (n) => {
  if (n === 1) return 1;
  return n * factorial(n - 1);
};

console.log("Factorial of 5:", factorial(5));