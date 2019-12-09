import React from "react";
import { Link } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
const Popup = props => {
  return (
    <>
      <div>{props.offers.name}</div>
      <BrowserRouter>
        <Link to="/offer/:id">Offer details</Link>
      </BrowserRouter>
    </>
  );
};

export default Popup;
