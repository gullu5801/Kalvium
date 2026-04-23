# Smart Utility Manager – Expense Tracker

##  Project Title

**Smart Utility Manager: Expense Tracker**

---

##  Description of the Application

The Expense Tracker is a browser-based mini web application developed using HTML, CSS, and JavaScript. It allows users to manage their financial data by adding income and expense transactions dynamically.

The application displays all transactions, calculates total income, total expenses, and overall balance in real-time without reloading the page. It demonstrates modern JavaScript programming concepts and clean coding practices.

---

##  Features

* Add income and expense transactions
* Dynamic update of transaction list
* Automatic calculation of:

  * Total Balance
  * Total Income
  * Total Expenses
* Delete transactions
* Responsive and clean user interface
* No page reload required

---

##  JavaScript Concepts Implemented

###  ES6 Features

* `let`, `const`
* Arrow functions

###  Template Literals

Used for dynamic string rendering in UI

###  Destructuring

Used to extract values from objects inside array methods

###  Spread Operator

Used to update transaction list immutably

###  Pure Functions

Example:

```
getTotal(arr)
```

This function calculates totals without modifying external data.

### First-Class Functions

Functions are stored in variables and passed as arguments.

### Higher-Order Functions

Used:

* `map()`
* `filter()`
* `reduce()`

###  Recursion

Used to calculate total transaction amount:

```
recursiveSum(arr, n)
```

### Object-Oriented Programming (OOP)

Implemented using:

```
class Transaction
```

### Prototypal Inheritance

Implemented using:

```
PremiumTransaction.prototype = Object.create(Transaction.prototype)
```

### IIFE (Immediately Invoked Function Expression)

Used to encapsulate application logic and avoid global scope pollution.

---

## Explanation of Recursion

Recursion is used in the function `recursiveSum(arr, n)` to calculate the total sum of transaction amounts. The function calls itself until the base condition (`n <= 0`) is reached.

---

## Explanation of OOP & Prototypal Inheritance

### OOP

The `Transaction` class is used to create transaction objects with properties like description, amount, and type.

### Prototypal Inheritance

A constructor function `PremiumTransaction` inherits from `Transaction` using:

```
Object.create(Transaction.prototype)
```

This allows reuse of properties and methods.


## Conclusion

This project successfully demonstrates the use of core JavaScript concepts such as functional programming, recursion, OOP, and DOM manipulation to build an interactive and dynamic web application.
