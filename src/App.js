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
import { Button, Card } from "react-bootstrap";
import SingleQuestion from "./Components/SingleQuestion";

const url = "http://localhost:3000/questions/";

class App extends Component {
  state = {
    questions: [],
    question: {},
    searchTerm: "",
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
          questions: allQuestions.map((question) => {
            return { ...question, clicked: false };
          }),
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

  getQuestion = (foundQuestion) => {
    this.setState({
      question: foundQuestion,
    });
  };

  addAnswer = (e) => {
    e.preventDefault();
    // debugger;

    let body = e.target[0].value;

    // console.log(e.target);
  };

  handleSearch = (e) => {
    this.setState({
      searchTerm: e.target.value,
    });
  };

  render() {
    return (
      <BrowserRouter>
        <MDBContainer fluid>
          <div className="App">
            <Header />
            <div id="nav-bar">
              <MDBContainer size="sm" id="nav-bar">
                <NavBar handleSearch={this.handleSearch} />
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
                    <MainContainer
                      // questions={this.state.questions}
                      questions={this.state.questions.filter((q) =>
                        q.tag.toLowerCase().includes(this.state.searchTerm)
                      )}
                      getQuestion={this.getQuestion}
                      handleSearch={this.handleSearch}
                    />
                  )}
                />

                <Route
                  exact
                  path="/a_question"
                  render={() => (
                    <SingleQuestion question={this.state.question} />
                  )}
                />
                <Route
                  path="/add_question"
                  render={(routerProps) => (
                    <QuestionForm routerProps addQuestion={this.addQuestion} />
                  )}
                />

                <Route
                  path="/add_answer"
                  render={() => (
                    <AnswerForm
                      addAnswer={this.addAnswer}
                      // question={this.state.question}
                    />
                  )}
                />
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
