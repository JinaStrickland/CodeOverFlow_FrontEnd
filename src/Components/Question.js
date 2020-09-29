import React from "react";
import { Button, Card } from "react-bootstrap/";
import { Link } from "react-router-dom";

let usersUrl = "http://localhost:3000/users/";

class Question extends React.Component {
  state = {
    user: "",
  };

  // componentDidMount() {
  //   fetch(usersUrl)
  //     .then((resp) => resp.json())
  //     .then((users) =>
  //       users.map((foundUser) => {
  //         if (foundUser.id === this.props.question.user_id) {
  //           this.setState({
  //             user: foundUser,
  //           });
  //         }
  //       })
  //     );
  // }

  // clickQuestion = () => {
  //   console.log(this.props.question);
  //   this.props.question.saved = !this.props.question.saved;
  // };

  render() {
    let question = this.props.question;
    let answers_count = question.answers.length;
    return (
      <div>
        <Card></Card>
        <br />
        <img id="user-image" src={`${question.user.image}`}></img>{" "}
        <p id="user-name">{question.user.username}</p> <br /> <br />
        <div onClick={() => this.props.getQuestion(question)}>
          <h6>
            {" "}
            <Link to="/a_question">{question.title} </Link>
          </h6>
        </div>
        <p>{question.body}</p>
        <Button id="q-asked-time" variant="light" size="sm">
          {" "}
          asked on - {question.created_at}
        </Button>
        <p> </p>
        <Button variant="info" size="sm">
          {question.tag}
        </Button>
        <br/>
        <br/>
        {question.answers.length > 0 ? (
          <p>({question.answers.length}) Answers</p>
        ) : null}
        <br />
      </div>
    );
  }
}

export default Question;
