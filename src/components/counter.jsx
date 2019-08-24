import React, { Component } from "react";

// Components are like JS functions (https://reactjs.org/docs/components-and-props.html)
// Accept arbitrary inputs called 'props' and return React elemetns describing what should appear
// Components can be created as JS functions or as a ES6 class (down below)
class Counter extends Component {
  state = {
    count: 0,
    tags: []
  };

  //   constructor() {
  //     super();
  //     this.handleIncrement = this.handleIncrement.bind(this);
  //     console.log("Constructor", this);
  //   }

  // Not good PRACTICE (only shown for learning)
  styles = {
    fontSize: 20,
    fontWeight: "bold"
  };

  renderTags() {
    if (this.state.tags.length === 0) return <p>There are no tags!</p>;
    return (
      <ul>
        {this.state.tags.map(tag => (
          <li key={tag}> {tag} </li>
        ))}
      </ul>
    );
  }

  handleIncrement = product => {
    console.log(product);
    this.setState({ count: this.state.count + 1 });
  };

  //   doHandleIncrement = () => {
  //     this.handleIncrement({ id: 1 });
  //   };

  render() {
    return (
      <React.Fragment>
        {/* Looks only at the first condition and converts the string into Truthy or Falsey */}
        {/* {this.state.tags.length === 0 && <h1>"Please create a new tag!"</h1>} */}
        <span className={this.getBadgeClases()}>{this.formatCount()}</span>
        <button
          {/* onClick={() => this.handleIncrement(product)} */}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        {/* {textSample} */}
        {/* {this.renderTags()} */}
      </React.Fragment>
    );
  }

  getBadgeClases() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    // This in this instant will alwasys point to the Counter class because of the obj.method reference
    // console.log(this, "Testing the 'this' keyword");
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
