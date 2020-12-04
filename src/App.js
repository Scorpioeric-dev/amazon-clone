import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Components/Header";
import Checkout from "./Components/Checkout";
import Home from "./Components/Home";

function App() {
  return (
    <Router>
      <div className="app">
      {/*Header rendered throughout application*/}
        <Header />
         <Switch>
          <Route path="/checkout">
            <Checkout />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
