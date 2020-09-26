import React from "react";

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
  render() {
    let question = this.props.question;
    // console.log(question);
    let answers_count = question.answers.length;
    let answers = question.answers.map((answer) => answer.body);
    return (
      <div>
        <p>Username: {this.state.user.username}</p>
        <img src={`${this.state.user.image}`}></img>
        <h6>
          {" "}
          <strong>Title: {question.title}</strong>
        </h6>
        <p>Body: {question.body}</p>
        <p>
          <strong>Tag: </strong>
          {question.tag}
        </p>
        <p>
          ({answers_count}) Answers: {answers.join(" - ")}
        </p>
        <br />
      </div>
    );
  }
}

export default Question;
