// import React from "react";
// import SignUp from "./SignUp";
import Button from "react-bootstrap/Button";
import Navbar from "react-bootstrap/Navbar";

import React, { useCallback } from "react";
import { useHistory } from "react-router-dom";

const Header = (props) => {
  const history = useHistory();
  const handleOnClick = useCallback(() => history.push("/signup"), [history]);
  const logInOnClick = useCallback(() => history.push("/login"), [history]);
  const homepageOnClick = useCallback(() => history.push("/homepage"), [
    history,
  ]);

  const logOut = () => {
    localStorage.clear();
  };

  return (
    <div>
      {/* <> */}
        <br />
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="https://cdn2.vectorstock.com/i/1000x1000/99/71/coding-cartoon-icon-vector-7349971.jpg"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{" "}
            CodeOverFlow
          </Navbar.Brand>
          <>
            <Button variant="primary" onClick={logInOnClick}>
              Log in
            </Button>{" "}
            <Button variant="primary" onClick={handleOnClick}>
              Signup
            </Button>{" "}
            <Button variant="primary" onClick={homepageOnClick}>
              Home
            </Button>{" "}
            <Button variant="primary" onClick={logOut}>
              Log Out
            </Button>
          </>
        </Navbar>
      {/* </> */}
    </div>
  );
};

export default Header;
