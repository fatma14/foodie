import React, { Component } from "react";
import MapboxGeocoder from "@mapbox/mapbox-gl-geocoder";
import mapboxgl from "mapbox-gl";

mapboxgl.accessToken =
  "pk.eyJ1IjoiZmF0bWExNCIsImEiOiJjazNzbDVwcGYwN24xM2hvNG5ncDlmNDBqIn0.lUgBAvFq5lq9DHoVrK032A";

class Map extends Component {
  state = {
    zoom: 1.5
  };
  map = undefined;

  componentDidMount() {
    const zoom = this.state;

    this.map = new mapboxgl.Map({
      container: this.mapContainer,
      style: "mapbox://styles/mapbox/streets-v9",
      center: [13.4, 52.52]
    });

    const geocoder = new MapboxGeocoder({
      accessToken: mapboxgl.accessToken,
      mapboxgl: mapboxgl,
      placeholder: "Search"
      // bbox: [
      //   13.249066317660635,
      //   52.41424490784732,
      //   13.540030204072025,
      //   52.5949388733805
      // ],
      // proximity: {
      //   longitude: 13.4,
      //   latitude: 52.52
      // }
    });

    this.map.addControl(geocoder);
    this.map.on("zoomend", () => {
      const bounds = this.map.getBounds();
      if (this.props.setBounds) {
        this.props.setBounds({
          southWest: bounds._sw,
          northEast: bounds._ne
        });
      }
    });
    this.map.on("load", () => {
      this.map.addSource("single-point", {
        type: "geojson",
        data: {
          type: "FeatureCollection",
          features: []
        }
      });

      geocoder.on("result", event => {
        const resultGeocoder = this.map
          .getSource("single-point")
          .setData(event.result);
        const coordinates = [
          resultGeocoder._data.center[0],
          resultGeocoder._data.center[1]
        ];
        if (this.props.setCoordinates) {
          this.props.setCoordinates(coordinates);
        }

        // this.setState({
        //   //   coordinates: [
        //   //     resultGeocoder._data.center[0],
        //   //     resultGeocoder._data.center[1]
        //   //   ],
        //   zoom: map.getZoom().toFixed(2)
        // });
      });
    });
  }

  render() {
    if (this.map) {
      this.props.offers.forEach(offer => {
        new mapboxgl.Marker().setLngLat(offer.coordinates).addTo(this.map);
      });
    }
    return (
      <div>
        <div
          ref={el => (this.mapContainer = el)}
          style={{
            width: "100%"
          }}
        />
      </div>
    );
  }
}

export default Map;
