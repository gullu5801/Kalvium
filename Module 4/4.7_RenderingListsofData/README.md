

##  Problem Statement

You are building a simple **user dashboard** using a React **class component**.
The application stores a list of users in the component state. Each user has information such as name, user type, age, and years of experience.

Your task is to process and display this data using **Higher Order Functions** like `map`, `filter`, and `reduce`.

You are provided with a starter component that contains incomplete logic. You must complete the missing parts so that the required outputs are rendered correctly.



##  Learning Objectives

By completing this assignment, you will learn how to:

* Work with **class components** in React
* Use **map**, **filter**, and **reduce** to manipulate arrays
* Render dynamic lists in JSX
* Implement logic that satisfies automated test conditions



##  Tasks (Progressions)

### **Progression 1: Define the State**

* The user data is already defined in the component state.
* Do not modify the structure of the state.



### **Progression 2: List All Users**

* Render all users present in the state.
* Each user must be displayed inside an `<li>` element.
* Use the `map()` function.



### **Progression 3: Filter Users Starting With Letter J**

* Display only users whose names start with the letter **J**.
* Use `filter()` and `map()`.



### **Progression 4: Filter Users Based on Age**

* Display users whose age is:

  * Greater than **28**
  * Less than or equal to **50**
* Use `filter()` and `map()`.



### **Progression 5: Calculate Total Experience of Designers**

* Calculate the total years of experience of users whose `user_type` is **Designer**.
* Use `filter()` and `reduce()`.
* Display the total experience in the UI.



##  Test Cases
Your submission will be evaluated based on the following checks:

1. **All users are rendered as list items**

   * The application should display at least one `<li>` element created dynamically from the state data.

2. **Users with names starting with the letter J are displayed**

   * Only users whose names begin with **J** should appear in this section.

3. **Users are correctly filtered based on age**

   * Users with age greater than 28 and less than or equal to 50 should be displayed.

4. **Total experience of designers is calculated and displayed**

   * The combined years of experience of all users with the role **Designer** should be correctly shown.



##  Instructions

* Complete only the missing logic in the provided component.
* Do **not** change existing headings, text, or file names.
* Use **Higher Order Functions** (`map`, `filter`, `reduce`) where appropriate.
* Ensure each list item is wrapped inside an `<li>` element.
* Your solution must render output in the browser without errors.



##  Submission Guidelines

* Editt only the `HigherOrderComponent.jsx` file.
* Do not add extra files or dependencies.
* Your submission will be **auto-evaluated**.
* Partial completion may receive partial credit.




