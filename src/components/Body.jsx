import React, { useState } from "react";
import ResturantCard from "./ResturantCard";
import { resObj } from "../../data";
import "../index.css";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [resturants, setResturants] = useState(resObj);
  const [filteredResturant, setFilteredResturant] = useState(resObj);
  const [searchText, setSearchText] = useState("");

  const onlineStatus = useOnlineStatus();

  // useEffect(() =>{
  //   fetchData();
  // },[]);

  // const fetchData = async ()=> {

  //   const data = await fetch("https://www.swiggy.com/api/seo/getListing?lat=25.3176452&lng=82.9739144")
  // // "https://www.swiggy.com/dapi/restaurants/search/v3?lat=25.3176452&lng=82.9739144&str=North%20Indian&trackingId=a71f7424-3f6c-51b1-ecfd-d5b823a59827&submitAction=ENTER&queryUniqueId=e6317c49-6c33-5211-c3aa-167197082c98");

  //   const json = await data.json();

  //   console.log(json);

  // // setResturants(json.data.card[2].data.data.cards);
  // }

  const filterResturants = () => {
    const resturant = resturants.filter(
      (res) => res.card.card.info.avgRating >= 4
    );
    setFilteredResturant(resturant);
  };

  const searchedResturant = () => {
    const searchedValue = resturants.filter((res) =>
      res.card.card.info.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredResturant(searchedValue);
    setSearchText("");
  };

  // if(resturants.length === 0){
  //   return <Shimmer />;
  // }

  if (onlineStatus === false) {
    return (
      <h1 style={{alignItems:"center", fontSize:'48px'}}>
        Looks Like You Are Offline!! Please Check Your Internet Connection.
      </h1>
    );
  }

  return resturants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button className="search-btn" onClick={searchedResturant}>
            Search
          </button>
        </div>
        <button className="btn-filter" onClick={filterResturants}>
          Top Rated Resturants
        </button>
      </div>
      <div className="res-container">
        {filteredResturant.map((resturant) => (
          <Link
            to={"/resturants/" + resturant.card.card.info.id}
            key={resturant.card.card.info.id}
            className="link"
          >
            <ResturantCard resData={resturant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
