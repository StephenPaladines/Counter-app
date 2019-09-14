import React from "react";
import Jokes from "./Jokes";

function Form() {
  return (
    <div className="Form">
      <h3>List of Jokes</h3>
      <Jokes
        jokes={{ joke: "Why is Chris so ugly?", pun: "Because he's a PUG!" }}
      />
      <Jokes jokes={{ joke: "", pun: "Because he's a PUG!" }} />
      <Jokes
        jokes={{ joke: "Why is Chris so ugly?", pun: "Because he's a PUG!" }}
      />
      <Jokes
        jokes={{ joke: "Why is Chris so ugly?", pun: "Because he's a PUG!" }}
      />
      <Jokes
        jokes={{ joke: "Why is Chris so ugly?", pun: "Because he's a PUG!" }}
      />
    </div>
  );
}

export default Form;
