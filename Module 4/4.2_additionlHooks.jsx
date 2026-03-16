// Basic Syntax 

const [state, dispatch] = useReducer(reducer, initialState);

// state: The current data.

// dispatch: The function you call to "send" an action.

// reducer: A function that determines how the state changes based on the action.


// Step A: Define the Initial State and Reducer

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    case 'reset':
      return initialState;
    default:
      throw new Error('Unknown action type');
  }
}


//Step B: Use it in a Component

import React, { useReducer } from 'react';

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h1>Count: {state.count}</h1>
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
      <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
    </div>
  );
}

