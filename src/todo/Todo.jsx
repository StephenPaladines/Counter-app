import React from "react";

function Todo(props) {
  return (
    <div>
      <input type="checkbox" checked={props.checked} /> <p>{props.task}</p>{" "}
      <br />
    </div>
  );
}

export default Todo;
