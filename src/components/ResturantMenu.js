import React, { useState } from "react";
import { cards } from "../Data/resturants.js";
import Shimmer from "./Shimmer.js";
import "../index.css";
import { RESTURANT_IMAGE_URL } from "../utils/constants.js";
import { useParams } from "react-router-dom";
import useResturantMenu from "../utils/useResturantMenu.js";
import ResturantCategory from "./ResturantCategory.js";

const ResturantMenu = () => {
  const { resId } = useParams();
  const [showIndex, setShowIndex] = useState(null);

  const resMenu = useResturantMenu(resId);

  if (resMenu === null) {
    return <Shimmer />;
  }

  const { name, costForTwoMessage, cuisines } = resMenu?.cards[0]?.card?.card?.info;

  const categories =
    resMenu?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <div>
      <h1 className="menu">{name}</h1>
      <h2 className="menu">
        {costForTwoMessage} - {cuisines.join(", ")}
      </h2>
      <div className="res">
        {categories.map((category, index) => (
            <ResturantCategory
              data={category.card?.card}
              key={category.card?.card?.title}
              toggle={index === showIndex ? true : false}
              setShowIndex={() => setShowIndex(index)}
            />
        ))}
      </div>
    </div>
  );
};

export default ResturantMenu;
