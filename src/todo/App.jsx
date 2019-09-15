import React from "react";
import Todo from "./Todo";
import todoData from "./todoData";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: todoData
    };
  }

  render() {
    const todoComponent = this.state.todos.map(todo => {
      return <Todo key={todo.id} task={todo.task} />;
    });

    return <div>{todoComponent}</div>;
  }
}

export default App;

// Stopped at 2:21:00
