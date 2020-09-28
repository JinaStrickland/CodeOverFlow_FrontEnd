import React from "react";
import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";

let usersUrl = "http://localhost:3000/users/";

class SingleQuestion extends React.Component {
  // state = {
  //   user: "",
  // };

  render() {
    let question = this.props.question;
    // console.log(question);
    let answers_count = question.answers.length;
    let answers = question.answers.map((answer) => <li>{answer.body}</li>);
    // console.log("Hello");
    return (
      <div id="single-question">
        {/* <p>Username: {this.state.user.username}</p> */}
        {/* <Nav.Item>
          <Nav.Link href="/addquestion">edit</Nav.Link>
        </Nav.Item> */}
        <h6>
          {" "}
          <strong>Title: {question.title}</strong>
        </h6>
        <p>Body: {question.body}</p>
        <p>
          <strong>Tag: </strong>
          {question.tag}
        </p>
        <Button variant="danger">Delete</Button>
        {answers_count > 0 ? <p>Answers: {answers}</p> : null}
        <br />
      </div>
    );
  }
}

export default SingleQuestion;
