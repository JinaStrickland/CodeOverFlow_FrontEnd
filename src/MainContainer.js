import React from "react";
import Answer from "./Components/Answer";
import Question from "./Components/Question";
import Card from "react-bootstrap/Card";
// import AnswerForm from "./Components/AnswerForm";

class MainContainer extends React.Component {
  // state = {};
  render() {
    return (
      <div id="main-container">
        <Card border="secondary">
          <Card.Header>
            <h4>All questions ({this.props.questions.length}) </h4>

            {this.props.questions.map((question) => (
              <Question
                question={question}
                key={question.id}
                getQuestion={this.props.getQuestion}
              />
            ))}
            {/* <Answer /> */}
            {/* <AnswerForm getQuestion={this.props.getQuestion} /> */}
          </Card.Header>
        </Card>
      </div>
    );
  }
}

export default MainContainer;
