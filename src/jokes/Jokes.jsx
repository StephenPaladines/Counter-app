import React from "react";

function Jokes(props) {
  console.log(props);
  return (
    <div>
      {props.joke && <span>Joke: {props.joke} </span>}
      <span style={{ color: !props.joke && "red" }}>
        Punchline: {props.pun}
      </span>
    </div>
  );
}

export default Jokes;
