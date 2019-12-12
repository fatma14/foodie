import React, { Component } from "react";
import Map from "./Map";
import OffersInfo from "./OffersInfo";
import "./searchOffers.css";

export default class SearchOffers extends Component {
  constructor(props) {
    super(props);
    this.mapContainer = React.createRef();
    this.scrollHandler = this.onScroll.bind(this);
  }

  onScroll() {
    if (window.scrollY > 80) {
      this.mapContainer.current.style.top = "0";
      this.mapContainer.current.style.position = "fixed";
      this.mapContainer.current.style.right = "0";
    } else {
      this.mapContainer.current.style.top = null;
      this.mapContainer.current.style.position = null;
      this.mapContainer.current.style.right = null;
    }
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.scrollHandler);
  }

  componentDidMount() {
    window.addEventListener("scroll", this.scrollHandler);
  }

  render() {
    if (this.props.offers === []) {
      return <div></div>;
    }
    const matchingOffers = this.props.offers.map(offer => {
      return <OffersInfo offer={offer} {...this.props} />;
    });
    return (
      <div className="search-offers">
        <div className="offers-list">
          <div className="list">{matchingOffers}</div>
        </div>
        <div className="search-offers-map-container" ref={this.mapContainer}>
          <Map
            offers={this.props.offers}
            setBounds={bounds => {
              this.props.setBounds(bounds);
            }}
          />
        </div>
      </div>
    );
  }
}
