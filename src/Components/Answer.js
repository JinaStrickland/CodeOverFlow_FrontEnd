import React from "react";
import { Button, Card } from "react-bootstrap/";
import { Link } from "react-router-dom";

const Answer = (props) => {

  return (
    <div>
      <Card border="secondary" id="answer-page">
        <br />
        {props.clickedAnswer}
          <Button
            id="add-answer"
            variant="light"
            size="sm" 
            onClick={(e) => props.clickedAnswer(e.target)}
           >
            <Link to="/edit_answer"> edit answer</Link>
          </Button>
        <br />
        </Card>
      </div>
  );
};

export default Answer;
