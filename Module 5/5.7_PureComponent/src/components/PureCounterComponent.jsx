import React, { PureComponent } from 'react';

// Task 1: Complete the implementation of this PureComponent
export default class PureCounterComponent extends PureComponent {

  constructor(props) {
    super(props);

    this.state = {
      // Define the state properties:
      //Try to think what state would be needed in this case!
      
      //copy values from simple 
      value: 0,
      toggle: false
    };
  }

  handleToggle = () => {
    // Implement the logic to toggle the value of 'toggle' between true and false
    
    //copy from simple
    this.setState((prevState) => ({
      toggle: !prevState.toggle
    }));
  }

  handleCounter = () => {
    // Implement the counter logic:
    // Increment the counter (i.e., 'value') only when 'toggle' is set to true.
    // If 'toggle' is false, the counter should not change.


    //copy from simple
    if (this.state.toggle) {
      this.setState((prevState) => ({
        value: prevState.value + 1
      }));
    }
  }

  render() {
    console.log("Pure Component");
    return (
      <div>
        {/* UI should include: 
          1. A heading displaying 'Pure Component' 
          2. Display the current counter value (from 'value' state)
          3. A button to toggle the 'toggle' state (e.g., "Set Toggle")
          4. A button to increment the counter (only if 'toggle' is true) */}


{/* change only h1 copy rest from simple */}
<h1>Pure Component</h1>
        <p>{this.state.value}</p>
        <button onClick={this.handleToggle}>Set Toggle</button>
        <button onClick={this.handleCounter}>Counter</button>
      </div>
    );
  }
}