import React, { useState, useEffect } from "react";
import "../Style/Payment.css";
import { useStateValue } from "../UseContext/StateProvider";
import CheckoutProduct from "../Components/CheckoutProduct";
import { Link, useHistory } from "react-router-dom";
//grabbing the HOC's from Stripe
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "../Reducer";
import axios from "../axios";

const Payment = () => {
  const [{ basket, user }, dispatch] = useStateValue();
  const history = useHistory();

  const stripe = useStripe();
  const elements = useElements();

  const [succeeded, setSucceeded] = useState(false);
  const [processing, setProcessing] = useState("");
  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [clientSecret, setClientSecret] = useState(true);

  useEffect(() => {
    //generate the special stripe secret which allows us to charge the customer
    const getClientSecret = async () => {
      const response = await axios({
        method: "post",
        url: `/payments/create?total=${getBasketTotal(basket) * 100}`,
        //Stripe expects the total in a currencies subunit 1 dollar = 100 cents
      });

      setClientSecret(response.data.clientSecret);
    };

    getClientSecret();
  }, [basket]);

  console.log("What is the secret", clientSecret);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setProcessing(true); //Controls the button

    const payload = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      }).then(({ paymentIntent }) => {
        //payment Intent = payment confirmation
        setSucceeded(true);
        setError(null);
        setProcessing(false);

        history.replace("/orders");
      });

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
                <button disabled={processing || disabled || succeeded}>
                  <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                </button>
              </div>
              {error && <div>{error}</div>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
