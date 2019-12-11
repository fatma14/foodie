import React from "react";
import { Link } from "react-router-dom";
import { Navbar as Nav } from "react-bootstrap";
import { logout } from "./services/auth";

const Navbar = props => {
  console.warn("test", props);
  const handleLogout = () => {
    logout();
    props.clearUser(null);
  };
  return (
    <Nav className="nav justify-content-end mt-2 ml-2 mr-2">
      {props.user ? (
        <>
          <Link to="/">Welcome {props.user.username}</Link>
          <Link
            style={{ color: "white", fontWeight: "bold" }}
            to="/"
            onClick={handleLogout}
          >
            Logout
          </Link>
        </>
      ) : (
        <React.Fragment>
          <div className="mr-3">
            <Link
              style={{ color: "white", fontWeight: "bold" }}
              to="/offers/search"
            >
              {" "}
              Offers
            </Link>
          </div>
          <div className="mr-5 ml-5">
            <Link style={{ color: "white", fontWeight: "bold" }} to="/login">
              Login
            </Link>
          </div>
        </React.Fragment>
      )}
    </Nav>
  );
};

export default Navbar;
