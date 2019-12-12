import React, { Component } from "react";
import Signup from "./Signup";
import { Card } from "react-bootstrap";
import "./Home.css";
export default class Home extends Component {
  render() {
    return (
      <div style={{ height: "100%" }}>
        <div className="background">
          <div className="signup-form">
            <Signup setUser={this.props.setUser} history={this.props.history} />
          </div>
          <div className="intro-text">
            <Card
              className="mt-5"
              style={{
                width: "50rem",
                backgroundColor: "transparent",
                color: "white",
                border: "none"
              }}
            >
              <Card.Body>
                <Card.Title
                  style={{
                    fontSize: "30px",
                    fontWeight: "bold"
                  }}
                >
                  HomeMade
                </Card.Title>
                <Card.Text>
                  Throwing food away is bad business. Running out of food during
                  peak hours is also bad business. HomeMade will help you sell
                  your surplus food to people longing for fresh homemade meals.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
        <footer style={{ fontSize: "40px" }} className="blockquote-footer mt-5">
          Good Food is all what you need
        </footer>
      </div>
    );
  }
}
