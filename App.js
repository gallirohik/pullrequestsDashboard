import React, { Component } from "react";
import Header from "./components/header/header";
import MainContent from "./components/mainContent/mainContent";
import Footer from "./components/footer/footer";
import "./App.css";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <MainContent />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
