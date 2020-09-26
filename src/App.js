import React, { Component } from "react";
import Header from "./Components/Header";
import NavBar from "./Components/NavBar";
import MainContainer from "./MainContainer";
import SignUp from "./Components/SignUp";
import { BrowserRouter, Route, Switch } from "react-router-dom";
// import Button from "react-bootstrap/Button";

class App extends Component {
  state = {};
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header />
          <NavBar />
          <Switch>
            <Route path="/signup" component={SignUp} />
            <MainContainer />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
