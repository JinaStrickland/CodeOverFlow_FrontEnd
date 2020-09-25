import React from "react";
import Answer from "./Components/Answer";
import Question from "./Components/Question";

class MainContainer extends React.Component {
  state = {};
  render() {
    return (
      <div>
        <Question />
        <Answer />
      </div>
    );
  }
}

export default MainContainer;
