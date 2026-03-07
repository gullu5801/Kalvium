import { Component } from "react";
import "./App.css";
import Timer from "./Components/Timer.jsx";

class App extends Component {
  state = {
    showTimer: true
  };

  toggleTimer = () => {
    this.setState({ showTimer: !this.state.showTimer });
  };

  render() {
    return (
      <div>
        <button onClick={this.toggleTimer}>Toggle Timer</button>
        {this.state.showTimer ? <Timer /> : null}
      </div>
    );
  }
}

export default App;