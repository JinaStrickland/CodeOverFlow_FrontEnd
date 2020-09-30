import React from "react";
import Search from "./Search";
import Profile from "./Profile";

import { Button, Card, Accordion } from "react-bootstrap/";
import { Link } from "react-router-dom";

const NavBar = (props) => {
  return (
    <div>
      <Card border="secondary" style={{ width: "15rem" }}>
        <Card.Header>
          <Accordion defaultActiveKey="0">
            <Card>
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="1">
                  Profile
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="1">
                <Card.Body> {<Profile />}</Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
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
