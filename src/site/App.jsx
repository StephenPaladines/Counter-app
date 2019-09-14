import React from "react";
import MainComponent from "./MainComponent";
import Header from "./Header";
import Footer from "./Footer";
import BreadCrumbs from "./BreadCrumbs";

function App() {
  return (
    <div>
      <Header />
      <BreadCrumbs />
      <MainComponent />
      <Footer />
    </div>
  );
}

export default App;
