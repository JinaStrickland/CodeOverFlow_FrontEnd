import React from "react";
import { Card } from "react-bootstrap/";
import { withRouter } from "react-router-dom";

const Answer = (props) => {
  return (
    <div>
      <Card border="secondary" id="answer-page">
        <Card.Header></Card.Header>
        <br />
        <br />
        <Card.Body>
          HELLO
          <br />
        </Card.Body>
      </Card>
    </div>
  );
};

export default withRouter(Answer);
