import React from "react";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      age: "",
      gender: "",
      location: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    console.log(event.target);
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  render() {
    return (
      <form action="">
        <input
          type="text"
          name="firstName"
          placeholder="First name"
          onChange={this.handleChange}
          value={this.state.firstName}
        />
        <br />
        <input
          type="text"
          name="lastName"
          placeholder="Last name"
          onChange={this.handleChange}
          value={this.state.lastName}
        />
        <br />
        <input
          type="text"
          name="age"
          placeholder="Age"
          onChange={this.handleChange}
          value={this.state.age}
        />
        <br />
        <input
          type="radio"
          name="gender"
          placeholder="Male"
          onChange={this.handleChange}
          value="Male"
        />
        Male
        <input
          type="radio"
          name="gender"
          placeholder="Female"
          onChange={this.handleChange}
          value="Female"
        />
        Female
        <br />
        <select name="location" id="" onChange={this.handleChange}>
          <option value="Hawaii">Hawaii</option>
          <option value="Florida">Florida</option>
          <option value="New York">New York</option>
        </select>
        <br />
        <button>Submit</button>
        <div>
          <h3>First name:{this.state.firstName}</h3>
          <h3>Last name:{this.state.lastName}</h3>
          <h3>Age: {this.state.age}</h3>
          <h3>Gender: {this.state.gender}</h3>
          <h3>Location: {this.state.location}</h3>
        </div>
        {/* <textarea name="" id="" cols="30" rows="10" value="Random" /> */}
      </form>
    );
  }
}

export default App;
