import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import { Button, Col, Card, Form } from "react-bootstrap/";

class SignUp extends Component {
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  signUp = (e) => {
    e.preventDefault();
    e.target.reset();

    fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: {
          username: this.state.username,
          email: this.state.email,
          password: this.state.password,
          image: this.state.image,
          company_id: 2,
        },
      }),
    })
      .then((res) => res.json())
      .then(console.log);
    this.props.history.push("/login");
  };

  render() {
    return (
      <div id="signup-card">
        <Card border="secondary">
          <br />
          <h3>Signup</h3>
          <br />
          <Form onSubmit={(e) => this.signUp(e)}>
            <Form.Row>
              <Form.Group
                as={Col}
                controlId="formGridUsername formBasicUsername"
              >
                <Col xs="auto">
                  <Form.Label>Username</Form.Label>
                  <Form.Control
                    type="text"
                    name="username"
                    placeholder="Enter username"
                    onChange={(e) => this.handleChange(e)}
                  />
                </Col>
              </Form.Group>
              <Form.Group as={Col} controlId="formGridEmail formBasicEmail">
                <Col xs="auto">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    placeholder="Enter email"
                    onChange={(e) => this.handleChange(e)}
                  />
                </Col>
              </Form.Group>
            </Form.Row>

            <Form.Row>
              <Form.Group
                as={Col}
                controlId="formGridPassword formBasicPassword"
              >
                <Col xs="auto">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    name="password"
                    placeholder="Password"
                    onChange={(e) => this.handleChange(e)}
                  />
                </Col>
              </Form.Group>
            </Form.Row>

            <Form.Row>
              {/* <Form.Group as={Col}>
                <Col xs="auto">
                  <Form.Label>Profile Image</Form.Label>
                  <Form.File
                    id="image"
                    type="text"
                    name="image"
                    onChange={(e) => this.handleChange(e)}
                  />
                </Col>
              </Form.Group> */}

              <Form.Group as={Col}>
                <Col xs="auto">
                  <Form.Label>Profile Image</Form.Label>
                  <Form.Control
                    id="image"
                    type="text"
                    name="image"
                    placeholder="image url..."
                    onChange={(e) => this.handleChange(e)}
                  />
                </Col>
              </Form.Group>

              <Col xs="8">
                <br />
                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Col>
            </Form.Row>
          </Form>
        </Card>
      </div>
    );
  }
}

export default withRouter(SignUp);
