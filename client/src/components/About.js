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
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="bottom" src="./images/order.jpg" />
        <Card.Body>
          <Card.Title>Pick it up</Card.Title>
        </Card.Body>
      </Card>
    </div>
  );
};

export default About;
