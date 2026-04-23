# Project Title
Smart Utility Manager - Premium Expense Tracker

## Description of the Application
The **Smart Utility Manager** is a visually engaging and responsive Expense Tracker built to manage daily personal finances. Users can dynamically input new expenses with details (title, amount, and category) without reloading the page. 

The application features a built-in dashboard that displays real-time analytics including **Total Expenses** and the **Maximum Expense** entered. Users can further organize their views by filtering expenses based on categories (Food, Transport, Utilities, Entertainment, Other), and cleanly delete obsolete items. The entire codebase heavily emphasizes functional programming concepts and modular OOP design, wrapped within a premium "Glassmorphism" UI purely developed utilizing HTML, CSS, and Vanilla JavaScript.

## List of JavaScript Concepts Implemented
The application strictly demonstrates all required core JavaScript concepts:

1. **ES6 Syntax (`let`, `const`, arrow functions)**: Employed heavily throughout `script.js` for variable scoping and concise function declarations.
2. **Template Literals**: Used to render dynamic HTML layouts (e.g., inside the `map` method render block) and currency formats (e.g., `` `₹${value.toFixed(2)}` ``).
3. **Destructuring**: Extracts properties from objects elegantly (`const { id, title, amount, category } = expense`).
4. **Spread/Rest Operator**: Used to safely append new data to the state array without mutating it (`expenses = [...expenses, newExpense]`).
5. **Pure Function**: `calculateSum(dataArray)` is pure as it causes no side-effects and consistently returns the same aggregated output for the same input array.
6. **First-Class Function**: The `formatCurrency` function is dynamically stored into a variable and leveraged repeatedly as a first-class citizen.
7. **Higher-Order Function**: `createCategoryFilter` accepts a category string and *returns* a dedicated filtering function intended to be passed into the `.filter()` method.
8. **Array Methods**: Built-in methods like `.map()` (to transform data into DOM elements), `.filter()` (to execute delete and category searches), and `.reduce()` (to aggregate total amounts) are core to the application.
9. **Recursion**: See explanation below.
10. **OOP & Prototypal Inheritance**: See explanation below.

## Explanation of where Recursion is used
Recursion is elegantly used to compute the **Maximum Expense** among all the user entries. Instead of using a traditional `for` loop or `Math.max`, the function `findMaxExpense(arr, index = 0, currentMax = 0)` is implemented recursively. 

It evaluates the array progressively:
- **Base Case**: If the incremented `index` matches the length of the array, the function terminates and returns the `currentMax`.
- **Recursive Step**: It compares the `amount` at the current `index` against the previously passed `currentMax`, determines the new higher value, and calls itself moving forward to `index + 1`. This elegantly determines the highest expense amount traversing depth-first.

## Explanation of OOP & Prototypal Inheritance usage
Object-Oriented Programming (OOP) is utilized by defining a `UtilityItem` class inside `script.js`. Every time a user adds a valid utility via the form, a localized instance `new UtilityItem(title, amount, category)` is generated natively. This bundles properties like ID generation logic, `title`, `amount`, and a timestamp together cleanly.

To demonstrate **Prototypal Inheritance**, the formatting behavior `.getFormattedAmount()` is explicitly tethered to `UtilityItem.prototype`. 
Instead of redundantly creating this function inside every instantiated object's memory space, it is attached to the parent object's **prototype chain**. Should an instantiated object ever call `getFormattedAmount()`, Javascript will check the individual object, fail to find it inherently, look "up" the inheritance chain, discover it natively on the `UtilityItem` prototype, and execute it efficiently. This perfectly replicates classical Prototypal Inheritance natively in JavaScript.
