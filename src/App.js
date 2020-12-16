import "./App.css";
import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Components/Header";
import Checkout from "./Components/Checkout";
import Login from "./Components/Login";
import Home from "./Components/Home";
import { auth } from "./firebase";
import { useStateValue } from "./UseContext/StateProvider";
import Payment from "./Components/Payment";
import { loadStripe } from "@stripe/stripe-js";
//HOC wrapping the component processing payment calling the promise public key
import { Elements } from "@stripe/react-stripe-js";

//A public key from stripe --
const promise = loadStripe(
  "pk_test_51HypvfD6G0dITM6NOARz2KYnAPWrxJsHQT60yd3eud81wcEPtHo7Ll0yPdIFvu8M0blGOTRgmSJSIywnhOkiUP2U00rd8sR40E"
);

const App = () => {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>", authUser);
      if (authUser) {
        //The user just logged in /the user was logged in
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        //the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/login">
            <Login />
          </Route>

          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>

          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>

          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
