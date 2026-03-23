

##  Problem Statement

In this assignment, you will build a simple **Note Keeping App** using **React (Class Components)**.
The goal of this exercise is to understand how **state**, **event handling**, and **real-time UI updates** work in React.

Users should be able to type notes into a textarea, and whatever they type should instantly appear in an output section on the screen.

---

##  Tasks

Complete the following tasks in the provided `App.jsx` file:

1. **Render the Application Heading**

   * Display a heading with the text:
     **`Kalvium Note Keeping App`**

2. **Create a Text Input Area**

   * Render a `<textarea>` element.
   * This textarea will be used to type notes.

3. **Manage State**

   * Store the note text in the component’s state.
   * Initialize the state in the constructor.

4. **Handle User Input**

   * Implement an `onChange` handler for the textarea.
   * Update the state whenever the user types.

5. **Display Output in Real Time**

   * Render an output section with a heading:
     **`Pro Note`**
   * Display the note text from state below this heading.
   * The displayed text should update instantly as the user types.

---

##  Instructions

* You must complete the code **only in `App.jsx`**.
* Use a **class-based React component**.
* Bind event handler methods properly in the constructor.
* Use `this.setState()` to update the state.
* Do **not** control the textarea using the `value` attribute.
* Do **not** modify the existing file structure.
* Styling is already provided using `App.css`. No additional styling is required.
* Run `npm run test:serve` to run the test cases.
* Use `vite` for preview.
---

##  Test Cases

Your solution should satisfy the following test cases:

1. **should render the header with the correct title**

   * Verifies that *"Kalvium Note Keeping App"* is rendered.

2. **should render the input textarea**

   * Checks for the presence of a `<textarea>` element.

3. **should render the output area with a heading**

   * Verifies that the output section contains the heading *"Pro Note"*.

4. **should update the output text in real-time as the user types**

   * Ensures the displayed note updates immediately when the textarea input changes.

---

##  Submission Guidelines

* Edit **only the  `App.jsx` file**.
* Do not rename files or components.
* Ensure there are **no syntax errors or console errors**.
* Make sure all test cases pass before submission.
* Avoid adding extra features not mentioned in the problem statement.


