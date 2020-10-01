// import React from "react";
// import SignUp from "./SignUp";
import { Navbar } from "react-bootstrap/";

import React from "react";
import { Link } from "react-router-dom";
// import '../images/codeOverFlow_logo.jpg';

const Footer = (props) => {
  return (
    <div id="footer">
      <br />
      <Navbar bg="dark" variant="dark" expand="lg" fixed="bottom">
        <Link to="/about">
          <h5>ABOUT |</h5>
        </Link>
        <Link to="/products">
          <h5> | PRODUCTS</h5>
        </Link>
      </Navbar>
    </div>
  );
};

export default Footer;
