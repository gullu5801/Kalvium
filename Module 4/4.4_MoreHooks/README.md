## Learning Goals
In this exercise, the goal is to learn other types of hooks:
- useReducer
- useRef

## Instructions
In this lab we will try to work with other hooks like useReducer and useRef in react.

## Task 1 | useReducer:
Your friend wants you to create a system where he can list down the things that he perform on a daily basis. The only feature that your friend want out of the system is that, once you add task -> it should get a toggle button -> which can replace his task with some other text, so that noone else can read that particular task.

For eg: If he added: Morning Walk, and he clicked on the toggle button --> The content is hidden -> this text should replace Morning Walk.

Here is gif, to get a better understanding:
![](https://kq-storage.s3.ap-south-1.amazonaws.com/fewd_v2/fewd5.gif)

## NOTE: The above gif is just for your reference, in terms of styling. You can style the above application, in any you want. The only thing that you should keep in mind, is that --> the functionality must be achieved.

Also, there are many ways to solve this problem, but for now, it will be expected that you solve this problem using useReducer hook. It's not that you cannot use other hooks, YOU CAN USE, other hooks as well, but you should complete this task by using useReducer

## Task 2 | useRef:
The issue, with the above application is that, if we add too many items to our list, then after some time, we need to scroll back to the top to write something and add that to the list. Your friend is getting frustrated because of this. So, he asked you to fix it. Your task is to create a button - at the bottom of all the items, which when clicked -> brings the focus of the cursor back to the input box - as shown below.
![](https://kq-storage.s3.ap-south-1.amazonaws.com/fewd_v2/fewd6.gif)


To achieve the above functionality, you need to use useRef.


## src/components/NewPost.jsx
  //  Task 1:- Complete this and implement the dispatch call to toggle post visibility
  // Task 2 :-Complete this code to  implement this to handle adding a new post
  // Task 3 :- Complete the code to  implement this to handle toggling post visibility
  // Task 4 :- Complete the code to  initialize the useReducer hook and initialise the useRef hook(inputRef)
  //Task 5 :-Complete the code to  implement this to dispatch the action to add a post
  // Task 6 :- Add focus to the input
  // Task 7:- complete the code to map over posts and display them

## Test Cases
- should add a new post using useReducer
- should focus the input field using useRef


Happy Coding Kalvium ❤️!