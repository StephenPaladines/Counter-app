import React from "react";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      output: {},
      loading: true
    };
  }

  componentDidMount() {
    fetch("https://swapi.co/api/people/1/") // Promises to return data
      .then(response => response.json()) // Promises to return result as JSON (Chaining)
      .then(data => {
        // Json output from promise
        console.log(data);
        this.setState({
          output: data,
          loading: false
        });
      });
  }

  render() {
    const text = this.state.loading
      ? "Loading...."
      : "Hello, " + this.state.output.name;

    return (
      <div>
        <h1>{text}</h1>
      </div>
    );
  }
}

export default App;
