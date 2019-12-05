import axios from "axios";

const searchOffers = bounds => {
  axios
    .get(
      `/offers?swLat=${bounds.southWest.lat}&swLng=${bounds.southWest.lng}&neLat=${bounds.northEast.lat}&neLng=${bounds.northEast.lng}`
    )
    .then(response => {
      return response.data;
    })
    .catch(err => {
      return err.response.data;
    });
};

export { searchOffers };
