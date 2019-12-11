import React, { Component } from "react";
import Signup from "./Signup";
import Navbar from "./Navbar";
import "./Home.css";
export default class Home extends Component {
  render() {
    return (
      <div style={{ height: "100%" }}>
        <div className="background">
          {/* <div className="nav-bar">
            <Navbar user={this.props.user} clearUser={this.props.setUser} />
          </div> */}
          <div className="signup-form">
            <Signup setUser={this.props.setUser} history={this.props.history} />
          </div>
        </div>
      </div>
    );
  }
}
