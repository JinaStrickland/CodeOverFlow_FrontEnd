import React from "react";
// import SignUp from "./SignUp";
import Button from "react-bootstrap/Button";
import Navbar from "react-bootstrap/Navbar";

const Header = (props) => {
  return (
    <div>
      <>
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
          <Button variant="primary">Log in</Button>
          <Button variant="primary">Signup</Button>
        </Navbar>
      </>
    </div>
  );
};

export default Header;
