# Smart Utility Manager

## Project Title

Smart Utility Manager

## Project Description

Smart Utility Manager is a browser-based mini application developed using HTML, CSS, and JavaScript (ES6). It allows users to manage utility records such as electricity, water, internet, and gas expenses.

Users can add utility details, categorize them, view records dynamically, filter expensive utilities, calculate total utility cost, delete records, and reset all entries.

## Features

* Add utility name and amount
* Select utility category
* Display utility records dynamically
* Show date of entry
* Delete utility records
* Filter utilities above ₹500
* Calculate total amount
* Reset all records
* Responsive design

## JavaScript Concepts Implemented

* let and const
* Arrow functions
* Template literals
* Destructuring
* Spread operator
* Pure function
* First-class function
* Higher-order function
* map()
* filter()
* reduce()
* Recursion
* Object-Oriented Programming (OOP)
* Prototype inheritance
* IIFE

## Recursion Usage

Recursion is used in the `recursiveSum()` function.

This function calculates the total utility amount by recursively adding each utility value until all records are processed.

## OOP and Prototype Inheritance

The `Utility` class is used to create utility objects with:

* name
* amount
* category
* date

The `PremiumUtility` class extends `Utility` and adds:

* priority

This demonstrates prototype inheritance in JavaScript.

## File Structure

* index.html
* style.css
* script.js
* README.md
* screenshots

## Sample Input

* Electricity - ₹1200
* Water - ₹400
* Internet - ₹800

## Sample Output

**Total Amount: ₹2400**
