// import React from "react";
// import SignUp from "./SignUp";
import { Button, Navbar } from "react-bootstrap/";

import React, { useCallback } from "react";
import { useHistory } from "react-router-dom";
// import '../images/codeOverFlow_logo.jpg';

const Header = (props) => {
  const history = useHistory();
  const handleOnClick = useCallback(() => history.push("/signup"), [history]);
  const logInOnClick = useCallback(() => history.push("/login"), [history]);
  const homepageOnClick = useCallback(() => history.push("/"), [history]);

  const logOut = () => {
    localStorage.clear();

    alert("You have logged out successfully");
    // props.history.push("/login");
  };

  return (
    <div>
      {/* <> */}
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
          <Button variant="primary" size="sm" onClick={logInOnClick}>
            Log in
          </Button>{" "}
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

export default Header;
