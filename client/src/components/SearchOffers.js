import React, { Component } from "react";
import Map from "./Map";
import OffersInfo from "./OffersInfo";
import "./searchOffers.css";

export default class SearchOffers extends Component {
  render() {
    const matchingOffers = this.props.offers.map(offer => {
      return <OffersInfo offer={offer} {...this.props} />;
    });
    return (
      <div className="search-offers">
        <div className="offers-list">{matchingOffers}</div>
        <span>You are few minutes away from a delicious meal</span>
        <Map
          offers={this.props.offers}
          setBounds={bounds => {
            this.props.setBounds(bounds);
          }}
        />
      </div>
    );
  }
}
