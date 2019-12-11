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

const createOffer = (
  name,
  price,
  description,
  quantity,
  coordinates,
  tagline,
  imageUrls
) => {
  const promises = [];
  for (let i = 0; i < imageUrls.length; i++) {
    const uploadData = new FormData();
    uploadData.append("imageUrl", imageUrls[i]);
    promises.push(handleUpload(uploadData));
  }
  return Promise.all(promises)
    .then(response => {
      const imageUrls = response.map(value => value.secure_url);
      return axios.post("http:/api/offers", {
        name,
        price,
        description,
        quantity,
        coordinates,
        tagline,
        imageUrls
      });
    })
    .then(response => {
      return response.data;
    })
    .catch(err => {
      throw err;
    });
};

const deleteOffer = id => {
  return axios.delete(`/api/offers/${id}`);
};

const getOfferDetails = id => {
  return axios
    .get(`/api/offers/${id}`)
    .then(response => {
      return response.data;
    })
    .catch(err => {
      return err.response.data;
    });
};

const handleUpload = theFile => {
  return axios.post("/api/upload", theFile).then(response => response.data);
};

export { searchOffers, createOffer, getOfferDetails, handleUpload };
