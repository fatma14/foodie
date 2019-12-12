import React, { Component } from "react";
import qs from "qs";
import { login } from "./services/auth";
import { Alert, Form, Card, Button } from "react-bootstrap";
import "./Login.css";

export default class Login extends Component {
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

    login(this.state.username, this.state.password).then(data => {
      if (data.message) {
        this.setState({
          error: data.message
        });
      } else {
        this.props.setUser(data);
        if (this.props.location.search) {
          const paramsString = decodeURIComponent(
            this.props.location.search.split("?")[1]
          );
          const { redirectTo } = qs.parse(paramsString);
          this.props.history.push(redirectTo);
        } else {
          this.props.history.push("/offer/create");
        }
      }
    });
  };

  render() {
    console.warn(this.props);
    return (
      <div className="login-background">
        <div className="login-form">
          <div>
            <Card
              bg="light"
              style={{
                width: "30rem",
                height: "25rem",
                fontSize: "20px",
                borderRadius: "1rem"
              }}
            >
              <Card.Header style={{ fontWeight: "bold" }}>Login</Card.Header>
              <Card.Body>
                <Form onSubmit={this.handleSubmit}>
                  <Form.Group>
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
                  <Form.Group>
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
                  {this.state.error && (
                    <Alert variant="danger">{this.state.error}</Alert>
                  )}
                  <Button
                    style={{ borderRadius: "1rem", border: "2px solid" }}
                    variant="outline-success"
                    className="login-button"
                    type="submit"
                  >
                    Log in
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    );
  }
}
