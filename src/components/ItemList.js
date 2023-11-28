import React from "react";
import "../index.css";
import { RESTURANT_IMAGE_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const ItemList = (props) => {
  const { items } = props;

  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    //dispatch an item where payload is that where arguments going to pass to the addItem()
    dispatch(addItem(item));
  };

  return (
    <div>
      {items.map((item) => (
        <div key={item.card.info.id} className="item-container">
          <div className="items">
            <span>{item.card.info.name}</span>&nbsp;&nbsp; {"-"} &nbsp;&nbsp;
            <span>₹ {item.card.info.price / 100 || item.card.info.defaultPrice / 100}</span>
            <p className="description">{item.card.info.description || null}</p>
            <button className="add-button" onClick={() => handleAddItem(item)}>
              Add +
            </button>
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
