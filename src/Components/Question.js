import React from "react";
import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";
import SingleQuestion from "./SingleQuestion";
import { Link } from "react-router-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";

let usersUrl = "http://localhost:3000/users/";

class Question extends React.Component {
  state = {
    user: "",
  };

  componentDidMount() {
    fetch(usersUrl)
      .then((resp) => resp.json())
      .then((users) =>
        users.map((foundUser) => {
          if (foundUser.id === this.props.question.user_id) {
            this.setState({
              user: foundUser,
            });
          }
        })
      );
  }

  clickQuestion = () => {
    console.log(this.props.question);
    // this.props.question.clicked = !this.props.question.clicked;
  };

  render() {
    let question = this.props.question;
    // console.log("hello");
    let answers_count = question.answers.length;
    let answers = question.answers.map((answer) => answer.body);
    return (
      <div>
        <p>Username: {this.state.user.username}</p>

        <img id="user-image" src={`${this.state.user.image}`}></img>
        <div onClick={() => this.props.getQuestion(question)}>
          <h6>
            {" "}
            <Link to="/a_question">{question.title} </Link>
          </h6>
        </div>
        <p>{question.body}</p>
        <p>{question.tag}</p>

        <p>
          Answers:
          {answers_count}
        </p>

        <br />
      </div>
    );
  }
}

export default Question;
