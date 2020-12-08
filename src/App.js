import "./App.css";
import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Components/Header";
import Checkout from "./Components/Checkout";
import Login from "./Components/Login";
import Home from "./Components/Home";
import { auth } from "./firebase";
import { useStateValue } from "./UseContext/StateProvider";

const App = () => {
  const [{},dispatch] = useStateValue()

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>", authUser);
      if (authUser) {
        //The user just logged in /the userwas logged in
        dispatch({
          type:'SET_USER',
          user:authUser
        })
      } else {
        //the user is logged out
        dispatch({
          type:"SET_USER",
          user:null
        })
      }
    });
  }, []);

  return (
    <Router>
      <div className="app">
        {/*Header rendered throughout application*/}

        <Switch>
          <Route path="/login">
            <Login />
          </Route>

          <Route path="/checkout">
            <Header />
            <Checkout />
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
