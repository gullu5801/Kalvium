import React, { useState } from 'react';
import './App.css';

function App() {
  // 📝 TODO: Step 1 - Declare state for the counter
  // Initialize a state variable 'count' with value 0
  // const [count, setCount] = ...
  const [count, setCount] = useState(0);


  // 📝 TODO: Step 2 - Create a function to increase the counter
  const handleIncrement = () => {
    // Write logic here to add 1 to count
    setCount(prevCount => prevCount + 1);
  };


  // 📝 TODO: Step 3 - Create a function to decrease the counter
  const handleDecrement = () => {
    // Write logic here to subtract 1 from count
    setCount(prevCount => prevCount - 1);
  };


  return (
    <div className="App">
      
      {/* 
        📝 TODO: Step 4 - Display the Counter
        Uncomment the line below once you have defined the 'count' variable in Step 1.
      */}
      {/* <h1>Counter: {count}</h1> */}
      <h1>Counter: {count}</h1>

      <div className="card">
        {/* 
           📝 TODO: Step 5 - Add Buttons
           1. Create a button with text "+" and onClick={handleIncrement}
           2. Create a button with text "-" and onClick={handleDecrement}
        */}
        
        <button onClick={handleIncrement}>+</button>
        <button onClick={handleDecrement}>-</button>
      
        
      </div>
    </div>
  );
}

export default App;