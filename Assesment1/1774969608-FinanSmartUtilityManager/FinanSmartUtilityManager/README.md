# Student Grade Manager

## Project Title
*Smart Utility Manager - Student Grade Manager*

## Description of the Application
Student Grade Manager is a mini web application built with *HTML, CSS, and Vanilla JavaScript (ES6)*.

It allows users to:
- Add a student name and comma-separated grades without page reload
- Dynamically display students as cards
- Compute and display class-level metrics: *average, **highest, and **lowest* grade
- Remove students with a delete action and instantly refresh summary data

The app is implemented with a clean UI and modular JavaScript, while avoiding global scope pollution using an IIFE.

## List of JavaScript Concepts Implemented
The implementation includes all required concepts:

1. *ES6 Syntax*: Uses let and const; logic implemented with arrow functions.
2. *Template Literals*: Used while rendering student cards and success messages.
3. *Destructuring*: Example usage with student objects (const { name, grades } = student).
4. *Spread/Rest Operator*: Used to flatten grade arrays ([...accumulator, ...grades]).
5. *Pure Function*: pureAverage(grades) returns average without side effects.
6. *First-Class Function*: messagePrinter stored in a variable and invoked where needed.
7. *Higher-Order Function*: processData(data, callback) accepts a callback function.
8. *Array Methods*: Uses map(), filter(), and reduce() for transformation and aggregation.
9. *Recursion*: recursiveSum(grades, index) recursively sums grades.
10. *OOP*: Uses class-based modeling with Person and Student classes.
11. *Prototypal Inheritance*: Student extends Person demonstrates inheritance.
12. *IIFE*: Entire app wrapped in an Immediately Invoked Function Expression.

## Explanation of where Recursion is used
Recursion is used in:
- recursiveSum(grades, index = 0)

How it works:
- *Base case*: when index reaches the end of the grades array, it returns 0.
- *Recursive case*: returns current grade + recursive call for next index.

This recursive total is then used by:
- calculateAverageWithRecursion(grades)

So each student card’s average is computed through recursive summation.

## Explanation of OOP & Prototypal Inheritance usage
The app uses object-oriented modeling for clarity and reuse:

- Person class is the parent/base class with shared property name and method getDisplayName().
- Student class extends Person and adds grades.

Because Student extends Person, student instances inherit methods from Person through JavaScript’s prototype chain. This is a direct use of prototypal inheritance via ES6 class syntax.