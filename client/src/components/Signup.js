import React, { Component } from "react";
import { Link } from "react-router-dom";
import { signup } from "./services/auth";
import "./Signup.css";
import { Alert, Form, Col, Card, Button } from "react-bootstrap";
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
          style={{
            width: "25rem",
            height: "30rem",
            fontSize: "20px",
            borderRadius: "1rem"
          }}
        >
          <Card.Header style={{ fontWeight: "bold" }}>
            Create an account
          </Card.Header>
          <Card.Body>
            <Form onSubmit={this.handleSubmit}>
              <Form.Row className="mt-2 mb-2">
                <Form.Group as={Col}>
                  <Form.Label htmlFor="username">Username </Form.Label>
                  <Form.Control
                    style={{ borderRadius: "1rem" }}
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
                    style={{ borderRadius: "1rem" }}
                    type="password"
                    name="password"
                    id="password"
                    value={this.state.password}
                    onChange={this.handleChange}
                  />
                </Form.Group>
              </Form.Row>
              <Form.Group className="mt-3" controlId="formGridAddress1">
                <Form.Label htmlFor="address">Address</Form.Label>
                <Form.Control
                  style={{ borderRadius: "1rem" }}
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

              <Button
                style={{ borderRadius: "1rem", border: "2px solid" }}
                variant="outline-success"
                className="signup-button"
                type="submit"
              >
                Submit
              </Button>
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
