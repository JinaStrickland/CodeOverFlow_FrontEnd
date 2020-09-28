import React from "react";
import { Button, Card, Nav } from "react-bootstrap/";
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
    // let answers_count = question.answers.length;
    return (
      <div>
        <Card></Card>
        <br />
        <img id="user-image" src={`${this.state.user.image}`}></img>
        <p>{this.state.user.username}</p>
        <div onClick={() => this.props.getQuestion(question)}>
          <h6>
            {" "}
            <Link to="/a_question">{question.title} </Link>
          </h6>
        </div>
        <p>{question.body}</p>
        <Button variant="info" size="sm">
          {question.tag}
        </Button>

        {question.answers.any ? (
          <p>
            Answers:
            {question.answers.length}
          </p>
        ) : null}

        <br />
        <br />
      </div>
    );
  }
}

export default Question;
