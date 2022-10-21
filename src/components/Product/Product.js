import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import "./Product.css";

const Product = (props) => {
  const { handleAddToCart, product } = props;
  const { img, name, price, ratings, seller } = product;

  return (
    <div className="show-product">
      <div className="show-product-details">
        <img src={img} alt="" />
        <h3>{name}</h3>
        <p>Price: ${price}</p>
        <span>Manufacturer: {seller}</span> <br />
        <span>Ratings: {ratings}</span>
      </div>
      <button
        className="product-button"
        onClick={() => handleAddToCart(product)}
      >
        <p>Add To Cart</p>
        <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
      </button>
    </div>
  );
};

export default Product;
