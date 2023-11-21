import React from "react";
import { cards } from "../../resturants";
import Shimmer from "./Shimmer.jsx";
import "../index.css";
import { RESTURANT_IMAGE_URL } from "../utils/constants";
import { useParams } from "react-router-dom";
import useResturantMenu from "../utils/useResturantMenu.js";

const ResturantMenu = () => {
  const { resId } = useParams();

  const resMenu = useResturantMenu(resId);

  if (resMenu === null) {
    return <Shimmer />;
  }

  const { name, costForTwoMessage, cuisines } = cards[0]?.card?.card?.info;

  const { title } =
    resMenu[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  const { itemCards } =
    resMenu[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  return (
    <div className="menu">
      <h1>{name}</h1>
      <h1>
        {costForTwoMessage} - {cuisines.join(", ")}
      </h1>
      <div className="res">
        <h2>{title}</h2>
        <ul className="card-list">
          {itemCards.map((item) => (
            <li key={item.card.info.id} className="seperate">
              <img
                src={
                  item?.card?.info?.imageId
                    ? RESTURANT_IMAGE_URL + item?.card?.info?.imageId
                    : "https://previews.123rf.com/images/vicu9/vicu91801/vicu9180100673/94404481-picture-blurred-for-background-abstract-blur-food-in-restaurant.jpg"
                }
                alt="image"
                className="item-logo"
              />
              {item?.card?.info?.name} - {item?.card?.info?.price / 100}
            </li>
          ))}
        </ul>
      </div>
      <div className="res">
        <h2>
          {
            resMenu[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card
              .title
          }
        </h2>
        <ul className="card-list">
          {resMenu[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card.itemCards.map(
            (item) => (
              <li key={item.card.info.id} className="seperate">
                <img
                  src={
                    item?.card?.info?.imageId
                      ? RESTURANT_IMAGE_URL + item?.card?.info?.imageId
                      : "https://previews.123rf.com/images/vicu9/vicu91801/vicu9180100673/94404481-picture-blurred-for-background-abstract-blur-food-in-restaurant.jpg"
                  }
                  alt="image"
                  className="item-logo"
                />
                {item?.card?.info?.name} - {item?.card?.info?.price / 100}
              </li>
            )
          )}
        </ul>
      </div>
      <div>
        <h2>
          {
            resMenu[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card?.card
              .title
          }
        </h2>
        <ul className="card-list">
          {resMenu[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card?.card.itemCards.map(
            (item) => (
              <li key={item.card.info.id} className="seperate">
                <img
                  src={
                    item?.card?.info?.imageId
                      ? RESTURANT_IMAGE_URL + item?.card?.info?.imageId
                      : "https://previews.123rf.com/images/vicu9/vicu91801/vicu9180100673/94404481-picture-blurred-for-background-abstract-blur-food-in-restaurant.jpg"
                  }
                  alt="image"
                  className="item-logo"
                />
                {item?.card?.info?.name} - {item?.card?.info?.price / 100}
              </li>
            )
          )}
        </ul>
      </div>
      <div>
        <h2>
          {
            resMenu[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[4]?.card?.card
              .title
          }
        </h2>
        <ul className="card-list">
          {resMenu[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[4]?.card?.card.itemCards.map(
            (item) => (
              <li key={item.card.info.id} className="seperate">
                <img
                  src={
                    item?.card?.info?.imageId
                      ? RESTURANT_IMAGE_URL + item?.card?.info?.imageId
                      : "https://previews.123rf.com/images/vicu9/vicu91801/vicu9180100673/94404481-picture-blurred-for-background-abstract-blur-food-in-restaurant.jpg"
                  }
                  alt="image"
                  className="item-logo"
                />
                {item?.card?.info?.name} - {item?.card?.info?.price / 100}
              </li>
            )
          )}
        </ul>
      </div>
      <div>
        <h2>
          {
            resMenu[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[5]?.card?.card
              .title
          }
        </h2>
        <ul className="card-list">
          {resMenu[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[5]?.card?.card.itemCards.map(
            (item) => (
              <li key={item.card.info.id} className="seperate">
                <img
                  src={
                    item?.card?.info?.imageId
                      ? RESTURANT_IMAGE_URL + item?.card?.info?.imageId
                      : "https://previews.123rf.com/images/vicu9/vicu91801/vicu9180100673/94404481-picture-blurred-for-background-abstract-blur-food-in-restaurant.jpg"
                  }
                  alt="image"
                  className="item-logo"
                />
                {item?.card?.info?.name} - {item?.card?.info?.price / 100}
              </li>
            )
          )}
        </ul>
      </div>
      <div>
        <h2>
          {
            resMenu[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[6]?.card?.card
              .title
          }
        </h2>
        <ul className="card-list">
          {resMenu[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[6]?.card?.card.itemCards.map(
            (item) => (
              <li key={item.card.info.id} className="seperate">
                <img
                  src={
                    item?.card?.info?.imageId
                      ? RESTURANT_IMAGE_URL + item?.card?.info?.imageId
                      : "https://previews.123rf.com/images/vicu9/vicu91801/vicu9180100673/94404481-picture-blurred-for-background-abstract-blur-food-in-restaurant.jpg"
                  }
                  alt="image"
                  className="item-logo"
                />
                {item?.card?.info?.name} - {item?.card?.info?.price / 100}
              </li>
            )
          )}
        </ul>
      </div>
    </div>
  );
};

export default ResturantMenu;
