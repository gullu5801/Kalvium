import React, { Component } from "react";

class HigherOrderComponent extends Component {
  constructor() {
    super();
    this.state = {
      userData: [
        { id: "1", name: "Joe", user_type: "Developer", age: 31, years: 11 },
        { id: "2", name: "Hill", user_type: "Designer", age: 26, years: 4 },
        { id: "3", name: "John", user_type: "Teacher", age: 24, years: 2 },
        { id: "4", name: "Sam", user_type: "Entreprenuer", age: 58, years: 25 },
        { id: "5", name: "Jack", user_type: "Designer", age: 43, years: 18 }
      ]
    };
  }

  /* -----------------------------------
     PROGRESSION 2
     List all users
     👉 Use map()
     👉 Each item must be rendered inside <li>
  ----------------------------------- */
  renderItems = () => {
    // TODO: Return all users from state.userData
    // chanege null to this.state.userData
    return this.state.userData.map((user) => (
      <li key={user.id}>{user.name}</li>
    ));

  };

  /* -----------------------------------
     PROGRESSION 3
     Filter users based on user type
     👉 Show only Designers
     👉 Use filter() + map()
  ----------------------------------- */
  renderBasedOnUserType = () => {
    // TODO: Filter designers and return list items
    // chanege null to this.state.userData
    return this.state.userData
    .filter((user) => user.user_type === "Designer")
    .map((user) => <li key={user.id}>{user.name}</li>);
  };

  /* -----------------------------------
     PROGRESSION 4
     Filter users whose names start with letter "J"
     👉 Use filter() + map()
  ----------------------------------- */
  renderBasedOnLetterJ = () => {
    // TODO: Filter names starting with "J"
    // chanege null to this.state.userData
    return this.state.userData
    .filter((user) => user.name.startsWith("J"))
    .map((user) => <li key={user.id}>{user.name}</li>);
  };

  /* -----------------------------------
     PROGRESSION 5
     Filter users based on age
     👉 Age > 28 and <= 50
     👉 Use filter() + map()
  ----------------------------------- */
  renderBasedOnAge = () => {
    // TODO: Filter users based on age condition
     // chanege null to this.state.userData
    return this.state.userData
    .filter((user) => user.age > 28 && user.age <= 50)
    .map((user) => <li key={user.id}>{user.name}</li>);
  };

  /* -----------------------------------
     PROGRESSION 6
     Find total experience of Designers
     👉 Use filter() + reduce()
  ----------------------------------- */
  renderTotalAgeOfDesigners = () => {
    // TODO: Calculate total years of experience for Designers
    // create a variable to calculate total first
    const total = this.state.userData
      .filter((user) => user.user_type === "Designer")
      .reduce((sum, user) => sum + user.years, 0);

    // chanege null to <h3>{total}</h3>;
    return <h3>{total}</h3>;;
  };

  render() {
    return (
      <React.Fragment>
        <h2>All Users</h2>
        <ul>
          {/* TODO: Call renderItems() */}
          {this.renderItems()}
        </ul>

        <h2>Designers</h2>
        <ul>
          {/* TODO: Call renderBasedOnUserType() */}
          {this.renderBasedOnUserType()}
        </ul>

        {/* ⚠️ Do NOT change this text */}
        <h3>Filter all data starting with letter J</h3>
        <ul>
          {/* TODO: Call renderBasedOnLetterJ() */}
          {this.renderBasedOnLetterJ()}
        </ul>

        {/* ⚠️ Do NOT change this text */}
        <h3>Filter all data based on age</h3>
        <ul>
          {/* TODO: Call renderBasedOnAge() */}
          {this.renderBasedOnAge()}
        </ul>

        {/* TODO: Call renderTotalAgeOfDesigners() */}
        {this.renderTotalAgeOfDesigners()}

      </React.Fragment>
    );
  }
}

export default HigherOrderComponent;