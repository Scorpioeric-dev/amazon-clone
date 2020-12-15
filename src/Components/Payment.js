import React from "react";
import "../Style/Payment.css";
import { useStateValue } from "../UseContext/StateProvider";
import CheckoutProduct from "../Components/CheckoutProduct";
import { Link } from "react-router-dom";

const Payment = () => {
  const [{ basket, user }, dispatch] = useStateValue();
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
            <p>{user?.email}</p>
            <p>123 React Lane</p>
            <p>Las Vegas, NV</p>
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
          
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
