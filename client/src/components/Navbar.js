import React from "react";
import { Link } from "react-router-dom";
import { Navbar as Nav, Button } from "react-bootstrap";
import { logout } from "./services/auth";

const Navbar = props => {
  const handleLogout = () => {
    logout();
    props.clearUser(null);
  };
  return (
    <Nav className=" nav justify-content-end mt-2 ml-2 mr-2">
      {props.user ? (
        <>
          <span style={{ color: "black", fontWeight: "bold" }} className="mr-5">
            Hello {props.user.username}
          </span>
          <Button
            style={{ borderRadius: "1rem", border: "2px solid" }}
            variant="outline-success"
          >
            <Link
              style={{
                color: "black",
                fontWeight: "bold",
                textDecoration: "none"
              }}
              to="/"
              onClick={handleLogout}
            >
              Logout
            </Link>
          </Button>
          <div className="mr-5 ml-5">
            <Button
              style={{ borderRadius: "1rem", border: "2px solid" }}
              variant="outline-success"
            >
              <Link
                style={{
                  color: "black",
                  fontWeight: "bold",
                  textDecoration: "none"
                }}
                to="/offers/search"
              >
                Offers
              </Link>
            </Button>
          </div>
        </>
      ) : (
        <React.Fragment>
          <div className="mr-3">
            <Button
              style={{ borderRadius: "1rem", border: "2px solid" }}
              variant="outline-success"
            >
              <Link
                style={{
                  color: "black",
                  fontWeight: "bold",
                  textDecoration: "none"
                }}
                to="/offers/search"
              >
                Offers
              </Link>
            </Button>
          </div>
          <div className="mr-5 ml-5">
            <Button
              style={{ borderRadius: "1rem", border: "2px solid" }}
              variant="outline-success"
            >
              <Link
                style={{
                  color: "black",
                  fontWeight: "bold",
                  textDecoration: "none"
                }}
                to="/login"
              >
                Login
              </Link>
            </Button>
          </div>
        </React.Fragment>
      )}
    </Nav>
  );
};

export default Navbar;
