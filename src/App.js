import React, { Component } from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import NavBar from "./Components/NavBar";
import MainContainer from "./MainContainer";
import SignUp from "./Components/SignUp";
import LogIn from "./Components/LogIn";

import { BrowserRouter, Route, Switch } from "react-router-dom";
// import { browserHistory } from "react-router";
import { MDBContainer } from "mdbreact";
import QuestionForm from "./Components/QuestionForm";
import EditQuestionForm from "./Components/EditQuestionForm";
import AnswerForm from "./Components/AnswerForm";
import EditAnswerForm from "./Components/EditAnswerForm";
import Answer from "./Components/Answer";
import "./App.css";
import { Card } from "react-bootstrap";
import SingleQuestion from "./Components/SingleQuestion";
import About from "./Components/About";

const url = "http://localhost:3000/questions/";
const urlA = "http://localhost:3000/answers/";
const urlUser = "http://localhost:3000/users/";

class App extends Component {
  state = {
    questions: [],
    question: {},
    answers: [],
    savedQuestions: [],
    searchTerm: "",
    editedQuestion: {},
    editedAnswer: {},
    currentUser: {},
  };

  // componentDidMount() {
  //     Promise.all([fetch(url, {
  //       method: "GET",
  //       headers: {
  //         // Authorization: `Bearer ${localStorage.token}`,
  //       },
  //     }), fetch(urlA, {
  //       method: "GET",
  //       headers: {
  //         // Authorization: `Bearer ${localStorage.token}`,
  //       },
  //     })])

  //     .then(([res1, res2])  => {
  //       return Promise.all([res1.json(), res2.json()])
  //     })
  //     .then(([res1, res2]) => {
  //       this.setState({
  //         questions: res1.map((question) => {
  //           return { ...question, saved: false };
  //         }),
  //         answers: res2.map((answer) => {
  //           return { ...answer, saved: false };
  //         }),
  //       })
  //     });
  // }

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
          questions: allQuestions.map((question) => {
            return { ...question, saved: false };
          }),
        })
      );
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
    // this.props.history.push("/");
    e.target.reset();
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
        })
      );
    e.target.reset();
  };

  // get answer tobe displayed
  // getAnswer = (foundQ) => {
  //   foundQ.answers.filter((ans) =>
  //     // console.log(foundQ);
  //     this.setState({
  //       answer: ans,
  //     })
  //   );
  // };

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
  };

  clickedAnswer = (editedAnswer) => {
    this.setState({ editedAnswer });
  };

  editAnswer = (e) => {
    e.preventDefault();
    let name = e.target.name;
    let value = e.target.value;

    this.setState({
      editedAnswer: { ...this.state.editedAnswer, [name]: value },
    });
  };

  patchEditedAnswer = () => {
    let answer = this.state.editedAnswer;
    // const configObj = {
    //   method: "PATCH",
    //   headers: {
    //     "Content-Type": "application/json",
    //     Accept: "application/json",
    //     Authorization: `Bearer ${localStorage.token}`,
    //   },
    //   body: JSON.stringify(answer),
    // };

    //   fetch(url + answer.id, configObj)
    //   .then((res) => res.json())
    //   .then((updatedA) => {
    //     let answers = this.state.answers.map((a) => {
    //       if (a.id === updatedA.id) 
    //         return updatedA;
    //       else return answer;
    //     });
    //     this.setState({ answers });
    //   });
  }
 

  redirectToHomepage = () => {
    console.log(this.props.history.push("/homepage"));
  };

  render() {
    // if (sessionStorage.reload && history.location.pathname !== "/") {
    //   console.log(this.props);
    //   sessionStorage.reload = "";
    //   history.push("/login");
    // }
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
                    path="/"
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
                        clickedAnswer={this.clickedAnswer}
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
                    render={(routerProps) => (
                      <Answer 
                        {...routerProps}
                        answers={this.state.answers}
                        clickedAnswer={this.clickedAnswer} />
                      )}
                  />
                  <Route
                    path="/edit_answer"
                    render={(routerProps) => (
                      <EditAnswerForm
                        {...routerProps}
                        editedAnswer={this.state.editedAnswer}
                        editAnswer={this.editAnswer}
                        patchEditedAnswer={this.patchEditedAnswer}
                      />
                    )}
                  />
                </MDBContainer>
              </Switch>
              {/* // } */}
            </Card>
            <Footer />
          </div>
        </MDBContainer>
      </BrowserRouter>
    );
  }
}

export default App;
