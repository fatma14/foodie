import React, { Component } from "react";
import { createOffer } from "./services/offers";
import { Form, Button } from "react-bootstrap";
import Map from "./Map";
import axios from "axios";

export default class Offer extends Component {
  state = {
    name: "",
    price: "",
    quantity: "",
    description: "",
    tagline: "",
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

  onImageUpload = event => {
    const [files] = event.target.files;
    console.log("file to be uploaded is", files);
    const uploadData = new FormData();
    uploadData.append("imageUrl", files);
    axios.post("/api/upload", uploadData).then(response => {
      console.log("Hey Now", response);
      // const urlPath = response.data.secure_url;
      // setUrlPath(urlPath);
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    createOffer(
      this.state.name,
      this.state.price,
      this.state.description,
      this.state.quantity,
      this.state.coordinates,
      this.state.tagline
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

          <Form.Group>
            <Form.Label htmlFor="description">Tagline: </Form.Label>
            <Form.Control
              type="text"
              name="tagline"
              id="tagline"
              value={this.state.tagline}
              onChange={this.handleChange}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label htmlFor="file">upload file </Form.Label>
            <Form.Control
              type="file"
              name="urlPath"
              id="urlPath"
              onChange={this.onImageUpload}
            />
          </Form.Group>

          <Button type="submit">Create</Button>
          <Map
            setCoordinates={coordinates => {
              this.setCoordinates(coordinates);
            }}
          />
        </Form>
      </div>
    );
  }
}
