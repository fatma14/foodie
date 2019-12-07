import React, { Component } from "react";
import { searchOffers } from "./services/offers";
import Map from "./Map";

export default class SearchOffers extends Component {
  state = {
    offers: []
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
      <div>
        <Map
          offers={this.state.offers}
          setBounds={bounds => {
            this.setBounds(bounds);
          }}
        />
      </div>
    );
  }
}
