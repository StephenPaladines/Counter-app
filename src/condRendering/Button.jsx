import React from "react";

class Button extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoggedIn: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => {
      return { isLoggedIn: !prevState.isLoggedIn };
    });
  }

  render() {
    return (
      <div>
        <h1>You are currently logged {this.state.isLoggedIn ? "in" : "out"}</h1>
        <button onClick={() => this.handleClick()}>
          {!this.state.isLoggedIn ? "Log in" : "Log out"}
        </button>
      </div>
    );
  }
}

export default Button;
