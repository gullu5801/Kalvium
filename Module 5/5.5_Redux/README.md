README
# Counter Component Assignment

## Overview

In this assignment, your task is to complete the functionality of a simple counter component built with **React** and **Redux**. The Redux store and action creators have already been provided. You are required to add the missing functionality as outlined in the tasks below.

## Task Instructions

### Task 1: Create State

- Create a piece of state using the `useState` hook called `count`. This state will hold the current counter value.

### Task 2: Subscribe to the Redux Store

- Use the `useEffect` hook to subscribe to the Redux store. Update the `count` state whenever the store's state changes.
- Make sure to **unsubscribe** from the store when the component unmounts to prevent memory leaks.

### Task 3: Display the Counter Value

- Display the current value of `count` inside an `<h3>` tag. This will show the counter's current value on the page.

### Task 4: Create Buttons

- Add two buttons to the component:
  - **Like Button**: This button should dispatch the `incrementNumber` action to increment the counter.
  - **Unlike Button**: This button should dispatch the `decrementNumber` action to decrement the counter.


