import { Component } from "react";

class Timer extends Component {
  componentDidMount() {
    // Start interval when component mounts
    this.intervalID = setInterval(() => {
      console.log("Tick");
    }, 1000);
  }

  componentWillUnmount() {
    // Clear interval when component is removed
    clearInterval(this.intervalID);
    console.log("Stopped");
  }

  render() {
    return <h2>Timer Running...</h2>;
  }
}

export default Timer;