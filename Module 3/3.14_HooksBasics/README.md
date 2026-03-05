README
## Overview
- In this assignment, you will complete a React component by implementing two essential hooks, useState and useEffect, along with their associated event handler functions. 
- This assignment will help you understand how to manage state within a component and how to handle side effects using these React hooks.

## Objective
- The goal is to complete the NewUseState.jsx component, where you will:

- Implement two state variables using useState.
- One state will manage the display of a paragraph of text.
- The other state will manage a "like" counter.

## Create event handler functions.
- One function will toggle the display of the paragraph when a button is clicked.
- Another function will increment the like counter when a button is clicked.
- Use useEffect to handle a side effect.


## Instructions
- Implement State Variables:
- Declare a state variable state initialized with an empty string " ".
- Declare another state variable like initialized with 0.

## Create Event Handlers:
- handleState: This function should toggle the state variable between an empty string " " and the paragraph passed via props (props.para).
- handleLike: This function should increment the like state by 1 each time it is called.
- Implement a useEffect hook
- Once the code is complete, go to the UseContext.jsx and pass the component with props.

## Expected Output
![](https://kq-storage.s3.ap-south-1.amazonaws.com/fewd_v2/fewd4.gif)


## Test Cases
- should hide content when the content button is clicked again

- should increase the like count when the like button is clicked

- should render initial empty state and like count as 0

- should display content when the content button is clicked

Happy Coding ❤️!