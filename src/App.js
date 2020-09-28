import React, { Component } from "react";
import Header from "./Components/Header";
import NavBar from "./Components/NavBar";
import MainContainer from "./MainContainer";
import SignUp from "./Components/SignUp";
import LogIn from "./Components/LogIn";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { MDBContainer } from "mdbreact";
import QuestionForm from "./Components/QuestionForm";
import AnswerForm from "./Components/AnswerForm";
import "./App.css";
import { Card } from "react-bootstrap";

const url = "http://localhost:3000/questions/";

class App extends Component {
  state = {
    questions: [],
  };

  componentDidMount() {
    fetch(
      url
      //   , {
      //   method: "GET",
      //   headers: {
      //     Authorization: `Bearer ${localStorage.token}`,
      //   },
      // }
    )
      .then((resp) => resp.json())
      .then((allQuestions) =>
        this.setState({
          questions: allQuestions.map(question => {
            return {...question, clicked: false}
          })
        })
      );
  }

  addQuestion = (e) => {
    e.preventDefault();

    let title = e.target[0].value;
    let body = e.target[1].value;
    let tag = e.target[2].value;

    const configObj = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        // Authorization: `Bearer ${localStorage.token}`,
      },
      body: JSON.stringify({
        question: {
          title: title,
          body: body,
          tag: tag,
          user_id: 1, //needs to be current user
        },
      }),
    };

    fetch(url, configObj)
      .then((res) => res.json())
      .then((question) =>
        this.setState({
          questions: [...this.state.questions, question],
        })
      );
    e.target.reset();
  };

  render() {
    return (
      <BrowserRouter>
        <MDBContainer fluid>
          <div className="App">
            <Header />
            <div id="nav-bar">
              <MDBContainer size="sm" id="nav-bar">
                <NavBar />
              </MDBContainer>
            </div>
            <Card>
              <Switch>
                <Route exact path="/login" component={LogIn} />
                <Route exact path="/signup" component={SignUp} />
                <Route
                  exact
                  path="/homepage"
                  render={() => (
                    <MainContainer questions={this.state.questions} />
                  )}
                />
                <Switch>
                  <Route
                    path="/addquestion"
                    component={QuestionForm}
                    render={() => (
                      <QuestionForm addQuestion={this.addQuestion} />
                    )}
                  />
                </Switch>
                <Switch>
                  <Route
                    path="/addanswer"
                    component={AnswerForm}
                    render={() => <AnswerForm addAnswer={this.addAnswer} />}
                  />
                </Switch>
              </Switch>
            </Card>
            <div></div>
          </div>
        </MDBContainer>
      </BrowserRouter>
    );
  }
}

export default App;
