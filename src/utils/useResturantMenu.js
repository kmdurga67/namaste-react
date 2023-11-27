import { useEffect, useState } from "react";
import { MENU_URL } from "./constants";
import { cards } from "../Data/resturants";

const useResturantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);
  useEffect(() => {
    cards ? fetchRestaurants() : console.log("Error found");
    //fetchRestaurants();
  }, []);

  const fetchRestaurants = async () => {
    // const resturants = await fetch(MENU_URL + resId);

    // const json = await resturants.json();
    // console.log(json);
    // setResInfo(json.data);
    setResInfo(cards);
  };

  return resInfo;
};

export default useResturantMenu;
