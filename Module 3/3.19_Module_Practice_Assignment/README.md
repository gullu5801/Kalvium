# React State Management with useState Hook

**Learning Unit Objective:** To manage component state using the `useState` hook for dynamic, interactive UIs.

**Learning Unit Outcome:** Students will be able to create stateful components that update and re-render based on user interactions.

---

## Problem Statement

In this assignment, you will implement a fundamental aspect of React development: state management using the `useState` hook. You will build a simple application that features a counter and a controlled text input field. Your primary goal is to ensure that user interactions (button clicks and typing) correctly update the component's state, leading to dynamic re-renders of the user interface.

This exercise will reinforce your understanding of:
*   Importing and using the `useState` hook.
*   Declaring state variables with initial values.
*   Updating state exclusively through setter functions.
*   Recognizing that state updates trigger component re-renders.
*   Implementing controlled components for form elements.

## Files to Edit

You will primarily be working in the following file:

*   `src/App.jsx`

**Do not modify any other files (e.g., `src/main.jsx`, `vitest.setup.js`, `index.html`).**

## Tasks

1.  **Initialize Counter State**:
    *   In `src/App.jsx`, import the `useState` hook from React.
    *   Inside the `App` functional component, declare a state variable named `count` and its setter function (e.g., `setCount`). Initialize `count` to `0`.

2.  **Display Counter Value**:
    *   In the JSX returned by `App`, display the current value of the `count` state variable within an `<h2>` tag. The text should clearly indicate "Counter: [current value]".

3.  **Implement Increment Button**:
    *   Add an "Increment" button. When this button is clicked, it should call a handler function that uses `setCount` to increase the `count` state by `1`.

4.  **Implement Decrement Button**:
    *   Add a "Decrement" button. When this button is clicked, it should call a handler function that uses `setCount` to decrease the `count` state by `1`.

5.  **Initialize Input State**:
    *   Declare another state variable named `inputValue` and its setter function (e.g., `setInputValue`). Initialize `inputValue` to an empty string (`''`).

6.  **Implement Controlled Input**:
    *   Render an `<input type="text" />` element.
    *   Bind its `value` attribute to the `inputValue` state variable.
    *   Attach an `onChange` event handler to this input. This handler should update the `inputValue` state whenever the user types, using `setInputValue`.

7.  **Display Input Value**:
    *   Below the input field, display the current value of `inputValue` within a `<p>` tag. The text should clearly indicate "You typed: [current value]".

## Test Cases and Marks Distribution (Total: 10 Marks)

The provided `spec/test.spec.js` file contains Vitest test cases that will evaluate your solution. Each test case contributes to your total score. The marks are distributed as follows:

*   **Counter Functionality (5 marks)**
    *   `should display initial count as 0` (1 mark)
    *   `should increment the count when Increment button is clicked` (2 marks)
    *   `should decrement the count when Decrement button is clicked` (2 marks)
*   **Input Field Functionality (5 marks)**
    *   `should display initial input value as empty` (1 mark)
    *   `should update the input value as user types` (2 marks)
    *   `should correctly reflect further input changes` (2 marks)

**Important Note on Initial State:** When you first load this question, **no test cases are expected to pass.** All tests are designed to fail initially, indicating that you need to implement the required functionality to achieve success. Your goal is to make all tests pass by correctly completing the tasks.

## Success Tips

*   Remember to import `useState` at the top of your `App.jsx` file.
*   Use array destructuring `const [stateVariable, setStateVariable] = useState(initialValue);` to declare your state.
*   Always use the `setStateVariable` function to update state. Direct modification like `count = count + 1;` will *not* trigger a re-render and is a common pitfall.
*   For controlled components, the `onChange` event provides access to `event.target.value`.
*   Verify your changes visually in the preview pane (`vite` command) as you implement them.
*   Read the `TODO` comments carefully; they are strategically placed to guide you.
*   Run the tests frequently (`npm run test:serve`) to get immediate feedback on your progress.

## How to Test Your Solution

1.  **To view your website preview:** Open the terminal and run the command `vite`. This will start a development server and provide a URL to view your application in a browser.
2.  **To run the test cases and check your progress:** Open the terminal and run the command `npm run test:serve`. This will execute the Vitest tests and display a detailed report of which tests are passing or failing. Use this feedback to debug and refine your solution.

## Submission Guidelines

1.  Ensure all `TODO` comments in `src/App.jsx` are completely addressed.
2.  Your solution must use the `useState` hook for all dynamic data management.
3.  All provided test cases in `spec/test.spec.js` must pass successfully.
4.  The application should correctly handle incrementing/decrementing the counter and updating the input field and displayed text in the website preview.