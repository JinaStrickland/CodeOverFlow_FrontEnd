import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

class LogIn extends Component {
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  logIn = (e) => {
    e.preventDefault();

    // e.target.reset();

    fetch("http://localhost:3000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: {
          username: this.state.username,
          password: this.state.password,
        },
      }),
    })
      .then((res) => res.json())
      .then((userInfo) => {
        localStorage.token = userInfo.token;
      });
  };

  render() {
    return (
      <div id="login-card">
        <Card border="secondary">
          <br />
          <h3>Login</h3>
          <br />
          <Form onSubmit={(e) => this.logIn(e)}>
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

export default LogIn;
