import React, { Component } from 'react';

// Task 2: Complete the implementation of the SimpleCounterComponent
export default class SimpleCounterComponent extends Component {

  constructor(props) {
    super(props);

    this.state = {
      // Define the required state properties here:
     // Try to think what state can be used in this case.

     //add values
     value: 0,
     toggle: false
    };
  }

  handleToggle = () => {
    // Implement the logic to toggle the 'toggle' state between true and false.

    //cahnge setState
    this.setState((prevState) => ({
      toggle: !prevState.toggle
    }));
  }

  handleCounter = () => {
    // Implement the logic to increment the 'value' only if 'toggle' is true.
    // If 'toggle' is false, the counter should not increment.


    //add logic
    if (this.state.toggle) {
      this.setState((prevState) => ({
        value: prevState.value + 1
      }));
    }
  }

  render() {
    console.log("Simple Component");
    
    return (
      <div>
        {/* UI should include: 
          1. A heading displaying "Simple Component" 
          2. Display the current counter value (from the state 'value')
          3. A button to toggle the 'toggle' state (e.g., "Set Toggle")
          4. A button to increment the counter (should only work if 'toggle' is true) */}

          {/* return Ui */}
          <h1>Simple Component</h1>
        <p>{this.state.value}</p>
        <button onClick={this.handleToggle}>Set Toggle</button>
        <button onClick={this.handleCounter}>Counter</button>
      </div>
    );
  }
}