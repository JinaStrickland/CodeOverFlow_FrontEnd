import React, { Component } from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import NavBar from "./Components/NavBar";
import MainContainer from "./MainContainer";
import SignUp from "./Components/SignUp";
import LogIn from "./Components/LogIn";

import { Route, Switch, withRouter } from "react-router-dom";

import { MDBContainer } from "mdbreact";
import QuestionForm from "./Components/QuestionForm";
import EditQuestionForm from "./Components/EditQuestionForm";
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
    currentUser: {},
  };

  componentDidMount() {
    fetch(url, {
      method: "GET",
      headers: {
        // Authorization: `Bearer ${localStorage.token}`,
      },
    })
      .then((resp) => resp.json())
      .then((allQuestions) =>
        this.setState({
          questions: allQuestions.reverse(),
          // .map((question) => {
          //   return { ...question, saved: false };
          // }),
        })
      );
    // localStorage.setItem
  }

  // ask question
  addQuestion = (e) => {
    e.preventDefault();
    // debugger;

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
        },
      }),
    };

    fetch(url, configObj)
      .then((res) => res.json())
      .then(
        // console.log

        (newQuestion) =>
          this.setState({
            questions: [...this.state.questions, newQuestion],
          })
      );
    e.target.reset();
    this.props.history.push("/homepage");
  };

  getQuestion = (foundQuestion) => {
    this.setState({
      question: foundQuestion,
    });
  };

  // add answer to a question

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
          question_id: this.state.question.id,
        },
      }),
    };
    fetch(urlA, configObj)
      .then((res) => res.json())
      .then((newAnswer) =>
        this.setState({
          question: { ...this.state.question, newAnswer },
          // questions: [...this.state.questions, newAnswer],
        })
      );
    this.props.history.push("/homepage");

    e.target.reset();
  };

  // search question by tag
  handleSearch = (e) => {
    this.setState({
      searchTerm: e.target.value,
    });
  };

  // delete q
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
    alert("Question has been deleted!");
    this.props.history.push("/homepage");
  };

  //  edit question
  clickedQuestion = (editedQuestion) => {
    this.setState({ editedQuestion });
  };

  editQuestion = (e) => {
    e.preventDefault();
    let name = e.target.name;
    let value = e.target.value;

    this.setState({
      editedQuestion: { ...this.state.editedQuestion, [name]: value },
    });
    // this.props.history.push("/homepage");
  };

  patchEditedQuestion = () => {
    let question = this.state.editedQuestion;
    const configObj = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${localStorage.token}`,
      },
      body: JSON.stringify(question),
    };
    fetch(url + question.id, configObj)
      .then((res) => res.json())
      .then((updatedQ) => {
        let questions = this.state.questions.map((q) => {
          if (q.id === updatedQ.id) return updatedQ;
          else return q;
        });

        this.setState({ questions });
      });
    // this.props.history.push("/homepage");
  };

  // loggedIn = () => {};

  render() {
    return (
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
              <Route
                exact
                path="/"
                render={(routerProps) => <About {...routerProps} />}
              />
              <Route
                exact
                path="/login"
                render={(routerProps) => (
                  <LogIn {...routerProps} currentUser={this.currentUser} />
                )}
              />
              <Route
                exact
                path="/signup"
                render={(routerProps) => <SignUp {...routerProps} />}
              />
              <MDBContainer size="sm">
                <Route path="/about" component={About} />
                <Route
                  exact
                  path="/homepage"
                  render={(routerProps) => (
                    <MainContainer
                      {...routerProps}
                      questions={this.state.questions.filter((q) =>
                        q.tag
                          .toLowerCase()
                          .includes(this.state.searchTerm.toLowerCase())
                      )}
                      getQuestion={this.getQuestion}
                      handleSearch={this.handleSearch}
                    />
                  )}
                />
                <Route
                  exact
                  path="/a_question"
                  render={(routerProps) => (
                    <SingleQuestion
                      {...routerProps}
                      question={this.state.question}
                      deleteQuestion={this.deleteQuestion}
                      clickedQuestion={this.clickedQuestion}
                      getAnswer={this.getAnswer}
                    />
                  )}
                />
                <Route
                  path="/add_question"
                  render={(routerProps) => (
                    <QuestionForm
                      {...routerProps}
                      addQuestion={this.addQuestion}
                    />
                  )}
                />
                <Route
                  path="/edit_question"
                  render={(routerProps) => (
                    <EditQuestionForm
                      {...routerProps}
                      editQuestion={this.editQuestion}
                      editedQuestion={this.state.editedQuestion}
                      patchEditedQuestion={this.patchEditedQuestion}
                    />
                  )}
                />

                <Route
                  path="/add_answer"
                  render={(routerProps) => (
                    <AnswerForm
                      {...routerProps}
                      addAnswer={this.addAnswer}
                      currentQuestion={this.state.question}
                    />
                  )}
                />
                <Route
                  path="/answer"
                  render={(routerProps) => <Answer {...routerProps} />}
                />
              </MDBContainer>
            </Switch>
            {/* // } */}
          </Card>
          <Footer />
        </div>
      </MDBContainer>
    );
  }
}

// export default App;
export default withRouter(App);
