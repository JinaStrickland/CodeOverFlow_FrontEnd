import React from "react";
import { Form, Button } from "react-bootstrap/";

const QuestionForm = (props) => {
  return (
    <div id="question-form">
      <Form onSubmit={(e) => props.addQuestion(e)}>
        <Form.Group controlId="formGroupTitle">
          <Form.Label>Title</Form.Label>
          <Form.Control type="text" placeholder="Title" />
        </Form.Group>
        <Form.Group controlId="formGroupBody">
          <Form.Label>Question</Form.Label>
          <Form.Control type="textarea" placeholder="Question" />
        </Form.Group>
        <Form.Group controlId="formGroupBody">
          <Form.Label>Language Type</Form.Label>
          <Form.Control type="text" placeholder="example: Java Script" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
        <br />
      </Form>
      <br />
    </div>
  );
};

export default QuestionForm;
