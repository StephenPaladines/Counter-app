import React from "react";

function Jokes(props) {
  return (
    <div>
      {props.jokes.joke ? <span>Joke: {props.jokes.joke} </span> : null}
      <span> Punchline: {props.jokes.pun}</span>
    </div>
  );
}

export default Jokes;
