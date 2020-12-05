import React from "react";
import { useStateValue } from "../UseContext/StateProvider";
import "../Style/Product.css";

const Product = ({ id, title, image, price, rating }) => {
  const [{ basket }, dispatch] = useStateValue();

  console.log("my basket >>>", basket);
  const addToBasket = () => {
    //dispatch the function from reducer to add an item into the bucket
    //item is the object being pushed into the bucket (initialState)

    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };
  return (
    <div className="product">
      <div className="product_info">
        <p>{title}</p>
        <p className="product_price">
          <strong>$</strong>
          <strong>{price}</strong>
        </p>
        <div className="product_rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>
      </div>
      <img src={image} alt="" />
      <button onClick={addToBasket} >Add to Basket</button>
    </div>
  );
};

export default Product;
