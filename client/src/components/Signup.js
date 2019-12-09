import React, { Component } from "react";
import { Link } from "react-router-dom";
import { signup } from "./services/auth";
import "./Signup.css";
import { Alert, Form, Col, Card } from "react-bootstrap";
export default class Signup extends Component {
  state = {
    username: "",
    password: "",
    error: ""
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    signup(this.state.username, this.state.password).then(data => {
      if (data.message) {
        this.setState({
          error: data.message
        });
      } else {
        this.props.setUser(data);
        this.props.history.push("/offer/create");
      }
    });
  };

  render() {
    return (
      <div>
        <Card
          className="mt-5"
          bg="light"
          style={{ width: "25rem", height: "25rem", fontSize: "20px" }}
        >
          <Card.Header>Create account</Card.Header>
          <Card.Body>
            <Form onSubmit={this.handleSubmit}>
              <Form.Row>
                <Form.Group as={Col}>
                  <Form.Label htmlFor="username">Username </Form.Label>
                  <Form.Control
                    type="text"
                    name="username"
                    id="username"
                    value={this.state.username}
                    onChange={this.handleChange}
                  />
                </Form.Group>
                <Form.Group as={Col}>
                  <Form.Label htmlFor="password">Password </Form.Label>
                  <Form.Control
                    type="password"
                    name="password"
                    id="password"
                    value={this.state.password}
                    onChange={this.handleChange}
                  />
                </Form.Group>
              </Form.Row>
              <Form.Group controlId="formGridAddress1">
                <Form.Label htmlFor="address">Address</Form.Label>
                <Form.Control
                  type="address"
                  name="address"
                  id="address"
                  value={this.state.address}
                  onChange={this.handleChange}
                  placeholder="1234 Main St"
                />
              </Form.Group>
              {this.state.error && (
                <Alert variant="danger">{this.state.error}</Alert>
              )}

              <button className="signup-button" type="submit">
                Submit
              </button>
            </Form>
            <footer className="blockquote-footer mt-2">
              Already have an account? <Link to="/login">Login</Link>
            </footer>
          </Card.Body>
        </Card>
      </div>
    );
  }
}
