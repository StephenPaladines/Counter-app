import React from "react";
import Jokes from "./Jokes";
import jokes from "./data";

function Form() {
  const jokesComponent = jokes.map(jokes => {
    return <Jokes key={jokes.id} joke={jokes.joke} pun={jokes.punchLine} />;
  });

  return (
    <div className="Form">
      <h3>List of Jokes</h3>
      {jokesComponent}
    </div>
  );
}

export default Form;
