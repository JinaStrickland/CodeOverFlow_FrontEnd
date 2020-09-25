import React, { Component } from "react";
import Header from "./Components/Header";
import NavBar from "./Components/NavBar";
import MainContainer from "./MainContainer";

class App extends Component {
  state = {};
  render() {
    return (
      <div className="App">
        <Header />
        <NavBar />
        <MainContainer />
        HELLO
      </div>
    );
  }
}

export default App;
