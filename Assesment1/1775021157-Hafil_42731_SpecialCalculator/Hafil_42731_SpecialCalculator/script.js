/**
 * ════════════════════════════════════════════════════════════════
 *  AXIOM Special Calculator — script.js
 *  Front-End Web Development - Advanced | Yenepoya | Assignment 1
 * ════════════════════════════════════════════════════════════════
 *
 *  CORE JS CONCEPTS CHECKLIST (from assignment image):
 *  ────────────────────────────────────────────────────────────
 *  ✔ ES6 Syntax            const, let, arrow functions, classes
 *  ✔ Template Literals     6 usages — #1..#6 marked in code
 *  ✔ Destructuring         object destructuring in 3 places
 *  ✔ Spread / Rest         addToHistory() uses spread;
 *                          computeStats() uses rest parameter
 *  ✔ Pure Function         add, subtract, multiply, divide,
 *                          square, squareRoot — no side effects
 *  ✔ First-Class Function  formatHistoryCard stored in const,
 *                          passed as callback to processHistory()
 *  ✔ Higher-Order Function createSpecialHandler() returns a fn;
 *                          processHistory() accepts a fn
 *  ✔ Array Methods         map(), filter(), reduce() all used
 *  ✔ Recursion             factorial(n) and fibonacci(n)
 *  ✔ OOP                   class CalculationEntry
 *  ✔ Prototypal Inherit.   ScientificCalculator via Object.create
 *  ✔ IIFE                  entire app wrapped → no global leak
 * ════════════════════════════════════════════════════════════════
 */

