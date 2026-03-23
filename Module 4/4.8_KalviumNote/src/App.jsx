import { Component } from "react";
import "./App.css";

export default class App extends Component {
  constructor(props) {
    super(props);

    // TODO 1:
    // Initialize state to store the note text
    //alerdy done
    this.state = {
      value: ""
    };

    // TODO 2:
    // Bind the handleChange method
    //allredy done
    this.hanldeChange = this.hanldeChange.bind(this);
  }

  hanldeChange(event) {
    // TODO 3:
    // Update the state with the textarea value
    // add this.setState
    this.setState({
      value: event.target.value
    });
  }

  render() {
    return (
      <div>
        {/* TODO 4:
            Render a heading with text:
            "Kalvium Note Keeping App"
        */}
         <h1>Kalvium Note Keeping App</h1>

        {/* TODO 5:
            Render a textarea
            - It should call hanldeChange on change
            - DO NOT bind value here
        */}
         <textarea onChange={this.hanldeChange}></textarea>

        <div>
          {/* TODO 6:
              Render a heading with text:
              "Pro Note"
          */}
           <h2>Pro Note</h2>

          {/* TODO 7:
              Display the note text from state here
              so it updates in real time
          */}
         <p>{this.state.value}</p>
         
          
        </div>
      </div>
    );
  }
}