# Smart Utility Manager - Expense Tracker

## Project Title
Smart Utility Manager - Expense Tracker

## Description
The Smart Utility Manager is a browser-based mini web application that allows users to manage daily expenses dynamically. 
Users can add, delete, filter, and calculate expenses in real-time. The application demonstrates advanced JavaScript concepts 
including functional programming, recursion, object-oriented programming, and prototypal inheritance using only HTML, CSS, 
and Vanilla JavaScript (ES6).

## Features
- Add new expense
- Delete expense
- Filter expenses by category
- Calculate total expenses
- Count number of expenses
- Dynamic UI updates
- Clean and responsive interface

## JavaScript Concepts Implemented

### ES6 Features
- let and const
- Arrow functions
- Template literals
- Spread operator
- Destructuring (used where applicable)

### Functional Programming
- Pure functions
- Higher-order functions
- First-class functions

### Array Methods
- map()
- filter()
- reduce()

### Recursion
- Recursive function to count total items

### Object-Oriented Programming (OOP)
- ES6 class used to create Expense objects

### Prototypal Inheritance
- PremiumExpense inherits from Expense using prototype chaining

### IIFE
- Immediately Invoked Function Expression used for initialization

---

## Recursion Implementation

Recursion is used in the `countItems()` function to calculate the total number of expenses.

Example:

```javascript
const countItems = (arr) => {
if (arr.length === 0) return 0;
return 1 + countItems(arr.slice(1));
};
```

This recursive function repeatedly reduces the array size until it reaches an empty array, then counts each element during the return phase.

---

## Object-Oriented Programming Implementation

The application uses a class called `Expense` to create expense objects.

Example:

```javascript
class Expense {
constructor(id, title, amount, category) {
this.id = id;
this.title = title;
this.amount = amount;
this.category = category;
}
}
```

Each expense added by the user becomes an instance of this class, making the code modular and easier to maintain.

---

## Prototypal Inheritance Implementation

Prototypal inheritance is implemented using a `PremiumExpense` constructor function that inherits from the `Expense` class.

Example:

```javascript
function PremiumExpense() {
Expense.apply(this, arguments);
}

PremiumExpense.prototype = Object.create(Expense.prototype);
```

This allows the PremiumExpense object to inherit properties and methods from Expense.

---

## Technologies Used
- HTML
- CSS
- Vanilla JavaScript (ES6)

---

## How to Run
1. Download project files
2. Open index.html in browser
3. Start adding expenses

---

## Author
Student Submission - Front-end Web Development Advanced
