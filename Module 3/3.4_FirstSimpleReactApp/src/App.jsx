import React from 'react';

function App() {
  // -----------------------------------------------------------------
  //  TODO 1: Create a variable to hold the name
  // 1. Declare a constant variable named 'name'.
  // 2. Assign the value "Your Name" to it.
  //    (Note: The test case specifically looks for the string "Your Name")
  // -----------------------------------------------------------------
  
  // Write your code for TODO 1 below this line:
  const name = "Your Name";


  // -----------------------------------------------------------------
  //  TODO 2: Return JSX with dynamic content
  // 1. Inside the return parenthesis, create an <h1> tag.
  // 2. The text inside should be: "Welcome to React, {name}!"
  // 3. Remember: We use curly braces {} to use the variable inside JSX.
  // -----------------------------------------------------------------

  return (
    <div>
      <h1>Welcome to React, {name}!</h1>
    </div>
  );
}
  

// ✅ Exports the component so it can be used in other files
export default App;