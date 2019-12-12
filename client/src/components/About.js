import React from "react";
import "./About.css";
import { Card } from "react-bootstrap";

const About = () => {
  return (
    <div>
      <Card className="mt-5 ml-5 mr-5">
        <Card.Header style={{ fontWeight: "bold" }}>About Us</Card.Header>
        <Card.Body>
          <blockquote className="blockquote mb-0">
            <p>
              HomeMade is a web application connecting people who want to make
              money from their surplus food and reduce food waste at the same
              time, with consumers that appreciate eating affordable quality
              food. HomeMade is a location-based web service that enables
              consumers to find and rescue surplus food in their proximity.
            </p>
            <footer className="blockquote-footer mt-3">
              Every meal purchased via HomeMade is one less meal thrown away,
              helping our urban communities to waste less and be more
              sustainable.
            </footer>
          </blockquote>
        </Card.Body>
      </Card>
      <div className="steps">
        <Card
          style={{
            width: "18rem",
            fontSize: "20px",
            borderColor: "#28a745",
            borderWidth: "2px",
            borderRadius: "1rem"
          }}
        >
          <Card.Img variant="bottom" src={require("../images/search.webp")} />
          <Card.Body>
            <Card.Title style={{ fontWeight: "bold" }}>
              Find low-priced meal near you
            </Card.Title>
          </Card.Body>
        </Card>
        <Card
          style={{
            width: "18rem",
            fontSize: "20px",
            borderColor: "#28a745",
            borderWidth: "2px",
            borderRadius: "1rem"
          }}
        >
          <Card.Img
            variant="bottom"
            src={require("../images/reservation.webp")}
          />
          <Card.Body>
            <Card.Title style={{ fontWeight: "bold" }}>
              Make a reservation within the app
            </Card.Title>
          </Card.Body>
        </Card>
        <Card
          style={{
            width: "18rem",
            fontSize: "20px",
            borderColor: "#28a745",
            borderWidth: "2px",
            borderRadius: "1rem"
          }}
        >
          <Card.Img variant="bottom" src={require("../images/icon.webp")} />
          <Card.Body>
            <Card.Title style={{ fontWeight: "bold" }}>
              Pick it up when you want
            </Card.Title>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default About;
