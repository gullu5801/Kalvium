import React, { useState } from 'react';

/**
 * Password Visibility Toggle - Starter Code
 *
 * Instructions:
 * 1. Complete all TODOs.
 * 2. Do NOT change data-testid or structure.
 * 3. Ensure all test cases pass.
 */

function App() {
  
    /**
   * TODO:
   * - Create state for visibility
   * - Initial value should be false
   */
  const [isVisible, setIsVisible] = useState(false);
  

  /**
   * TODO:
   * - Create state for password input
   * - Initial value should be empty string
   */
  const [password, setPassword] = useState();


  /**
   * TODO:
   * - Toggle visibility state
   * - Use previous state value
   */
  const toggleVisibility = () => {

    // TODO: implement toggle logic
     setIsVisible((prev) => !prev);
  };

  return (
    <div>
      <input
        data-testid="password-input"
        

        /**
         * TODO:
         * - Set type dynamically:
         *   "password" when hidden
         *   "text" when visible
         */
        type={isVisible ? 'text' : 'password'}

        /**
         * TODO:
         * - Bind input value to state
         */
        value={password}

        /**
         * TODO:
         * - Update password state on input change
         */
        onChange={(e) => setPassword(e.target.value)}

        placeholder="Enter password"
      />

      <button onClick={toggleVisibility}>
        {
          /**
           * TODO:
           * - Show "Show" when hidden
           * - Show "Hide" when visible
           */
        }
         {isVisible ? 'Hide' : 'Show'}
      </button>
    </div>
  );
}

export default App;