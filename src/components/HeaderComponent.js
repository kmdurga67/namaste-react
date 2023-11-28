import React, { useState, useContext } from "react";
import "../index.css";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const HeaderComponent = () => {
  const [btnName, setName] = useState("Login");
  const onlineStatus = useOnlineStatus();

  const chnageButton = () => {
    btnName === "Login" ? setName("Logout") : setName("Login");
  };

  const data = useContext(UserContext);

  //selector hook (a normal javaScript function) - subscribing the store using react-redux
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="header">
      <div className="logo-container">
        <img src={LOGO_URL} alt="Food Icon" />
        <h1>Food Resturant</h1>
      </div>
      <div className="nav-items">
        <ul>
          <li>Online Status: {onlineStatus === true ? "🟢" : "🔴"}</li>
          <li>
            <Link to="/"> Home </Link>
          </li>
          <li>
            <Link to="/about"> About </Link>
          </li>
          <li>
            <Link to="/contact"> Contact Us </Link>
          </li>
          <li>
            <Link to="/grocery"> Grocery </Link>
          </li>
          <li>
            <Link to="/cart"> Cart  {cartItems.length === 0 ? null : "("+cartItems.length + " items)"}</Link>
          </li>
          <li>
            <button className="login" onClick={chnageButton}>
              {btnName}
            </button>
          </li>
          <li>
            <Link> {data.loggedUser} </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HeaderComponent;
