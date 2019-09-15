import React from "react";

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Greeting />
      </div>
    );
  }
}

class Header extends React.Component {
  render() {
    return (
      <header>
        <p>Welcome, {this.props.username}</p>
      </header>
    );
  }
}

class Greeting extends React.Component {
  render() {
    const data = new Date();
    const hours = date.getHours();
    let timeOfDay;
    return <h1></h1>;
  }
}
