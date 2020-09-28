import React from "react";
import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";
import SingleQuestion from "./SingleQuestion";

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
    // console.log(this.props.question.clicked)
    this.props.question.clicked = !this.props.question.clicked
  }

  render() {
    let question = this.props.question;
    // console.log("hello");
    let answers_count = question.answers.length;
    let answers = question.answers.map((answer) => answer.body);
    return (
      <div >
        {/* <Link to="/question" />  */}
        { question.clicked ? 
        <SingleQuestion question={this.props.question} /> : null }
        <p>Username: {this.state.user.username}</p>

        <img src={`${this.state.user.image}`}></img>
        <div onClick={this.clickQuestion}>
        <h6>
          {" "}
        <strong>{question.title} </strong>
        </h6>
        </div>
        <p>{question.body}</p>
        <p>
          {question.tag}
        </p>
 
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
