import React from "react";
import "../Style/CheckoutProduct.css";
import { useStateValue } from "../UseContext/StateProvider";
import Slide from "react-reveal/Slide";

const CheckoutProduct = ({ id, image, title, price, rating }) => {
  const [{ basket }, dispatch] = useStateValue();

  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };
  return (
    <Slide left>
      <div className="checkoutProduct">
        <img className="checkoutProduct_image" src={image} alt="" />
        <div className="checkoutProduct_info">
          <p className="checkoutProduct_title">
            <strong>{title}</strong>
          </p>
          <p className="checkoutProduct_price">
            <small>$</small>
            <strong>{price}</strong>
          </p>
          <div className="checkoutProduct_rating">
            {Array(rating)
              .fill()
              .map((_, i) => (
                <p>⭐</p>
              ))}
          </div>
          <button onClick={removeFromBasket}>Remove from Basket</button>
        </div>
      </div>
    </Slide>
  );
}

export default CheckoutProduct;
