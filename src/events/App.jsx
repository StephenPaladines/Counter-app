import React, { Component } from "react";

const handleClick = () => {
  console.log("Clicked!");
};

class App extends Component {
  render() {
    return (
      <div>
        <img
          onMouseOver={() => console.log("Currently Hovering")}
          src="https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fimg2.cgtrader.com%2Fitems%2F130723%2F3534080155%2Fearth-16k-3d-model-obj-3ds-fbx-blend-dae.png&f=1&nofb=1"
          alt="Earth"
        />
        <button onClick={handleClick}>Click Me!</button>
      </div>
    );
  }
}

export default App;
