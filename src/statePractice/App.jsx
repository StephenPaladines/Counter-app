import React, { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "Billy",
      age: "23"
    };
  }

  render() {
    return (
      <div>
        <h1>{this.state.name}</h1>
        <h3>{this.state.age}</h3>
      </div>
    );
  }
}

export default App;
