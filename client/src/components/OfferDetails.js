import React, { Component } from "react";
import { getOfferDetails } from "./services/offers";
import { Card } from "react-bootstrap";
import "./OfferDetails.css";
export default class OfferDetails extends Component {
  state = {
    name: "",
    description: "",
    quantity: "",
    price: "",
    tagline: ""
  };

  getData = () => {
    const id = this.props.match.params.id;
    console.log(id);
    getOfferDetails(id).then(offer => {
      this.setState({
        name: offer.name,
        description: offer.description,
        quantity: offer.quantity,
        price: offer.price,
        tagline: offer.tagline
      });
    });
  };

  componentDidMount() {
    this.getData();
  }

  render() {
    return (
      <div className="reservation-form">
        <Card className="text-center">
          <Card.Header>{this.state.name}</Card.Header>
          <Card.Body>
            <Card.Text>{this.state.description}</Card.Text>
            <Card.Text>Quantity: {this.state.quantity}</Card.Text>
            <Card.Text>Price: {this.state.price}</Card.Text>
            <button className="reservation-button" variant="primary">
              Make a reservation
            </button>
          </Card.Body>
          <Card.Footer className="text-muted">{this.state.tagline}</Card.Footer>
        </Card>
      </div>
    );
  }
}
