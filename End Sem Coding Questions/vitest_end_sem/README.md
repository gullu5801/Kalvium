

## Problem Statement

State management is a core concept in React. The `useState` hook allows functional components to manage and update state dynamically.

In this task, you will build a password input component that allows users to toggle the visibility of their password. This is a common feature in many applications to improve usability while maintaining security.

You must implement this functionality using the `useState` hook and ensure the UI updates correctly based on user interaction.

---

## Provided Setup

The project contains:

* A starter `App.jsx` file with TODOs
* A React component structure with input and button
* A test suite using React Testing Library

---

## Tasks

### Task 1: Initialize State

* Create a state variable `isVisible` using `useState`

* Initial value should be `false`

* Create another state variable `password`

* Initial value should be an empty string

---

### Task 2: Toggle Visibility

* Implement a function to toggle `isVisible`
* On button click:

  * If `false` → set to `true`
  * If `true` → set to `false`

---

### Task 3: Update Input Field

* Bind the input field value to the `password` state
* Update state when user types in the input field

---

### Task 4: Dynamic Input Type

* Input type should change based on `isVisible`:

  * `"password"` when hidden
  * `"text"` when visible

---

### Task 5: Dynamic Button Text

* Button text should update based on state:

  * `"Show"` when password is hidden
  * `"Hide"` when password is visible

---

## Instructions

1. Do not modify the test file
2. Do not change `data-testid="password-input"`
3. Do not change component structure
4. Use only functional components
5. Use `useState` for state management
6. Ensure UI updates correctly on every interaction

---

## Test Cases

Your implementation will be validated using automated tests.

### Initial Render

* Input field should be present
* Input type should be `"password"`
* Button should display `"Show"`

### Toggle Behavior

* Clicking button should change input type to `"text"`
* Button text should change to `"Hide"`
* Clicking again should revert changes

### State Handling

* Input value should update as user types
* Input value should NOT reset when toggling visibility

### Edge Cases

* Multiple toggles should work correctly
* Input should remain in the DOM after interactions




---

## Rules and Constraints

* Do not modify test files
* Do not change function/component names
* Do not remove `data-testid` attributes
* Do not hardcode values
* Avoid unnecessary re-renders or logic

---

## Submission Guidelines

1. Edit only `src/App.jsx`
2. Ensure all tests pass
3. Ensure no syntax or runtime errors
4. Write clean and readable code
5. Follow React best practices

