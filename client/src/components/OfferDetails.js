import React, { Component } from "react";
import { getOfferDetails, createOrder } from "./services/offers";
import { Card, Carousel, Alert, Button } from "react-bootstrap";
import "./OfferDetails.css";
export default class OfferDetails extends Component {
  state = {
    name: "",
    description: "",
    quantity: "",
    price: "",
    tagline: "",
    orders: [],
    files: undefined
  };

  getData = () => {
    const id = this.props.match.params.id;
    getOfferDetails(id).then(data => {
      this.setState({
        name: data.offerDetails.name,
        description: data.offerDetails.description,
        quantity: data.offerDetails.quantity,
        price: data.offerDetails.price,
        tagline: data.offerDetails.tagline,
        files: data.offerDetails.imageUrls,
        orders: data.orders
      });
    });
  };

  createOrder = () => {
    const offerId = this.props.match.params.id;
    const userId = this.props.user._id;
    createOrder(offerId, userId);
  };

  redirectToLogin = () => {
    const currenturl = this.props.location.pathname;
    this.props.history.push(
      `/login?redirectTo=${encodeURIComponent(currenturl)}`
    );
  };

  componentDidMount() {
    this.getData();
  }

  render() {
    let carousel = [];
    if (this.state.files) {
      carousel = this.state.files.map(imageUrl => {
        return (
          <Carousel.Item>
            <img
              className="carousel-image d-block w-100"
              src={imageUrl}
              alt="First slide"
            />
          </Carousel.Item>
        );
      });
    }
    return (
      <div className="offer-details-container">
        <div className="carousel-items">
          {this.state.files && <Carousel>{carousel}</Carousel>}
        </div>
        <div className="reservation-form">
          <Card
            style={{
              width: "30rem",
              fontSize: "20px",
              borderColor: "#28a745",
              borderWidth: "2px",
              borderRadius: "1rem"
            }}
            className="text-center"
          >
            <Card.Header style={{ fontWeight: "bold" }}>
              {this.state.name}
            </Card.Header>
            <Card.Body>
              <Card.Text>{this.state.description}</Card.Text>
              <Card.Text>Quantity: {this.state.quantity}</Card.Text>
              <Card.Text>Price: {this.state.price}</Card.Text>
              {this.props.user ? (
                this.state.orders.find(order => {
                  return order.user === this.props.user._id;
                }) ? (
                  <Alert variant="warning">
                    You already made a reservation!
                  </Alert>
                ) : (
                  <Button
                    style={{ borderRadius: "1rem", border: "2px solid" }}
                    variant="outline-success"
                    className="reservation-button"
                    onClick={() => this.createOrder()}
                  >
                    Make a reservation
                  </Button>
                )
              ) : (
                <Button
                  style={{ borderRadius: "1rem", border: "2px solid" }}
                  variant="outline-success"
                  className="reservation-button"
                  onClick={() => {
                    this.redirectToLogin();
                  }}
                >
                  Login in order to make reservation
                </Button>
              )}
            </Card.Body>
            <Card.Footer className="text-muted">
              {this.state.tagline}
            </Card.Footer>
          </Card>
        </div>
      </div>
    );
  }
}
