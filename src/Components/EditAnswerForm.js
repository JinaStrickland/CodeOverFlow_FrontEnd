import React from "react";
import { Form, Button } from "react-bootstrap/";

const EditAnswerForm = (props) => {

  const { body } = props.editedAnswer;

  return (
    <div id="edit-answer-form">
      <Form>
        <Form.Group controlId="formGroupBody">
          <Form.Label>Answer</Form.Label>
          <Form.Control
            name="body"
            value={ body }
            type="textarea"
            placeholder="Answer"
            onChange={props.editAnswer}
          />
        </Form.Group>
        <Button
            id="edit-answer"
            variant="primary"
            size="sm"
            type="submit"
            onClick={props.patchEditedAnswer}
        >
          Submit
        </Button>
        <br />
      </Form>
      <br />
    </div>
  );
};

export default EditAnswerForm;
