import React from "react";
// import React from "react";

// const Question = (props) => {
//   let usersUrl = "http://localhost:3000/users/";
//   let question = props.question;
//   let user_id = props.question.user_id;
//   let answers_count = question.answers.length;
//   let answers = question.answers.map((answer) => answer.body);
//   // console.log(user);
//   // console.log(answers);

//   fetch(usersUrl)
//     .then((resp) => resp.json())
//     .then((user) => {
//       if (user.id === user_id) {
//         username = user.username;
//       }
//     });

//   return (
//     <div>
//       <h6>
//         {" "}
//         <strong>{question.title}</strong>
//       </h6>
//       <p>Body: {question.body}</p>
//       <p>
//         <strong>Tag: </strong>
//         {question.tag}
//       </p>
//       <p>{username}</p>
//       <p>
//         ({answers_count}) Answers: {answers.join("- ")}
//       </p>
//       <br />
//     </div>
//   );
// };

// export default Question;

let usersUrl = "http://localhost:3000/users/";

class Question extends React.Component {
  state = {
    user: "",
  };

  componentDidMount() {
    fetch(usersUrl)
      .then((resp) => resp.json())
      .then((users) =>
        users.map((user) => {
          if (user.id === this.props.question.user_id) {
            this.setState({
              user: user,
            });
          }
        })
      );
  }
  render() {
    let question = this.props.question;
    let answers_count = question.answers.length;
    let answers = question.answers.map((answer) => answer.body);
    return (
      <div>
        <p>User: {this.state.user.username}</p>
        <img src={`${this.state.user.image}`}></img>
        <h6>
          {" "}
          <strong>{question.title}</strong>
        </h6>
        <p>Body: {question.body}</p>
        <p>
          <strong>Tag: </strong>
          {question.tag}
        </p>
        <p>
          ({answers_count}) Answers: {answers.join("- ")}
        </p>
        <br />
      </div>
    );
  }
}

export default Question;
