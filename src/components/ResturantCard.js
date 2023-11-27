import React from "react";
import "../index.css";
import { RESTURANT_IMAGE_URL } from "../utils/constants";

const ResturantCard = (props) => {
  const { resData } = props;

  const { cloudinaryImageId, name, cuisines, avgRating, locality, areaName } =
    resData?.card?.card?.info;
  const { slaString } = resData?.card?.card?.info?.sla;

  const styleCard = {
    backgroundColor: "#f0f0f0",
    marginLeft: "10px",
  };

  return (
    <div className="res-card" style={styleCard}>
      <img
        className="res-logo"
        src={RESTURANT_IMAGE_URL + cloudinaryImageId}
        alt="res-logo"
      />
      <h1>{name}</h1>
      <div className="res-body">
        <h4>{cuisines.join(", ")}</h4>
        <p>
          {locality}
          {","} {areaName}
        </p>
        <h4>{avgRating} star</h4>
        <h4>{slaString}</h4>
      </div>
    </div>
  );
};

//Higher Order Component - are pure functions it will not change the behaviour of last component only update it or enhance it by adding UI or by passing props

export const withdeliveryTime = (ResturantCard) => {
  return (props) => {
    return (
      <div>
        <label className="higher">Delivery Time less than 30mins</label>
        <ResturantCard {...props} />
      </div>
    );
  };
};

export default ResturantCard;