// ════════════════════════════════════════════════════════════════
//  IIFE — Immediately Invoked Function Expression
//  Wraps everything: prevents any variable from polluting
//  the global (window) scope.
// ════════════════════════════════════════════════════════════════
const App = (function () {

  "use strict";

  /* ────────────────────────────────────────────────────────────
   *  1. OOP — ES6 Class
   *
   *  CalculationEntry represents one completed computation.
   *  Every result stored in history is an instance of this class.
   * ────────────────────────────────────────────────────────────*/
  class CalculationEntry {
    /**
     * @param {string} expression — the expression string, e.g. "12×5+3"
     * @param {string} result     — the formatted result string
     * @param {string} type       — "basic" | "special"
     */
    constructor(expression, result, type) {
      this.expression = expression;
      this.result     = result;
      this.type       = type;
      this.id         = Date.now() + Math.random(); // unique ID
    }

    // Template Literal #1
    getLabel() {
      return `${this.expression} = ${this.result}`;
    }
  }

  /* ────────────────────────────────────────────────────────────
   *  2. PROTOTYPAL INHERITANCE (non-class pattern)
   *
   *  Calculator  ←  parent: provides a rounding utility
   *  ScientificCalculator  ←  child: extends via Object.create,
   *  adds formatResult() which calls the inherited round().
   * ────────────────────────────────────────────────────────────*/

  /** Parent constructor */
  function Calculator(decimalPlaces) {
    this.decimalPlaces = decimalPlaces || 10;
  }
  /** Parent prototype method */
  Calculator.prototype.round = function (value) {
    return parseFloat(value.toFixed(this.decimalPlaces));
  };

  /** Child constructor — calls parent to set up own properties */
  function ScientificCalculator(decimalPlaces) {
    Calculator.call(this, decimalPlaces);   // inherit own properties
  }
  /**
   * ← THE prototypal inheritance line (matches checklist example):
   *   Child.prototype = Object.create(Parent.prototype)
   */
  ScientificCalculator.prototype = Object.create(Calculator.prototype);
  ScientificCalculator.prototype.constructor = ScientificCalculator;

  /**
   * Child-only method — formats a result for display.
   * Internally calls this.round() which is the INHERITED method.
   */
  ScientificCalculator.prototype.formatResult = function (value) {
    if (!isFinite(value)) return "Error";
    if (Number.isInteger(value)) return String(value);
    return String(this.round(value));       // uses inherited round()
  };

  /** Single shared instance used throughout the app */
  const sciCalc = new ScientificCalculator(8);

  /* ────────────────────────────────────────────────────────────
   *  3. PURE FUNCTIONS
   *
   *  These functions have NO side effects: they only take inputs
   *  and return an output. Same input always gives same output.
   *  They never read or write any external/global state.
   * ────────────────────────────────────────────────────────────*/
  const add        = (a, b) => a + b;
  const subtract   = (a, b) => a - b;
  const multiply   = (a, b) => a * b;
  const divide     = (a, b) => (b !== 0 ? a / b : null);
  const square     = (n)    => n * n;
  const squareRoot = (n)    => (n >= 0 ? Math.sqrt(n) : null);

  /* ────────────────────────────────────────────────────────────
   *  4. RECURSION
   *
   *  Two recursive functions, each with a clearly defined
   *  BASE CASE (stops recursion) and RECURSIVE CALL.
   * ────────────────────────────────────────────────────────────*/

  /**
   * factorial — calculates n! recursively.
   *
   * Base case  : n === 0 or n === 1  →  return 1
   * Recursive  : n × factorial(n − 1)
   *
   * Example trace for factorial(4):
   *   4 × factorial(3)
   *       3 × factorial(2)
   *           2 × factorial(1)
   *               → 1  (base case)
   *           2 × 1 = 2
   *       3 × 2 = 6
   *   4 × 6 = 24  ✓
   */
  const factorial = (n) => {
    if (!Number.isInteger(n) || n < 0) return null;   // guard
    if (n === 0 || n === 1) return 1;                 // ← BASE CASE
    return n * factorial(n - 1);                      // ← RECURSIVE CALL
  };

  /**
   * fibonacci — calculates the nth Fibonacci number recursively.
   *
   * Base cases : n === 0  →  0
   *              n === 1  →  1
   * Recursive  : fib(n−1) + fib(n−2)
   *
   * Example: fibonacci(5) = 5  (0,1,1,2,3,5)
   */
  const fibonacci = (n) => {
    if (!Number.isInteger(n) || n < 0) return null;   // guard
    if (n === 0) return 0;                            // ← BASE CASE
    if (n === 1) return 1;                            // ← BASE CASE
    return fibonacci(n - 1) + fibonacci(n - 2);      // ← RECURSIVE CALL
  };

  /* ────────────────────────────────────────────────────────────
   *  5. SPREAD AND REST OPERATORS
   * ────────────────────────────────────────────────────────────*/

  /**
   * addToHistory — uses the SPREAD operator [...list, entry].
   * Returns a brand-new array instead of mutating the original.
   * This is the "immutable update" pattern.
   */
  const addToHistory = (list, entry) => [...list, entry];   // ← SPREAD

  /**
   * computeStats — uses REST parameter (...values).
   * Accepts any number of numeric arguments.
   * Internally uses reduce() to compute max and average.
   *
   * @param  {...number} values — individual result numbers (rest)
   * @returns {{ count, max, avg }}
   */
  const computeStats = (...values) => {                     // ← REST
    if (values.length === 0) return { count: 0, max: null, avg: null };

    const count = values.length;
    const max   = values.reduce((a, b) => (a > b ? a : b));  // reduce()
    const avg   = values.reduce((sum, v) => sum + v, 0) / count;
    return { count, max, avg };
  };

  /* ────────────────────────────────────────────────────────────
   *  6. FIRST-CLASS FUNCTION
   *
   *  formatHistoryCard is stored in a const variable.
   *  It is later passed as a CALLBACK ARGUMENT to processHistory().
   * ────────────────────────────────────────────────────────────*/

  /**
   * formatHistoryCard — a first-class function (stored in const).
   * Converts a CalculationEntry into an HTML string.
   *
   * Also demonstrates:
   *   • Object destructuring
   *   • Template Literals #2
   */
  const formatHistoryCard = (entry, index) => {
    // Destructuring — extract fields from the CalculationEntry object
    const { expression, result, type, id } = entry;

    // Template Literal #2
    return `
      <div class="hist-card ${type}" data-id="${id}">
        <span class="hist-idx">${String(index + 1).padStart(2, "0")}</span>
        <div class="hist-body">
          <span class="hist-expr">${expression}</span>
          <span class="hist-result">= ${result}</span>
        </div>
        <span class="hist-badge ${type}">${type}</span>
      </div>`;
  };

  /* ────────────────────────────────────────────────────────────
   *  7. HIGHER-ORDER FUNCTIONS
   *
   *  Two flavours:
   *  a) createSpecialHandler — RETURNS a function (function factory)
   *  b) processHistory       — ACCEPTS a function as an argument
   * ────────────────────────────────────────────────────────────*/

  /**
   * createSpecialHandler — HOF that RETURNS a function.
   *
   * It is a "factory": you give it a math function and a label
   * builder, and it gives back a brand-new handler function that
   * knows how to apply both when later called with a number.
   *
   * @param {Function} mathFn   — pure math fn: (n) => number | null
   * @param {Function} labelFn  — produces the expression label string
   * @returns {Function}         — (num) => { result, label } | null
   */
  const createSpecialHandler = (mathFn, labelFn) => (num) => {
    const result = mathFn(num);
    if (result === null || !isFinite(result)) return null;
    // Template Literal #3 used inside labelFn below
    return { result, label: labelFn(num) };
  };

  // Four handler functions — each produced by the HOF above
  // (also first-class: stored in const variables)
  const squareHandler    = createSpecialHandler(square,      (n) => `(${n})²`);   // TL #3
  const sqrtHandler      = createSpecialHandler(squareRoot,  (n) => `√(${n})`);
  const factorialHandler = createSpecialHandler(factorial,   (n) => `${n}!`);
  const fibHandler       = createSpecialHandler(fibonacci,   (n) => `Fib(${n})`);

  /**
   * processHistory — HOF that ACCEPTS a function as an argument.
   *
   * Applies the transformation function (transformFn) to every
   * entry in the list using map().
   *
   * In practice: processHistory(list, formatHistoryCard)
   * — formatHistoryCard is passed in as a FIRST-CLASS FUNCTION.
   *
   * @param {CalculationEntry[]} list
   * @param {Function}           transformFn
   * @returns {string[]}
   */
  const processHistory = (list, transformFn) => list.map(transformFn); // HOF + map()

  /* ────────────────────────────────────────────────────────────
   *  8. ARRAY METHODS — filter() and reduce()
   *  (map() is already used inside processHistory above)
   * ────────────────────────────────────────────────────────────*/

  /**
   * filterHistory — filter() returns only entries of the chosen type.
   * @param {CalculationEntry[]} list
   * @param {string}             type  "all" | "basic" | "special"
   */
  const filterHistory = (list, type) =>
    type === "all" ? list : list.filter((e) => e.type === type); // ← filter()

  /**
   * getNumericResults — map() + filter():
   *   map()    →  extract the numeric result from each entry
   *   filter() →  discard NaN / Infinity values (e.g. Error entries)
   */
  const getNumericResults = (list) =>
    list
      .map((e) => Number(e.result))            // ← map()
      .filter((r) => !isNaN(r) && isFinite(r)); // ← filter()

  /* ────────────────────────────────────────────────────────────
   *  9. SAFE EXPRESSION EVALUATOR  (pure functions)
   * ────────────────────────────────────────────────────────────*/

  /**
   * toEvalString — pure function.
   * Converts display-friendly symbols back to JS operator characters.
   * (We show "×", "÷", "−", "^" on screen; JS needs *, /, -, **)
   */
  const toEvalString = (expr) =>
    expr
      .replace(/×/g, "*")
      .replace(/÷/g, "/")
      .replace(/−/g, "-")
      .replace(/\^/g, "**");

  /**
   * safeEvaluate — pure function.
   * Sanitizes and evaluates a math expression string.
   * Only characters 0-9, +, -, *, /, ., ( ) are allowed through.
   *
   * @param  {string} expr — the display expression
   * @returns {number|null}
   */
  const safeEvaluate = (expr) => {
    const evalStr    = toEvalString(expr);
    const sanitized  = evalStr.replace(/[^0-9+\-*/.()]/g, "");
    if (!sanitized) return null;
    try {
      // Function constructor used in strict mode — safe because we sanitized
      // eslint-disable-next-line no-new-func
      const result = Function(`"use strict"; return (${sanitized})`)();
      return typeof result === "number" && isFinite(result) ? result : null;
    } catch {
      return null;
    }
  };

  /* ────────────────────────────────────────────────────────────
   *  10. APPLICATION STATE  (private — IIFE-scoped only)
   * ────────────────────────────────────────────────────────────*/

  let history       = [];       // CalculationEntry[]
  let activeFilter  = "all";    // "all" | "basic" | "special"
  let expression    = "";       // current display expression string
  let justEvaluated = false;    // true immediately after = is pressed
  let lastResult    = null;     // last computed numeric value

  // Map of action keys → handler functions (produced by the HOF)
  const SPECIAL_HANDLERS = {
    square:    squareHandler,
    sqrt:      sqrtHandler,
    factorial: factorialHandler,
    fibonacci: fibHandler,
  };

  // Operator characters (display-friendly symbols)
  const OPERATORS = ["+", "−", "×", "÷", "^"];

  /* ────────────────────────────────────────────────────────────
   *  RENDER FUNCTIONS
   * ────────────────────────────────────────────────────────────*/

  /** Updates the calculator display. Template Literal #4 */
  const renderDisplay = () => {
    document.getElementById("display-expr").textContent =
      expression || "0";
    document.getElementById("display-result").textContent =
      lastResult !== null
        ? `= ${sciCalc.formatResult(lastResult)}`  // Template Literal #4
        : "";
  };

  /** Rebuilds the history list from current state. */
  const renderHistoryList = () => {
    const listEl   = document.getElementById("history-list");
    const filtered = filterHistory(history, activeFilter);        // filter()
    const reversed = [...filtered].reverse();                     // spread copy

    if (reversed.length === 0) {
      // Template Literal #5
      const msg = history.length === 0
        ? "Results will appear here as you calculate."
        : `No "${activeFilter}" entries found.`;
      listEl.innerHTML = `<p class="empty-msg">${msg}</p>`;
      return;
    }

    // HOF in action: processHistory accepts the first-class fn formatHistoryCard
    const cards = processHistory(reversed, formatHistoryCard);
    listEl.innerHTML = cards.join("");
  };

  /** Recalculates and displays summary statistics. */
  const renderStats = () => {
    const numericResults = getNumericResults(history);       // map() + filter()
    const stats          = computeStats(...numericResults);  // spread as rest args

    document.getElementById("stat-count").textContent =
      stats.count;
    document.getElementById("stat-max").textContent =
      stats.max !== null ? sciCalc.formatResult(stats.max) : "—";
    document.getElementById("stat-avg").textContent =
      stats.avg !== null ? sciCalc.formatResult(stats.avg) : "—";
  };

  /** Master render — call to refresh the entire UI. */
  const render = () => {
    renderDisplay();
    renderHistoryList();
    renderStats();
  };

  /* ────────────────────────────────────────────────────────────
   *  CALCULATOR CORE LOGIC
   * ────────────────────────────────────────────────────────────*/

  /**
   * appendValue — adds a character (digit, operator, decimal, "^")
   * to the current expression.
   *
   * Special case: if we just evaluated (= was pressed), pressing
   * an operator continues from the result; pressing a digit starts fresh.
   */
  const appendValue = (value) => {
    const isOp = OPERATORS.includes(value);

    if (justEvaluated) {
      expression = isOp
        ? `${sciCalc.formatResult(lastResult)}${value}` // continue from result
        : value;                                         // start fresh
      justEvaluated = false;
      if (!isOp) lastResult = null;
    } else {
      expression += value;
    }
    renderDisplay();
  };

  /**
   * handleEquals — evaluates the current expression.
   * On success: creates a CalculationEntry and logs it to history.
   */
  const handleEquals = () => {
    if (!expression) return;

    const rawResult = safeEvaluate(expression);
    if (rawResult === null) {
      document.getElementById("display-result").textContent = "Error — invalid expression";
      return;
    }

    const formatted = sciCalc.formatResult(rawResult);   // inherited round()
    const entry     = new CalculationEntry(expression, formatted, "basic");

    history       = addToHistory(history, entry);         // spread (immutable)
    lastResult    = rawResult;
    justEvaluated = true;

    render();
  };

  /**
   * handleSpecial — applies a special function (square, sqrt,
   * factorial, fibonacci) or inserts the power operator "^".
   *
   * @param {string} action — key from SPECIAL_HANDLERS or "power"
   */
  const handleSpecial = (action) => {
    // "power" is an infix operator: user types  base [xʸ] exponent [=]
    if (action === "power") {
      appendValue("^");
      return;
    }

    // Determine the number to apply the function to
    let num = null;
    const parsed = Number(expression);

    if (expression !== "" && !isNaN(parsed)) {
      num = parsed;                    // use what's typed in the display
    } else if (lastResult !== null) {
      num = lastResult;                // use previous result
    }

    if (num === null) {
      document.getElementById("display-result").textContent =
        "Enter a number first";
      return;
    }

    // Safety cap for Fibonacci (recursion is exponential — cap at 35)
    if (action === "fibonacci" && (num > 35 || !Number.isInteger(num))) {
      document.getElementById("display-result").textContent =
        "Fib: integer 0–35 only";
      return;
    }

    // Safety cap for factorial (31! overflows JS's integer precision)
    if (action === "factorial" && (num > 20 || !Number.isInteger(num))) {
      document.getElementById("display-result").textContent =
        "n!: integer 0–20 only";
      return;
    }

    const handler = SPECIAL_HANDLERS[action]; // look up the HOF-produced fn
    if (!handler) return;

    const outcome = handler(num);   // invoke the handler returned by the HOF
    if (!outcome) {
      document.getElementById("display-result").textContent = "Error";
      return;
    }

    // Destructuring — extract result and label from the outcome object
    const { result, label } = outcome;
    const formatted          = sciCalc.formatResult(result);
    const entry              = new CalculationEntry(label, formatted, "special");

    history       = addToHistory(history, entry);         // spread (immutable)
    expression    = formatted;
    lastResult    = result;
    justEvaluated = true;

    render();
  };

  /** handleClear — resets display and expression. Does NOT clear history. */
  const handleClear = () => {
    expression    = "";
    lastResult    = null;
    justEvaluated = false;
    renderDisplay();
  };

  /** handleBackspace — removes the last typed character. */
  const handleBackspace = () => {
    if (justEvaluated) { handleClear(); return; }
    expression = expression.slice(0, -1);
    renderDisplay();
  };

  /* ────────────────────────────────────────────────────────────
   *  EVENT HANDLERS
   * ────────────────────────────────────────────────────────────*/

  /**
   * handleGridClick — event delegation for button grid AND special row.
   * Single listener on the parent container instead of one per button.
   * Reads data-value or data-action from the clicked button.
   */
  const handleGridClick = (e) => {
    const btn = e.target.closest("[data-value], [data-action]");
    if (!btn) return;

    // Destructuring from dataset
    const { value, action } = btn.dataset;

    if (value !== undefined) {
      appendValue(value);
    } else {
      switch (action) {
        case "equals":    handleEquals();        break;
        case "clear":     handleClear();         break;
        case "backspace": handleBackspace();     break;
        default:          handleSpecial(action); break;
      }
    }

    // Visual press feedback
    btn.classList.add("pressed");
    setTimeout(() => btn.classList.remove("pressed"), 130);
  };

  /**
   * handleFilterClick — switches the history filter.
   * Uses event delegation on the filter row container.
   */
  const handleFilterClick = (e) => {
    const btn = e.target.closest(".filter-btn");
    if (!btn) return;

    activeFilter = btn.dataset.filter;
    document.querySelectorAll(".filter-btn").forEach((b) =>
      b.classList.toggle("active", b === btn)
    );
    renderHistoryList();
  };

  /**
   * handleKeyboard — keyboard support.
   * Template Literal #6 used in the operatorMap.
   *
   * Destructuring: const { key } = e
   */
  const handleKeyboard = (e) => {
    const { key } = e;    // ← destructuring from the event object

    const digits = ["0","1","2","3","4","5","6","7","8","9","."];

    // Map keyboard chars to display symbols
    const operatorMap = {
      "+": "+",
      "-": "−",
      "*": "×",
      "/": "÷",
      "^": "^",
    };

    if (digits.includes(key))           { appendValue(key); return; }
    if (operatorMap[key] !== undefined)  { appendValue(operatorMap[key]); return; }
    if (key === "Enter" || key === "=")  { handleEquals(); return; }
    if (key === "Backspace")             { handleBackspace(); return; }
    if (key === "Escape")                { handleClear(); return; }

    // Template Literal #6 — used here to show keyboard hint in title
    document.title = `AXIOM — ${expression || "0"}`;
  };

  /* ────────────────────────────────────────────────────────────
   *  INIT — wire up all event listeners, then do first render
   * ────────────────────────────────────────────────────────────*/
  const init = () => {
    document
      .getElementById("button-grid")
      .addEventListener("click", handleGridClick);

    document
      .getElementById("special-row")
      .addEventListener("click", handleGridClick);

    document
      .getElementById("filter-row")
      .addEventListener("click", handleFilterClick);

    document
      .getElementById("clear-history")
      .addEventListener("click", () => {
        history = [];
        render();
      });

    document.addEventListener("keydown", handleKeyboard);

    render(); // initial render
  };

  // ── Public API — expose only init ────────────────────────────
  return { init };

})(); // ← IIFE: executes immediately, returns { init }

// ── Bootstrap ─────────────────────────────────────────────────
App.init();