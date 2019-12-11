import React, { Component } from "react";
import { login } from "./services/auth";
import { Alert, Form, Card } from "react-bootstrap";
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
        console.warn(this.props.history);
        this.props.setUser(data);
        this.props.history.push("/offer/create");
      }
    });
  };

  render() {
    return (
      <div className="login-background">
        <div className="login-form">
          <div>
            <Card
              bg="light"
              style={{ width: "30rem", height: "30rem", fontSize: "20px" }}
            >
              <Card.Header>Login</Card.Header>
              <Card.Body>
                <Form onSubmit={this.handleSubmit}>
                  <Form.Group>
                    <Form.Label htmlFor="username">Username </Form.Label>
                    <Form.Control
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
                  <button className="login-button" type="submit">
                    Log in
                  </button>
                </Form>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    );
  }
}
