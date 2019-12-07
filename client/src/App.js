import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Login from "./components/Login";
import CreateOffer from "./components/CreateOffer";
import "./App.css";
import OfferDetails from "./components/OfferDetails";
import SearchOffers from "./components/SearchOffers";
import Home from "./components/Home";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Switch>
            <Route
              exact
              path="/offer/create"
              render={props => <CreateOffer {...props} />}
            />
            <Route exact path="/offer/search" component={SearchOffers} />
            <Route exact path="/offer/:id" component={OfferDetails} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/" component={Home} />
          </Switch>

          {/* <Map
            setBounds={bounds => {
              this.setBounds(bounds);
            }}
            setCoordinates={coordinates => {
              this.setCoordinates(coordinates);
            }}
          /> */}
        </header>
      </div>
    );
  }
}
