import React, { useState } from 'react'; // TODO: Ensure useState is imported
import './App.css';

function App() {
  // TODO: Declare a state variable named 'count' initialized to 0 using useState
  // const [count, setCount] = useState(0); uncoment tis
  const [count, setCount] = useState(0);

  // TODO: Declare a state variable named 'inputValue' initialized to an empty string using useState
  // const [inputValue, setInputValue] = useState(''); uncoment tis
  const [inputValue, setInputValue] = useState('');

  // TODO: Create a function to handle incrementing the count
  const handleIncrement = () => {
    setCount(count + 1);
  };

  // TODO: Create a function to handle decrementing the count
  const handleDecrement = () => {
    setCount(count - 1);
  };

  // TODO: Create a function to handle input changes
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div className="App">
      <h1>My State Manager</h1>

      {/* Counter Section */}
      <div>
        {/* TODO: Display the current 'count' value here */}
        {/* add {count} */}
        <h2>Counter: {count}</h2> 
        {/* TODO: Add an Increment button with an onClick handler */}
        {/* <button>Increment</button> insted of this add eventHandlers */}
        <button onClick={handleIncrement}>Increment</button>
        {/* TODO: Add a Decrement button with an onClick handler */}
        {/* <button>Decrement</button> insted of this add eventHandlers */}
        <button onClick={handleDecrement}>Decrement</button>
      </div>

      <hr />

      {/* Input Section */}
      <div>
        {/* TODO: Create an input field, bind its value to 'inputValue' and handle onChange */}
        <input 
          type="text" 
          placeholder="Type something..." 
          // value={inputValue} 
          // onChange={handleInputChange} 
          value={inputValue} 
          onChange={handleInputChange} 
        />
        {/* TODO: Display the current 'inputValue' here */}
        {/* add {inputValue} */}
        <p>You typed: {inputValue}</p>
      </div>
    </div>
  );
}

export default App;