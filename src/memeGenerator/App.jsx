import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import ImageContainer from "../memeGenerator/Container/Image-Container";
import "./css/App.css";

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <ImageContainer />
        {/* <Footer /> */}
      </div>
    );
  }
}

export default App;
