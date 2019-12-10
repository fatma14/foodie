import React, { Component } from "react";
import Map from "./Map";
import OffersInfo from "./OffersInfo";

export default class SearchOffers extends Component {
  render() {
    const matchingOffers = this.props.offers.map(offer => {
      return <OffersInfo offer={offer} {...this.props} />;
    });
    return (
      <div>
        <div>{matchingOffers}</div>
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
