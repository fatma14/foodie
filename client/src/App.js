import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Login from "./components/Login";
import CreateOffer from "./components/CreateOffer";
import "./App.css";
import OfferDetails from "./components/OfferDetails";
import SearchOffers from "./components/SearchOffers";
import Home from "./components/Home";

export default class App extends Component {
  state = {
    user: this.props.user
  };

  setUser = user => {
    this.setState({
      user: user
    });
  };

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <Switch>
            <Route
              exact
              path="/"
              render={props => (
                <Home
                  user={this.state.props}
                  setUser={this.setUser}
                  {...props}
                />
              )}
            />
            <Route
              exact
              path="/offer/create"
              render={props => {
                console.warn("test", this.state);

                if (this.state.user) {
                  return <CreateOffer {...props} />;
                } else {
                  return <Redirect to="/" />;
                }
              }}
            />
            <Route exact path="/offers/search" component={SearchOffers} />
            <Route exact path="/offer/:id" component={OfferDetails} />
            <Route
              exact
              path="/login"
              render={props => {
                return <Login setUser={this.setUser} {...props} />;
              }}
            />
          </Switch>
        </div>
      </div>
    );
  }
}
