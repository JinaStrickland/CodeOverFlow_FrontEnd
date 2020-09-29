import React from "react";
import { Button, Form } from "react-bootstrap/";

const AnswerForm = (props) => {
  return (
    <div id="answer-form">
      <Form onSubmit={(e) => props.addAnswer(e)}>
        <Form.Group controlId="formGroupTitle">
          <Form.Label>Body</Form.Label>
          <Form.Control type="text" placeholder="Your answer" />
        </Form.Group>

        <br />
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      <br />
    </div>
  );
};

export default AnswerForm;
