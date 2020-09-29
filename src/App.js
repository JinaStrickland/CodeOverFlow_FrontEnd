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
import Answer from "./Components/Answer";
import "./App.css";
import { Card } from "react-bootstrap";
import SingleQuestion from "./Components/SingleQuestion";
import About from "./Components/About";

const url = "http://localhost:3000/questions/";
const urlA = "http://localhost:3000/answers/";

class App extends Component {
  state = {
    questions: [],
    question: {},
    savedQuestions: [],
    searchTerm: "",
    editedQuestion: {},
    answer: {},
  };

  componentDidMount() {
    fetch(url, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.token}`,
      },
    })
      .then((resp) => resp.json())
      .then((allQuestions) =>
        this.setState({
          questions: allQuestions.map((question) => {
            return { ...question, saved: false };
          }),
        })
      );
  }

  addQuestion = (e) => {
    e.preventDefault();
    debugger;

    let title = e.target[0].value;
    let body = e.target[1].value;
    let tag = e.target[2].value;

    const configObj = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${localStorage.token}`,
      },
      body: JSON.stringify({
        question: {
          title: title,
          body: body,
          tag: tag,
          user_id: 15, //needs to be current user
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
    let body = e.target[0].value;
    const configObj = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${localStorage.token}`,
      },
      body: JSON.stringify({
        answer: {
          body: body,
          user_id: 1, //needs to be current user
          question_id: 1, //needs to be current question
        },
      }),
    };
    fetch(urlA, configObj)
      .then((res) => res.json())
      .then((newAnswer) =>
        this.setState({
          answer: { ...this.state.answer, newAnswer },
        })
      );
    e.target.reset();
  };

  handleSearch = (e) => {
    this.setState({
      searchTerm: e.target.value,
    });
  };

  deleteQuestion = (id) => {
    let newArray = this.state.questions;

    fetch(url + id, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${localStorage.token}`,
      },
    });
    this.setState({
      questions: newArray.filter((question) => question.id !== id),
    });
  };

  //  edit question

  clickedQuestion = (editedQuestion) => {
    // console.log(editedQuestion);
    this.setState({ editedQuestion });
  };

  editQuestion = (e) => {
    e.preventDefault();
    // debugger;
    let title = e.target[0].value;
    let body = e.target[1].value;
    let tag = e.target[2].value;

    const configObj = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${localStorage.token}`,
      },
      body: JSON.stringify({
        question: {
          title: title,
          body: body,
          tag: tag,
          user_id: this.state.editedQuestion.user.id, //needs to be current user
        },
      }),
    };

    fetch(url, configObj)
      .then((res) => res.json())
      .then(
        console.log

        // (question) =>
        // this.setState({
        //   questions: [...this.state.questions, question],
        // })
      );
    e.target.reset();
  };

  render() {
    // let questions={this.state.questions.filter((q) =>
    //   q.tag.toLowerCase().includes(this.state.searchTerm)
    // )}

    return (
      <BrowserRouter>
        <Route exact path="/homepage" />
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
                        // q.tag.toLowerCase().includes(this.state.searchTerm)
                        q.tag.includes(this.state.searchTerm)
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
                    <SingleQuestion
                      question={this.state.question}
                      deleteQuestion={this.deleteQuestion}
                      clickedQuestion={this.clickedQuestion}
                    />
                  )}
                />
                <Route
                  path="/add_question"
                  render={(routerProps) => (
                    <QuestionForm
                      routerProps
                      addQuestion={this.addQuestion}
                      // editQuestion={this.editQuestion}
                      // clickedQuestion={this.clickedQuestion}
                      // editedQuestion={this.state.editedQuestion}
                    />
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
                <Route path="/answer" render={() => <Answer />} />
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
