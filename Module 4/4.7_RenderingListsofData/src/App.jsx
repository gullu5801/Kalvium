import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const applyInputValue = () => {
    setCount(parseInt(inputValue, 10) || 0); // Only update if it's a valid number
  };

  return (
    <>
      <div>
        <button onClick={() => setIsVisible(!isVisible)}>
          Toggle Counter Visibility
        </button>
        <input
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Set counter value"
        />
        <button onClick={applyInputValue} className="set-counter-button">
          Set Counter
        </button>
        <button onClick={() => setCount(0)}>Reset Counter</button>
      </div>
      <h1>Vite + React</h1>
      <h2>Vite + h2 + React</h2>
      {isVisible && (
        <div className="card">
          <button
            onClick={() => setCount((count) => count + 1)}
            className="chakra-button"
          >
            count is {count}
          </button>
        </div>
      )}
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
