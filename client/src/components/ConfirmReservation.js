import React from "react";
import { Card } from "react-bootstrap";
const ConfirmReservation = () => {
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src="../images/icon_pickup-1.webp" />
        <Card.Body>
          <Card.Title>Your reservation has been succesfully done</Card.Title>
          <Card.Text>You can pick it up</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ConfirmReservation;
