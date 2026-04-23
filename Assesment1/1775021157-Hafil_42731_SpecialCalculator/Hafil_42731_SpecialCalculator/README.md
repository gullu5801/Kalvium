# AXIOM — Special Calculator

## Project Title
**AXIOM Special Calculator** — A Smart Utility Manager Mini Application

---

## Description

AXIOM is a browser-based Special Calculator with two modes:

- **Basic Mode** — Standard arithmetic using a full expression (e.g. `12×5+3÷2`). Type the expression and press `=` or Enter to evaluate.
- **Special Mode** — Advanced one-click operations applied to the current number:
  - `x²` — Squares the number
  - `√x` — Square root
  - `n!` — Factorial (recursive, max n = 20)
  - `Fib` — Fibonacci number (recursive, max n = 35)
  - `xʸ` — Power operator: type base, press xʸ, type exponent, press `=`

Every computation is logged in the **History Panel** with type filtering (All / Basic / Special) and live statistics (Total, Largest result, Average result).

Full keyboard support is included.

---

## Folder Structure
```
SpecialCalculator/
├── index.html    — HTML structure
├── style.css     — CSS styling (dark terminal theme, responsive)
├── script.js     — JavaScript logic (well commented)
└── README.md     — This file
```

---

## List of JavaScript Concepts Implemented

| Concept | Where in `script.js` |
|---|---|
| **ES6 Syntax** — `const`, `let`, arrow functions | Used throughout every function |
| **Template Literals** | 6 marked usages: `getLabel()`, `formatHistoryCard()`, HOF label builders, `renderDisplay()`, `renderHistoryList()`, `handleKeyboard()` |
| **Destructuring** | `const { expression, result, type, id } = entry` in `formatHistoryCard`; `const { result, label } = outcome` in `handleSpecial`; `const { key } = e` in `handleKeyboard`; `const { value, action } = btn.dataset` |
| **Spread Operator** | `[...list, entry]` in `addToHistory` |
| **Rest Parameter** | `(...values)` in `computeStats` |
| **Pure Functions** | `add`, `subtract`, `multiply`, `divide`, `square`, `squareRoot`, `toEvalString`, `safeEvaluate` — none read or write external state |
| **First-Class Function** | `formatHistoryCard` stored in `const`, then passed as a callback to `processHistory()` |
| **Higher-Order Function** | `createSpecialHandler(mathFn, labelFn)` returns a function; `processHistory(list, transformFn)` accepts a function |
| **Array Methods** | `map()` inside `processHistory` and `getNumericResults`; `filter()` in `filterHistory` and `getNumericResults`; `reduce()` in `computeStats` |
| **Recursion** | `factorial(n)` and `fibonacci(n)` — both fully recursive with documented base cases |
| **OOP (ES6 class)** | `class CalculationEntry` — every history record is an instance |
| **Prototypal Inheritance** | `ScientificCalculator.prototype = Object.create(Calculator.prototype)` |
| **IIFE** | `const App = (function(){ ... })()` wraps the entire application |

---

## Recursion Explanation

Two recursive functions are implemented:

### `factorial(n)`
```js
const factorial = (n) => {
  if (!Number.isInteger(n) || n < 0) return null;  // guard
  if (n === 0 || n === 1) return 1;                // BASE CASE → stop recursion
  return n * factorial(n - 1);                     // RECURSIVE CALL
};
```
- **Base case:** when `n` is 0 or 1, return 1 — no further calls.
- **Recursive step:** `n × factorial(n − 1)` — the problem is reduced by 1 each time.
- Example: `factorial(4)` → `4 × factorial(3)` → `4 × 3 × factorial(2)` → `4 × 3 × 2 × 1 = 24`.

### `fibonacci(n)`
```js
const fibonacci = (n) => {
  if (!Number.isInteger(n) || n < 0) return null;
  if (n === 0) return 0;                           // BASE CASE 1
  if (n === 1) return 1;                           // BASE CASE 2
  return fibonacci(n - 1) + fibonacci(n - 2);     // RECURSIVE CALL
};
```
- **Base cases:** `n === 0` returns 0; `n === 1` returns 1.
- **Recursive step:** sum of the two preceding Fibonacci numbers.
- Example: `fibonacci(5)` → 5 (sequence: 0, 1, 1, 2, 3, 5).

---

## OOP and Prototypal Inheritance Explanation

### ES6 Class — `CalculationEntry`
```js
class CalculationEntry {
  constructor(expression, result, type) {
    this.expression = expression;
    this.result     = result;
    this.type       = type;      // "basic" | "special"
    this.id         = Date.now() + Math.random();
  }
  getLabel() {
    return `${this.expression} = ${this.result}`;
  }
}
```
Every result saved to history is an **instance of `CalculationEntry`** created with `new CalculationEntry(...)`.

### Prototypal Inheritance — `Calculator` → `ScientificCalculator`
```js
function Calculator(decimalPlaces) {
  this.decimalPlaces = decimalPlaces || 10;
}
Calculator.prototype.round = function(value) {
  return parseFloat(value.toFixed(this.decimalPlaces));
};

function ScientificCalculator(decimalPlaces) {
  Calculator.call(this, decimalPlaces);          // inherit own properties
}

// ← THE KEY LINE (matches checklist):
ScientificCalculator.prototype = Object.create(Calculator.prototype);
ScientificCalculator.prototype.constructor = ScientificCalculator;

// Child-only method — internally calls the INHERITED round()
ScientificCalculator.prototype.formatResult = function(value) {
  if (!isFinite(value)) return "Error";
  if (Number.isInteger(value)) return String(value);
  return String(this.round(value));  // uses inherited round()
};
```
`ScientificCalculator` gains `round()` from `Calculator` via the prototype chain. `formatResult()` — defined only on the child — calls the inherited `round()` to clean up floating-point results.

---

## How to Use Special Functions

| Button | What it does | Example |
|---|---|---|
| `x²` | Squares the displayed number | `9` → `(9)² = 81` |
| `√x` | Square root of the displayed number | `144` → `√(144) = 12` |
| `n!` | Factorial (int 0–20) | `5` → `5! = 120` |
| `Fib` | Fibonacci (int 0–35) | `10` → `Fib(10) = 55` |
| `xʸ` | Power operator — type `base [xʸ] exponent [=]` | `2 xʸ 8 = = 256` |

## Screenshots :

Initial View :![alt text](<Screenshot 2026-04-01 102425.png>)

Data Added View :![alt text](<Screenshot 2026-04-01 102434.png>)

Final Calculated Output View :![alt text](<Screenshot 2026-04-01 102445.png>)

---

## How to Run
1. Unzip the folder.
2. Open `index.html` in any modern browser (Chrome, Firefox, Edge, Safari).
3. No server, build step, or internet connection required (Google Fonts loads from CDN).


---

*Front-End Web Development - Advanced · Yenepoya University · Assignment 1*