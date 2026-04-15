import React, { useState, useEffect } from "react";
// The Redux store and action creators are already imported for you
import store from "./store"; 
import { incrementNumber, decrementNumber } from "./Actions";

const Counter = () => {
  // ------------------------------------------------------------------
  // TASK 1: Create State
  // TODO: Create a state variable called 'count' using the useState hook.
  // Hint: Initialize it with `store.getState().count` so it correctly 
  // grabs the starting value from the Redux store!
  // ------------------------------------------------------------------

  //declare the variables
  const [count, setCount] = useState(store.getState().count);
  

  // ------------------------------------------------------------------
  // TASK 2: Subscribe to the Redux Store
  // ------------------------------------------------------------------
  useEffect(() => {
    // TODO: Use store.subscribe() to listen for changes in the global state.
    // Inside the callback function, update your local 'count' state 
    // using store.getState().count
    
    // CRITICAL TODO: Return a cleanup function that unsubscribes from the 
    // store when the component unmounts to prevent memory leaks!

    //use store.suscribe
    const unsubscribe = store.subscribe(() => {
      setCount(store.getState().count);
    });

    return () => {
      //call unsubscribe
      unsubscribe();
    };
  }, []); 


  return (
    <div className="counter-container">
      {/* ------------------------------------------------------------------
          TASK 3: Display the Counter Value
          TODO: Display your dynamic 'count' state variable inside the 
          empty <h3> tag below.
      ------------------------------------------------------------------ */}
      
      {/* call count */}
      <h3>{count}</h3>

      {/* ------------------------------------------------------------------
          TASK 4: Create Buttons
          TODO: Add 'onClick' event handlers to the Like and Unlike buttons. 
          Use store.dispatch() to send the correct actions to the Redux store!
      ------------------------------------------------------------------ */}
      {/* <button>Like</button>
      <button>Unlike</button> */}

      {/* add eventlistners */}
      <button onClick={() => store.dispatch(incrementNumber())}>
        Like
      </button>

      <button onClick={() => store.dispatch(decrementNumber())}>
        Unlike
      </button>


    </div>
  );
};

export default Counter;