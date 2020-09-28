import React from "react";
import Answer from "./Components/Answer";
import Question from "./Components/Question";
// import Nav from "react-bootstrap/Nav";
import Card from "react-bootstrap/Card";
// import Button from "react-bootstrap/Button";

class MainContainer extends React.Component {
  // state = {};
  render() {
    return (
      <div id="main-container">
        <Card border="secondary" >
          <Card.Body>
            {this.props.questions.map((question) => (
              <Question question={question} key={question.id} />
            ))}
            <Answer />
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default MainContainer;
