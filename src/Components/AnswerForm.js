import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const AnswerForm = (props) => {

    return (
         <div>
             <Form onSubmit={(e) => props.addAnswer(e)}>
                <Form.Group controlId="formGroupTitle">
                    <Form.Label>Title</Form.Label>
                    <Form.Control type="text" placeholder="Answer" />
                </Form.Group>
                <Form.Group controlId="formGroupBody">
                    <Form.Label>Question</Form.Label>
                    <Form.Control type="text" placeholder="Question"/>
                </Form.Group>
                <Form.Group controlId="formGroupBody">
                    <Form.Label>Language Type</Form.Label>
                    <Form.Control type="text" placeholder="example: Java Script"/>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
                </Form>
         </div> 
    );
}
 
export default AnswerForm;

// t.text "body"
// t.integer "user_id"
// t.integer "question_id"