// IIFE
(function () {
  console.log("App started");
})();

// Class
class Item {
  constructor(t, a) {
    this.text = t;
    this.amount = a;
  }
}

// Prototype
Item.prototype.show = function () {
  return this.text + " - " + this.amount;
};

let arr = [];

// Add function
function add() {
  let t = document.getElementById("text").value;
  let a = Number(document.getElementById("amt").value);

  // FIXED condition
  if (t === "" || isNaN(a)) {
    alert("Enter valid data");
    return;
  }

  let obj = new Item(t, a);

  arr.push(obj); // simpler (student style)

  display();
}

// Pure function
function totalCalc(list) {
  return list.reduce((s, x) => s + x.amount, 0);
}

// Recursion (kept for requirement)
function sumRec(list, i = 0) {
  if (i === list.length) return 0;
  return list[i].amount + sumRec(list, i + 1);
}

// Display
function display() {
  let ul = document.getElementById("data");
  ul.innerHTML = "";

  arr.forEach((x, index) => {
    let li = document.createElement("li");

    let { text, amount } = x;

    li.innerHTML = `
      ${text} - ₹${amount}
      <button onclick="del(${index})">❌</button>
    `;

    ul.appendChild(li);
  });

  // SIMPLE + CORRECT total
  let total = totalCalc(arr);

  document.getElementById("tot").innerText = total;
}

// Delete
function del(i) {
  arr.splice(i, 1);
  display();
}