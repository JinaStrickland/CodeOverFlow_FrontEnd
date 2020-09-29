import React from "react";
import { Button, Nav } from "react-bootstrap/";
import { Link } from "react-router-dom";

let usersUrl = "http://localhost:3000/users/";

class SingleQuestion extends React.Component {
  // state = {
  //   user: "",
  // };

  render() {
    let question = this.props.question;
    let answers_count = question.answers.length;
    let answers = question.answers.map((answer) => <li>{answer.body}</li>);
    return (
      <div id="single-question">
        {/* <p>Username: {this.state.user.username}</p> */}
        {/* <Nav.Item>
          <Nav.Link href="/addquestion">edit</Nav.Link>
        </Nav.Item> */}
        <Button variant="danger" size="sm">
          Delete
        </Button>
        <br />
        <br />
        <h6>
          {" "}
          <strong>Title: {question.title}</strong>
        </h6>
        <p>Body: {question.body}</p>
        <p>
          <strong>Tag: </strong>
          {question.tag}
        </p>

        {answers_count > 0 ? <p>Answers: {answers}</p> : null}
        <Link to="/add_answer">
          {" "}
          <Button id="add-answer" variant="primary" size="sm">
            Add answer
          </Button>
        </Link>

        <br />
        <br />
      </div>
    );
  }
}

export default SingleQuestion;
