import React, { Component } from "react";
import Header from "./Components/Header";
import NavBar from "./Components/NavBar";
import MainContainer from "./MainContainer";
import SignUp from "./Components/SignUp";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { MDBContainer } from "mdbreact";
// import Button from "react-bootstrap/Button";

const url = "http://localhost:3000/questions";
class App extends Component {
  state = {
    questions: [],
  };

  componentDidMount() {
    fetch(url)
      .then((resp) => resp.json())
      .then((allQuestions) =>
        this.setState({
          questions: allQuestions,
        })
      );
  }
  render() {
    return (
      <BrowserRouter>
        <MDBContainer fluid>
          <div className="App">
            <Header />
            <MDBContainer size="sm">{/* <NavBar /> */}</MDBContainer>
            <Switch>
              <Route exact path="/signup" component={SignUp} />
              <MDBContainer size="lg">
                <Route
                  exact
                  path="/homepage"
                  render={() => (
                    <MainContainer questions={this.state.questions} />
                  )}
                />
              </MDBContainer>
            </Switch>
          </div>
        </MDBContainer>
      </BrowserRouter>
    );
  }
}

export default App;
