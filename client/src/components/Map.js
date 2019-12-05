import React, { Component } from "react";
import MapboxGeocoder from "@mapbox/mapbox-gl-geocoder";
import mapboxgl from "mapbox-gl";

mapboxgl.accessToken =
  "pk.eyJ1IjoiZmF0bWExNCIsImEiOiJjazNzbDVwcGYwN24xM2hvNG5ncDlmNDBqIn0.lUgBAvFq5lq9DHoVrK032A";

class Map extends Component {
  state = {
    coordinates: [],
    zoom: 1.5
  };

  componentDidMount() {
    const { coordinates, zoom } = this.state;

    const map = new mapboxgl.Map({
      container: this.mapContainer,
      style: "mapbox://styles/mapbox/streets-v9",
      center: [13.4, 52.52],
      zoom
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

    map.addControl(geocoder);
    map.on("zoomend", () => {
      const bounds = map.getBounds();
      this.props.setBounds({
        southWest: bounds._sw,
        northEast: bounds._ne
      });
    });
    map.on("load", () => {
      map.addSource("single-point", {
        type: "geojson",
        data: {
          type: "FeatureCollection",
          features: []
        }
      });

      geocoder.on("result", event => {
        const resultGeocoder = map
          .getSource("single-point")
          .setData(event.result);

        this.setState({
          coordinates: [
            resultGeocoder._data.center[0],
            resultGeocoder._data.center[1]
          ],
          zoom: map.getZoom().toFixed(2)
        });
      });
    });
  }

  render() {
    const { coordinates, zoom } = this.state;

    return (
      <div>
        <div
          ref={el => (this.mapContainer = el)}
          style={{
            position: "absolute",
            top: 0,
            bottom: 0,
            width: "100%"
          }}
        />
      </div>
    );
  }
}

export default Map;
