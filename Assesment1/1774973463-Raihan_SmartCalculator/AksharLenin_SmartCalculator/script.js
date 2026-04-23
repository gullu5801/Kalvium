 // IIFE (avoids global pollution)
(function () {
  console.log("Smart Calculator Loaded");
})();

// ================= DATA =================
const history = [];

// ================= OOP =================
class Calculator {
  add(a, b) {
    return a + b;
  }
  subtract(a, b) {
    return a - b;
  }
  multiply(a, b) {
    return a * b;
  }
  divide(a, b) {
    return b !== 0 ? a / b : "Cannot divide by 0";
  }
  power(a, b) {
    return a ** b;
  }
}

// ================= RECURSION =================
function factorial(n) {
  if (n < 0) return "Invalid";
  if (n === 0) return 1;
  return n * factorial(n - 1);
}

// ================= HIGHER-ORDER FUNCTION =================
const operate = (a, b, operationFn) => operationFn(a, b);

// ================= MAIN FUNCTION =================
const calc = new Calculator();

const calculate = () => {
  const a = Number(document.getElementById("num1").value);
  const b = Number(document.getElementById("num2").value);
  const op = document.getElementById("operation").value;

  let result;

  switch (op) {
    case "add":
      result = operate(a, b, calc.add);
      break;
    case "sub":
      result = operate(a, b, calc.subtract);
      break;
    case "mul":
      result = operate(a, b, calc.multiply);
      break;
    case "div":
      result = operate(a, b, calc.divide);
      break;
    case "power":
      result = operate(a, b, calc.power);
      break;
    case "factorial":
      result = factorial(a); // only uses first number
      break;
    default:
      result = "Invalid operation";
  }

  // Save to history
  history.push({ a, b, op, result });

  // Display result
  document.getElementById("result").textContent = `Result: ${result}`;

  showHistory();
};

// ================= HISTORY DISPLAY =================
function showHistory() {
  const list = document.getElementById("history");
  if (!list) return;

  list.innerHTML = "";

  history.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = `${item.op} → ${item.result}`;
    list.appendChild(li);
  });

  // Using reduce (required concept)
  const total = history
    .map(h => (typeof h.result === "number" ? h.result : 0))
    .reduce((sum, val) => sum + val, 0);

  const totalEl = document.getElementById("totalHistory");
  if (totalEl) {
    totalEl.textContent = `Sum of Results: ${total}`;
  }
}