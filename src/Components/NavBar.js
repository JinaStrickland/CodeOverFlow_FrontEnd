import React from "react";
import Search from "./Search";
import { Button, Card, Nav } from "react-bootstrap/";
import { Link } from "react-router-dom";

const NavBar = (props) => {
  return (
    <div>
      <br />
      <br />
      <Card border="secondary" style={{ width: "15rem" }}>
        <Card.Header>
          <Nav variant="tabs" defaultActiveKey="#first">
            <Nav.Item>
              <Nav.Link href="/profile">Profile</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/saved_links">Saved Links</Nav.Link>
            </Nav.Item>
          </Nav>
        </Card.Header>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <Card.Body>
          <Search handleSearch={props.handleSearch} />
          <br />
          <Link to="/add_question">
            {" "}
            <Button id="add-question" variant="primary" size="sm">
              Ask question
            </Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default NavBar;
