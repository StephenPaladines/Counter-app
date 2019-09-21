import React from "react";

function Todo(props) {
  return (
    <div>
      <input
        type="checkbox"
        checked={props.item.checked}
        onChange={() => props.function(props.item.id)}
      />{" "}
      <p>{props.item.task}</p>
      <br />
    </div>
  );
}

export default Todo;
