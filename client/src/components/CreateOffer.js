import React, { Component } from "react";
import { createOffer, handleUpload } from "./services/offers";
import { Form, Card, Button } from "react-bootstrap";
import Map from "./Map";
import "./CreateOffer.css";

export default class Offer extends Component {
  state = {
    name: "",
    price: "",
    quantity: "",
    description: "",
    tagline: "",
    imageUrl: "",
    files: undefined,
    coordinates: [],
    isLoading: false,
    error: undefined
  };

  setCoordinates = coordinates => {
    this.setState({
      coordinates: coordinates
    });
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  onImageUpload = event => {
    console.warn(event.target.files);
    const files = event.target.files;
    console.log("file to be uploaded is", files);
    this.setState({ files });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.setState({
      isLoading: true
    });

    createOffer(
      this.state.name,
      this.state.price,
      this.state.description,
      this.state.quantity,
      this.state.coordinates,
      this.state.tagline,
      this.state.files
    )
      .then(response => {
        this.setState({ isLoading: false });
        this.props.history.push(`/offer/${response._id}`);
      })
      .catch(error => {
        this.setState({
          isLoading: false,
          error
        });
      });
  };

  render() {
    return (
      <div className="create-offer">
        <div className="create-offer-from">
          <Card
            className="ml-3"
            bg="light"
            style={{
              width: "30rem",
              fontSize: "20px",
              borderColor: "#28a745",
              borderWidth: "2px",
              borderRadius: "1rem"
            }}
          >
            <Card.Header style={{ fontWeight: "bold" }}>
              Create offer
            </Card.Header>
            <Card.Body>
              <Form onSubmit={this.handleSubmit}>
                <Form.Group>
                  <Form.Label htmlFor="name">Name: </Form.Label>
                  <Form.Control
                    style={{ borderRadius: "1rem" }}
                    type="text"
                    name="name"
                    id="name"
                    value={this.state.name}
                    onChange={this.handleChange}
                  />
                </Form.Group>

                <Form.Group>
                  <Form.Label htmlFor="price">Price: </Form.Label>
                  <Form.Control
                    style={{ borderRadius: "1rem" }}
                    type="text"
                    name="price"
                    id="price"
                    placeholder="0€"
                    value={this.state.price}
                    onChange={this.handleChange}
                  />
                </Form.Group>

                <Form.Group>
                  <Form.Label htmlFor="quantity">Quantity: </Form.Label>
                  <Form.Control
                    style={{ borderRadius: "1rem" }}
                    type="text"
                    name="quantity"
                    id="quantity"
                    value={this.state.quantity}
                    onChange={this.handleChange}
                  />
                </Form.Group>

                <Form.Group>
                  <Form.Label htmlFor="description">Description: </Form.Label>
                  <Form.Control
                    style={{ borderRadius: "1rem" }}
                    type="text"
                    name="description"
                    id="description"
                    value={this.state.description}
                    onChange={this.handleChange}
                  />
                </Form.Group>

                <Form.Group>
                  <Form.Label htmlFor="description">Tagline: </Form.Label>
                  <Form.Control
                    style={{ borderRadius: "1rem" }}
                    type="text"
                    name="tagline"
                    id="tagline"
                    value={this.state.tagline}
                    onChange={this.handleChange}
                  />
                </Form.Group>

                <Form.Group>
                  <Form.Label htmlFor="file">Upload pictures: </Form.Label>
                  <Form.Control
                    style={{ borderRadius: "1rem" }}
                    type="file"
                    name="urlPath"
                    id="urlPath"
                    multiple
                    onChange={this.onImageUpload}
                  />
                </Form.Group>
                <Button
                  style={{ borderRadius: "1rem", border: "2px solid" }}
                  variant="outline-success"
                  className="create-offer-button"
                  type="submit"
                  disabled={this.state.isLoading}
                >
                  Create
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </div>
        <Map
          setCoordinates={coordinates => {
            this.setCoordinates(coordinates);
          }}
        />
      </div>
    );
  }
}
