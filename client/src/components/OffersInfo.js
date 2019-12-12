import React, { Component } from "react";
import { Card } from "react-bootstrap";
import "./OffersInfo.css";

export default class OffersInfo extends Component {
  handleClick = event => {
    event.preventDefault();
    this.props.history.push(`/offer/${this.props.offer._id}`);
  };
  render() {
    return (
      <div className="offers-info mt-3 ml-3">
        <Card style={{ width: "30rem", borderBottomColor: "grey" }}>
          <Card.Img variant="top" src={this.props.offer.imageUrls[0]} />
          <Card.Body>
            <Card.Title>{this.props.offer.name}</Card.Title>
            <Card.Text> Quantity: {this.props.offer.quantity} </Card.Text>
            <footer className="blockquote-footer mt-2">
              {this.props.offer.tagline}
            </footer>
            <button onClick={this.handleClick} className="offer-details-button">
              Offer details
            </button>
          </Card.Body>
        </Card>
      </div>
    );
  }
}
