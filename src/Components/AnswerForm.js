import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const AnswerForm = (props) => {
  return (
    <div id="answer-form">
      <Form
      //   onSubmit={(e) => props.addAnswer(e)}
      >
        <Form.Group controlId="formGroupTitle">
          <Form.Label>Body</Form.Label>
          <Form.Control type="text" placeholder="Answer" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default AnswerForm;

// t.text "body"
// t.integer "user_id"
// t.integer "question_id"
