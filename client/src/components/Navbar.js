import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Navbar as Nav } from "react-bootstrap";

export default class Navbar extends Component {
  render() {
    return (
      <Nav className="nav justify-content-end" bg="light">
        <React.Fragment>
          <Link to="//signup">Signup</Link>
          <Link to="/login">Login</Link>
        </React.Fragment>
      </Nav>
    );
  }
}
