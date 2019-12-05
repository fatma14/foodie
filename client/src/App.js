import React, { Component } from "react";
import Map from "./components/Map";
import axios from "axios";
import Signup from "./components/Signup";
import Login from "./components/Login";
import { searchOffers } from "./components/services/offers";
import "./App.css";

export default class App extends Component {
  setBounds(bounds) {
    searchOffers(bounds);
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Map
            setBounds={bounds => {
              this.setBounds(bounds);
            }}
          />
        </header>
      </div>
    );
  }
}
