import React, { Component } from "react";
import { Button, Card, Col, Form } from "react-bootstrap/";

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
    alert("You are logged in");
    this.props.history.push("/");
  };

  redirectToHomepage = () => {};

  render() {
    return (
      <div id="login-card">
        <Card border="secondary">
          <br />
          <h3>Login</h3>
          <br />
          <Form onSubmit={(e) => this.logIn(e)}>
            <Form.Group as={Col} controlId="formGridUsername formBasicUsername">
              <Col xs="10">
                <Form.Label>Username</Form.Label>
                <Form.Control
                  type="text"
                  name="username"
                  placeholder="Enter username"
                  onChange={(e) => this.handleChange(e)}
                />
              </Col>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword formBasicPassword">
              <Col xs="10">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  placeholder="Password"
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
          </Form>
          <br />
        </Card>
      </div>
    );
  }
}

export default LogIn;
