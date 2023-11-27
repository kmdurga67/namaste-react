import React from "react";
import "../index.css";
import { RESTURANT_IMAGE_URL } from "../utils/constants";

const ItemList = (props) => {
  const { items } = props;
  return (
    <div>
      {items.map((item) => (
        <div key={item.card.info.id} className="item-container">
          <div className="items">
            <span>{item.card.info.name}</span>&nbsp;&nbsp; {"-"} &nbsp;&nbsp;
            <span>₹ {item.card.info.price / 100}</span>
            <button className="add-button">Add +</button>
            <img
            src={
              item?.card?.info?.imageId
                ? RESTURANT_IMAGE_URL + item?.card?.info?.imageId
                : "https://previews.123rf.com/images/vicu9/vicu91801/vicu9180100673/94404481-picture-blurred-for-background-abstract-blur-food-in-restaurant.jpg"
            }
            alt="image"
            className="item-logo"
          />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
