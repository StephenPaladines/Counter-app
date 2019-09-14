import React from "react";
import NewForm from "./Form";

function MyInfo() {
  return (
    <div className="myInfo">
      <h1>Name: Stephen Paladines</h1>
      <p>
        Hello, my name is Stephen Paladines and I am a CS major from The
        University Of Florida.
      </p>
      <NewForm />
      <h3>Top Vacation Spots</h3>
      <ol>
        <li>Peru</li>
        <li>Italy</li>
        <li>Alaska</li>
      </ol>
    </div>
  );
}

export default MyInfo;
