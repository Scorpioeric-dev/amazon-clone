import React, { useState } from "react";
import "../Style/Payment.css";
import { useStateValue } from "../UseContext/StateProvider";
import CheckoutProduct from "../Components/CheckoutProduct";
import { Link } from "react-router-dom";
//grabbing the HOC's from Stripe
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "../Reducer";

const Payment = () => {
  const [{ basket, user }, dispatch] = useStateValue();
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);

  const handleSubmit = (e) => {
    //Stripe stuff
  };

  const handleChange = (event) => {
    setDisabled(event.empty);
    setError(event.error ? event.error.message : "");
  };
  return (
    <div className="payment">
      <div className="payment_container">
        <h1>
          <strong>
            Checkout (<Link to="/checkout">{basket?.length} items </Link>)
          </strong>
        </h1>
        {/*payment section - delivery address*/}

        <div className="payment_section">
          <div className="payment_title">
            <h3>Delivery Address</h3>
          </div>
          <div className="payment_address">
            <strong>
              <p>{user?.email}</p>
              <p>123 React Lane</p>
              <p>Las Vegas, NV</p>
            </strong>
          </div>
        </div>

        {/*payment section - review Items*/}

        <div className="payment_section">
          <div className="payment_title">
            <h3>Review items and delivery</h3>
          </div>
          <div className="payment_items">
            {/*basket -- calling in the checkoutProduct component */}

            {basket.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        </div>

        {/*payment section - Payment Method*/}
        <div className="payment_section">
          <div className="payment_title">
            <h3>Payment Method</h3>
          </div>
          <div className="payment_details">
            {/*Stripe Magic*/}
            <form onSubmit={handleSubmit}>
              <CardElement onChange={handleChange} />
              <div className="payment_priceContainer">
                <CurrencyFormat
                  renderText={(value) => (
                    <>
                      <h3>Order Total: {value}</h3>
                    </>
                  )}
                  decimalScale={2}
                  value={getBasketTotal(basket)}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"$"}
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
