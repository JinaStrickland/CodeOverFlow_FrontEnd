import React from "react";
import { Button } from "react-bootstrap/";

const Signout = (props) => {
  const logOut = () => {
    localStorage.clear();

    alert("You have logged out successfully");
    props.history.push("/login");
  };

  return (
    <div id="signup-card">
      <Button variant="primary" size="sm" onClick={logOut}>
        Log Out
      </Button>{" "}
    </div>
  );
};

export default Signout;
