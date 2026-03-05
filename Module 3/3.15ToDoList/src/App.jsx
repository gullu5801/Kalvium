import { Component } from "react";
import DisplayListOfItems from "./components/DisplayListOfItems";
import "./App.css"

export default class App extends Component {
  constructor(props) {
    super(props);

    // Uncomment and complete the state initialization
    // this.state = {
    //   listOfItems: [],
    //   item: {
    //     key: '',
    //     itemDescription: '',
    //   }
    // };
    this.state = {
      listOfItems: [],
      item: {
        key: '',
        itemDescription: '',
      }
    };

    // Bind event handler methods
    // this.handleSubmit = this.handleSubmit.bind(this);
    // this.handleInput = this.handleInput.bind(this);
    // this.handleDelete = this.handleDelete.bind(this);
    // this.handleUpdate = this.handleUpdate.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
  }

  // Uncomment and complete the handleInput method
  // handleInput = (event) => {
  //   // Implement the logic to update the input state
  // };
  handleInput = (event) => {
    this.setState({
      item: {
        itemDescription: event.target.value,
        key: Date.now() // Use timestamp as a simple unique key
      }
    });
  };

  // Uncomment and complete the handleSubmit method
  // handleSubmit = (e) => {
  //   e.preventDefault();
  //   // Implement the logic to add a new item to the list
  // };
  handleSubmit = (e) => {
    e.preventDefault();
    const newItem = this.state.item;

    // Only add if the input isn't empty
    if (newItem.itemDescription !== "") {
      this.setState({
        listOfItems: [...this.state.listOfItems, newItem],
        item: { key: '', itemDescription: '' } // Reset input field
      });
    }
  };

  // Uncomment and complete the handleDelete method
  // handleDelete = (key) => {
  //   // Implement the logic to delete an item from the list
  // };
  handleDelete = (key) => {
    const filteredList = this.state.listOfItems.filter(item => item.key !== key);
    this.setState({
      listOfItems: filteredList
    });
  };

  // Uncomment and complete the handleUpdate method
  // handleUpdate = (newDescription, key) => {
  //   // Implement the logic to update an existing item in the list
  // };
  handleUpdate = (newDescription, key) => {
    const updatedList = this.state.listOfItems.map(item => {
      if (item.key === key) {
        return { ...item, itemDescription: newDescription };
      }
      return item;
    });

    this.setState({
      listOfItems: updatedList
    });
  };

  render() {
    return (
      <div className="main">
        <header>
          {/* Uncomment and complete the form and input fields */}
          {/* <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              placeholder="Type here"
              value={this.state.item.itemDescription}
              onChange={this.handleInput}
            />
            <button type="submit">Add Item</button>
          </form> */}

          {/* Uncomment and complete the DisplayListOfItems component rendering */}
          {/* <DisplayListOfItems
            listOfItems={this.state.listOfItems}
            handleDelete={this.handleDelete}
            handleUpdate={this.handleUpdate}
          /> */}

<form onSubmit={this.handleSubmit}>
            <input
              type="text"
              placeholder="Type here"
              value={this.state.item.itemDescription}
              onChange={this.handleInput}
            />
            <button type="submit">Add Item</button>
          </form>

          <DisplayListOfItems
            listOfItems={this.state.listOfItems}
            handleDelete={this.handleDelete}
            handleUpdate={this.handleUpdate}
          />

        </header>
      </div>
    );
  }
}
