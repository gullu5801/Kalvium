import { useState, createContext } from 'react'; // Import createContext
import './App.css';
import UseContext from './components/UseContext';

// 1. Create and EXPORT the context object
export const ToggleTheme = createContext();

function App() {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [inputValue, setInputValue] = useState('');
  
  // State to pass through context
  const [theme, setTheme] = useState(true);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const applyInputValue = () => {
    setCount(parseInt(inputValue, 10) || 0);
  };

  return (
    // 2. Wrap everything in the Provider and pass the value
    <ToggleTheme.Provider value={theme}>
      <div>
        <button onClick={() => setIsVisible(!isVisible)}>
          Toggle Counter Visibility
        </button>
        {/* Added a toggle for the theme so you can see it work */}
        <button onClick={() => setTheme(!theme)}>
          Toggle Theme Context
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
      
      {/* 3. Render the UseContext component here */}
      <UseContext />

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
    </ToggleTheme.Provider>
  );
}

export default App;