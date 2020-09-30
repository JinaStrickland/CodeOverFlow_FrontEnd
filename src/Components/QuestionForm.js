import React from "react";
import { Form, Button } from "react-bootstrap/";
import { withRouter } from "react-router-dom";

const QuestionForm = (props) => {
  return (
    <div id="question-form">
      <Form onSubmit={(e) => props.addQuestion(e)}>
        <Form.Group controlId="formGroupTitle">
          <Form.Label>Title</Form.Label>
          <Form.Control name="title" type="text" placeholder="Title" />
        </Form.Group>
        <Form.Group controlId="formGroupBody">
          <Form.Label>Question</Form.Label>
          <Form.Control name="body" type="textarea" placeholder="Question" />
        </Form.Group>
        <Form.Group controlId="formGroupBody">
          <Form.Label>Language Type</Form.Label>
          <Form.Control
            name="tag"
            type="text"
            placeholder="example: Java Script"
          />
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

export default withRouter(QuestionForm);
