# Smart Utility Manager – Expense Tracker

## 📌 Project Description
This is a browser-based mini web application built using HTML, CSS, and Vanilla JavaScript. The application allows users to manage daily expenses by adding, viewing, and deleting entries. It also calculates the total expenses dynamically and stores data using localStorage.

---

## 🚀 Features
- Add new expenses with title and amount
- Delete existing expenses
- Automatically calculate total expenses
- Persistent data using localStorage (data remains after reload)
- Dynamic UI updates without refreshing the page

---

## 🧠 JavaScript Concepts Implemented

### ✅ ES6 Features
- `let` and `const`
- Arrow functions
- Template literals

### ✅ Functional Programming
- Use of pure functions
- Avoidance of global mutations where possible

### ✅ Array Methods
- `map()` for rendering UI
- `filter()` for deleting items
- `reduce()` for total calculation

### ✅ First-Class & Higher-Order Functions
- Functions passed as arguments (callback pattern)
- Example: `processData(data, callback)`

### ✅ Recursion
- Recursive function used to calculate total:
```js
const recursiveSum = (arr) => {
    if (arr.length === 0) return 0;
    return arr[0].amount + recursiveSum(arr.slice(1));
};