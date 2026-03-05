## Assignment: Build a Simple Welcome Message App

**Learning Goals:**
- Understand how to create and use React components.
- Get familiar with JSX syntax to render dynamic content.
- Learn how to integrate variables inside JSX to render content dynamically.
- Practice working with the provided Vite React template.

**Overview:**
- In this assignment, you'll build a simple Welcome Message App using React. 
- The app will display a personalized greeting message. 
- You’ll start by working with JSX to render content inside a component and use variables to customize the message. 
- The goal is to understand how React components work and how JSX allows you to inject dynamic data.

**Steps to Implement:**
- Open the src/App.jsx file:
- Since the Vite React template is already provided, navigate to the src folder of your project and open the App.jsx file.
- Inside the App.jsx file, create a React component named App that renders a message with your name. Use JSX to display the message "Welcome to React,[Your Name]!".
- Important: The name value should be a variable that you can modify to change the message dynamically.

**Use JSX to Render Content:**
- Inside the App component’s return statement, use JSX syntax to display the message. JSX is a combination of JavaScript and HTML-like code, which allows you to embed JavaScript values inside curly braces {}.
- Add Your Name Dynamically:
- Create a const name = 'Your Name'; variable at the top of your component.
- Use the {name} variable inside JSX to display the message dynamically.


## Expected Outcome:
- The page should display the message "Welcome to React,Your Name!" in an <h1> tag.
- When you change the value of name, the message should automatically update to reflect the new value.

## Test Cases:
- The app should render the message "Welcome to React, Your Name!" without any errors.
- If you update the name variable in the App.jsx file, the message should change to reflect the new name.

## Running Test cases
Use `npm run test:serve` to run the test cases.