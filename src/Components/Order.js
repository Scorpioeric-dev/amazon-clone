import React from "react";
import "../Style/Order.css";
import moment from "moment";
import CheckoutProduct from "../Components/CheckoutProduct";
import CurrencyFormat from "react-currency-format";

const Order = ({ order }) => {
  return (
    <div className="order">
      <h2>Order #  <strong>{order.id}</strong></h2>
      <p classname="order_id">
       
      </p>
      <strong>
        <p>{moment.unix(order.data.created).format("MMMM Do YYYY, h:mma")}</p>
      </strong>

      {order.data.basket?.map((item) => (
        <CheckoutProduct
          id={item.id}
          title={item.title}
          image={item.image}
          price={item.price}
          rating={item.rating}
          hideButton
        />
      ))}

      <CurrencyFormat
        renderText={(value) => (
          <h3 className="order_total">Order Total: {value}</h3>
        )}
        decimalScale={2}
        value={order.data.amount / 100}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
    </div>
  );
};

export default Order;
