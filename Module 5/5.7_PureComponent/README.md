![Logo-nav](https://s3.ap-south-1.amazonaws.com/kalvi-education.github.io/front-end-web-development/Kalvium-Logo.png)

# React Pure and Simple Component Lab

## Learning Goals:
This lab is designed to help you understand the concept of `Pure Components` in React and compare their performance with regular `Component` class components.

You will implement a simple counter functionality in two ways:
- Using a class that extends the `Component` class.
- Using a class that extends the `PureComponent` class.

## Introduction:

You will be creating two components (the files are already created for you):
1. **SimpleCounterComponent** – Extends `Component`.
2. **PureCounterComponent** – Extends `PureComponent`.

In both components, the counter will increment only when a `toggle` state is set to `true`. The `toggle` state can be switched by clicking a "Set Toggle" button. Once the `toggle` is `true`, you can increment the counter by clicking an "Increment" button.

## Tasks:

### Task 1: Implement `SimpleCounterComponent.jsx`
1. Inside the `components` folder, locate or create the file `SimpleCounterComponent.jsx`.
2. In this component, you will:
   - Extend the `Component` class.
   - Define two states: 
     - `toggle` (boolean, initially `false`).
     - `value` (number, initially `0`).
   - Implement the `handleToggle` method, which toggles the value of `toggle` between `true` and `false`.
   - Implement the `handleCounter` method, which increments the counter (`value`) only if `toggle` is `true`.
3. Add a `console.log("This is Simple Component")` in the `render()` method to track re-renders in the console.
4. Structure your JSX to include:
   - A heading displaying "Simple Component".
   - The current counter value.
   - A "Set Toggle" button to toggle the `toggle` state.
   - A "Counter" button to increment the counter when `toggle` is `true`.

### Task 2: Implement `PureCounterComponent.jsx`
1. Inside the `components` folder, locate or create the file `PureCounterComponent.jsx`.
2. In this component, you will:
   - Extend the `PureComponent` class.
   - Define two states:
     - `toggle` (boolean, initially `false`).
     - `value` (number, initially `0`).
   - Implement the `handleToggle` method, which toggles the value of `toggle` between `true` and `false`.
   - Implement the `handleCounter` method, which increments the counter (`value`) only if `toggle` is `true`.
3. Add a `console.log("This is Pure Component")` in the `render()` method to track re-renders in the console.
4. Structure your JSX to include:
   - A heading displaying "Pure Component".
   - The current counter value.
   - A "Set Toggle" button to toggle the `toggle` state.
   - A "Counter" button to increment the counter when `toggle` is `true`.

### Task 3: Render Both Components in `App.jsx`
1. In `App.jsx`, import both `SimpleCounterComponent` and `PureCounterComponent`.
2. Render both components inside the `App` component so that you can view and interact with them side by side.
   
**Question**: Open your browser console, leave the toggle as false, and click the Counter button multiple times. Which component performs better? Why do you think that is the case?

## Bonus Task (Optional):
1. Style the components by adding CSS to make them look better.
2. You can use the existing `App.css` file or add inline styles to each component.

## Final Submission:
* After completing all tasks, ensure both components are rendered correctly.
* Run **`npm run test:serve`** in your terminal to verify that your logic passes all automated test cases.
* Once your tests pass, submit your assignment!

---

Happy Coding! 🚀