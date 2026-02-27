**Your task is to create a functionality that checks if a number exists in a given array and returns its position.**

- If the number is found, return its index.
- If the number is not found, return -1000000.
- This assignment will help you understand closures (functions within functions) and how variables work in different scopes.

## What are we doing in this assignment?
**Exploring Closures:**
- See how inner functions can access variables from their parent functions.

**Understanding Scope:**
- Learn how variables (currIndex, check) behave within global, local, and block scopes.

**Using Constants:**
- Practice using constants like NEG_INF to store fixed values.

**Breaking Problems into Functions:**
- Build a modular program with nested functions for better code readability and organization.

**Array Operations with Closures:**
- Implement array checks inside closures and return dynamic results.


## Steps to Complete:
**Starter Code:**
- In src/app.js, you’ll find:
- An array called arrayOfNumbers.
- A number called itemToSearch.

**Step 1:**
- Create a global constant named NEG_INF and set its value to -1000000.
- Define a function named createPop.


**Step 2:**
- Inside createPop():
- Add two variables in its local scope:
- currIndex → Set it to NEG_INF.
- check → Set it to false.

**Step 3:**
- Create a function named searchForElement inside createPop:
- This function should close over the variables currIndex and check to update their values:
- Check if itemToSearch is in arrayOfNumbers.
- If found, update currIndex with the index of the number and set check to true.
- If not found, keep currIndex as NEG_INF and check as false.

**Step 4:**
- Inside createPop(), return a function that takes arrayOfNumbers and currIndex(presentItem/ notpresentItem) and check to display a dynamic result:
- If the number is found, return:
- "The item is present and is at index ${currIndex}".
- If the number is not found, return:
- "The item is not present and is at index ${currIndex}".

**Step 5:**
- Call createPop(), execute the returned function, and observe how closures allow access to currIndex and check even after createPop() is executed.

## Key Concepts You’ll Learn:
**Closures:**
- Understand how inner functions access variables from their parent functions even after the parent function is executed.

**Scope:**
- Differentiate between global, local, and block scope, and how they affect variable behavior.

## Dynamic Functionality:
- Build nested functions to create modular and reusable code.


**By completing this assignment, you’ll strengthen your understanding of closures, scope, and modular programming.**