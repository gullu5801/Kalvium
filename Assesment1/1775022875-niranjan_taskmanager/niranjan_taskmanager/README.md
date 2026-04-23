# Smart Utility Manager - Task Manager

## 📌 Description
This is a mini web application built using **HTML, CSS, and JavaScript (ES6)**.  
It allows users to add tasks with priorities, view them dynamically, and calculate summary statistics.

## 🛠️ JavaScript Concepts Implemented
- **ES6 Syntax**: `let`, `const`, arrow functions
- **Template Literals**: Used in `Task.display()` and summary output
- **Destructuring**: Can be applied when handling task objects
- **Spread Operator**: `[...tasks]` used for copying arrays
- **Pure Function**: `calculateAveragePriority()`
- **First-Class Function**: Functions stored in variables
- **Higher-Order Function**: `processTasks()`
- **Array Methods**: `map()`, `reduce()`
- **Recursion**: `countTasksRecursive()`
- **OOP**: `class Task`
- **Prototypal Inheritance**: `SpecialTask` extends `Task`
- **IIFE**: Initialization log

## 🔄 Recursion Usage
`countTasksRecursive()` counts tasks without using loops.

## 🏗️ OOP & Prototypal Inheritance
- `Task` class defines task objects.
- `SpecialTask` inherits from `Task` using prototypal inheritance.

## 📸 Screenshots
1. **Initial View** – Empty task list
2. **Data Added View** – Tasks displayed dynamically
3. **Final Calculated Output View** – Summary with total tasks and average priority