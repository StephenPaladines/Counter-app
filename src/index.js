import React from "react"; // Enables JSX to work
import ReactDOM from "react-dom";
// import App from "./events/App2";
import App from "./condRendering/App";
import MyInfo from "./components/MyInfo";
import Counters from "./components/counter";
import * as serviceWorker from "./serviceWorker";
import "bootstrap/dist/css/bootstrap.css";
import "./index.css";

function MyApp() {
  return (
    <ul>
      <li>Stop</li>
      <li>Right</li>
      <li>There</li>
    </ul>
  );
}

// JSX to interpret HTML
ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
