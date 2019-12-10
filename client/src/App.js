import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Login from "./components/Login";
import CreateOffer from "./components/CreateOffer";
import "./App.css";
import OfferDetails from "./components/OfferDetails";
import SearchOffers from "./components/SearchOffers";
import Home from "./components/Home";
import { searchOffers } from "./components/services/offers";

export default class App extends Component {
  state = {
    user: this.props.user,
    offers: []
  };

  setUser = user => {
    this.setState({
      user: user
    });
  };

  setBounds = bounds => {
    searchOffers(bounds).then(offers => {
      this.setState({
        offers: offers
      });
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
                if (this.state.user) {
                  return <CreateOffer {...props} />;
                } else {
                  return <Redirect to="/" />;
                }
              }}
            />
            <Route
              exact
              path="/offers/search"
              render={props => {
                return (
                  <SearchOffers
                    offers={this.state.offers}
                    setBounds={this.setBounds}
                    {...props}
                  />
                );
              }}
            />

            {/* <Route exact path="/offers/search" component={SearchOffers} /> */}

            <Route
              exact
              path="/offer/:id"
              render={props => {
                return <OfferDetails offers={this.state.offers} {...props} />;
              }}
            />
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
