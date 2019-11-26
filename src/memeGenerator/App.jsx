import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import ImageContainer from "./Containers/Image-Container";
import "./css/App.css";

class App extends React.Component {
  render() {
    return (
      <div className={"page-body"}>
        <Header />
        <ImageContainer />
        {/* <Footer /> */}
      </div>
    );
  }
}

export default App;
