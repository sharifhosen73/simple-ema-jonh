import React from "react";
import "./Cart.css";

const Cart = ({ cart, clearCart, children }) => {
  // console.log(cart);
  let total = 0;
  let quantity = 0;
  for (const product of cart) {
    quantity = quantity + product.quantity;
    total = total + product.price * product.quantity;
  }
  const shipping =
    total > 500 ? (total * 0.05).toFixed(0) : total > 100 ? 20 : 0;
  const tax = total > 100 ? (total * 0.1).toFixed(0) : 0;
  // convert to string into integer +
  const grandTotal = (total + +shipping + +tax).toFixed(0);
  return (
    <div className="cart-details">
      <h1>Order Summary</h1>
      <h3>Select Items: {quantity}</h3>
      <p>Total Price: {total}</p>
      <p>Shipping: {shipping}</p>
      <p>Tax: {tax}</p>
      <h3>GrandTotal: {grandTotal}</h3>
      <button className="clear-cart" onClick={clearCart}>
        Clear Cart
      </button>
      {/* <button className="clear-cart">Review Order</button> */}
      {children}
    </div>
  );
};

export default Cart;
