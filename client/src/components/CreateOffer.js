import React, { Component } from "react";
import { createOffer } from "./services/offers";
import { Alert, Form, Button } from "react-bootstrap";
import Map from "./Map";

export default class Offer extends Component {
  state = {
    name: "",
    price: "",
    quantity: "",
    description: "",
    coordinates: []
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

  handleSubmit = event => {
    event.preventDefault();

    createOffer(
      this.state.name,
      this.state.price,
      this.state.description,
      this.state.quantity,
      this.state.coordinates
    );
  };

  render() {
    return (
      <div>
        <h2>Offer</h2>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group>
            <Form.Label htmlFor="name">Name: </Form.Label>
            <Form.Control
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
              type="text"
              name="price"
              id="price"
              value={this.state.price}
              onChange={this.handleChange}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label htmlFor="quantity">Quantity: </Form.Label>
            <Form.Control
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
              type="text"
              name="description"
              id="description"
              value={this.state.description}
              onChange={this.handleChange}
            />
          </Form.Group>
          <Button type="submit">Create</Button>
          <Map
            // setBounds={bounds => {
            //   this.setBounds(bounds);
            // }}
            setCoordinates={coordinates => {
              this.setCoordinates(coordinates);
            }}
          />
        </Form>
      </div>
    );
  }
}
