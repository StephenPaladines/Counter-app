import React from "react";
import Todo from "./Todo";
import todoData from "./todoData";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: todoData
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(id) {
    console.log("Changed", id);
    this.setState(prevState => {
      const updateTodo = prevState.todos.map(todo => {
        if (todo.id === id) todo.checked = !todo.checked;
        return todo;
      });
      return {
        todos: updateTodo
      };
    });
  }

  render() {
    const todoComponent = this.state.todos.map(todo => {
      return <Todo key={todo.id} item={todo} function={this.handleChange} />;
    });

    return <div>{todoComponent}</div>;
  }
}

export default App;
