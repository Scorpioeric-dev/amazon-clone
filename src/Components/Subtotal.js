import React from "react";
import "../Style/Subtotal.css";
import CurrencyFormat from "react-currency-format";
//custom hook
import { useStateValue } from "../UseContext/StateProvider";
import { getBasketTotal } from "../Reducer";
import { useHistory } from "react-router-dom";

function Subtotal() {
    const history = useHistory();
  const [{ basket }, dispatch] = useStateValue();

  //  console.log(getBasketTotal)

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket.length} items): <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />

      <button onClick={e => history.push('/payment')}>Proceed to Checkout</button>
    </div>
  );
}

export default Subtotal;
