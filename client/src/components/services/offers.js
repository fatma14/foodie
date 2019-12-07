import axios from "axios";

const searchOffers = bounds => {
  return axios
    .get(
      `/api/offers?swLat=${bounds.southWest.lat}&swLng=${bounds.southWest.lng}&neLat=${bounds.northEast.lat}&neLng=${bounds.northEast.lng}`
    )
    .then(response => {
      return response.data;
    })
    .catch(err => {
      return err.response.data;
    });
};

const createOffer = (name, price, description, quantity, coordinates) => {
  return axios
    .post("http:/api/offers", {
      name,
      price,
      description,
      quantity,
      coordinates
    })
    .then(response => {
      return response.data;
    })
    .catch(err => {
      return err.response.data;
    });
};

const deleteOffer = id => {
  return axios.delete(`api/offers/${id}`);
};

export { searchOffers, createOffer };
