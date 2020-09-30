import { Button, Navbar } from "react-bootstrap/";

import React, { useCallback } from "react";
import { useHistory } from "react-router-dom";
import { withRouter } from "react-router-dom";

const Header = (props) => {
  const history = useHistory();
  const handleOnClick = useCallback(() => history.push("/signup"), [history]);
  const logInOnClick = useCallback(() => history.push("/login"), [history]);
  const homepageOnClick = useCallback(() => history.push("/homepage"), [
    history,
  ]);

  const logOut = () => {
    localStorage.clear();

    props.history.push("/login");
    alert("You have logged out successfully");
  };

  return (
    <div>
      <br />
      <Navbar bg="dark" variant="dark" fixed="top">
        <Navbar.Brand href="/about">
          <img
            alt=""
            src={require(`../images/codeOverFlow_logo.jpg`)}
            width="40"
            height="40"
            className="d-inline-block align-top"
          />{" "}
          CodeOverFlow
        </Navbar.Brand>
        <div id="all-header-btns">
          {3 > 2 ? (
            <Button variant="primary" size="sm" onClick={logInOnClick}>
              Log in
            </Button>
          ) : null}{" "}
          <Button variant="primary" size="sm" onClick={handleOnClick}>
            Signup
          </Button>{" "}
          <Button variant="primary" size="sm" onClick={homepageOnClick}>
            Home
          </Button>{" "}
          <Button variant="primary" size="sm" onClick={logOut}>
            Log Out
          </Button>{" "}
        </div>
      </Navbar>
      {/* </> */}
    </div>
  );
};

export default withRouter(Header);
