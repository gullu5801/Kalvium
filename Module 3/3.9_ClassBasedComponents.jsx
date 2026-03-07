import React, { Component } from 'react';

class MyComponent extends Component {
  constructor(props) {
    super(props); // Required: Tells React to run the parent setup
    this.state = { /* our initial data */ };
  }

  render() {
    // Required: This is where we define what the UI looks like
    return <h1>Hello, {this.props.name}!</h1>;
  }
}



class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  // We use arrow functions to keep 'this' pointing to our component
  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <h2>Counter: {this.state.count}</h2>
        <button onClick={this.increment}>Increase Count</button>
      </div>
    );
  }
}



class Switch extends Component {
  constructor(props) {
    super(props);
    // Initialize the switch as off
    this.state = {
      isOn: false
    };
  }

  // The toggle method flips the current state
  toggle = () => {
    this.setState({ isOn: !this.state.isOn });
  };

  render() {
    // Determine style and text based on the state
    const buttonStyle = {
      backgroundColor: this.state.isOn ? 'yellow' : 'gray',
      padding: '10px 20px',
      cursor: 'pointer'
    };

    return (
      <button style={buttonStyle} onClick={this.toggle}>
        {this.state.isOn ? 'Turn OFF' : 'Turn ON'}
      </button>
    );
  }
}

export default Switch;Counter;MyComponent;