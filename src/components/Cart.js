import React, { useState, useEffect } from "react";
import "../index.css";
import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice.js";

const Cart = () => {
  const [totalPrice, setTotalPrice] = useState(0);
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  useEffect(() => {
    calculateTotalPrice();
  }, [cartItems]);

  const calculateTotalPrice = () => {
    let total = 0;
    if (cartItems.length > 0) {
      cartItems.forEach((item) => {
        const price =
          (item?.card?.info?.price/100) ||
          (item?.card?.info?.defaultPrice/100) ||
          0;
        total = total + price;
        console.log(total);
      });
      setTotalPrice(total);
    } else {
      setTotalPrice(0);
    }
  };

  const handleClear = () => {
    dispatch(clearCart());
  };

  return (
    <div className="cart-header">
      <h1>Cart Items</h1>
      <div className="cart-items">
        <button className="clear" onClick={handleClear}>
          Clear Cart
        </button>
        {cartItems.length === 0 ? (
          <h1>Oops!! Your cart is Empty</h1>
        ) : (
          <ItemList items={cartItems} />
        )}
      </div>
      {cartItems.length === 0 ? null : (
        <h1>Total Price: ₹{totalPrice.toFixed(2)}</h1>
      )}
    </div>
  );
};

export default Cart;
