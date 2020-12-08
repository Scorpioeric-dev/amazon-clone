import React, { useState } from "react";
import "../Style/Login.css";
import { Link, useHistory } from "react-router-dom";
import { auth } from "../firebase";

const Login = () => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) => {
    e.preventDefault();
    auth.signInWithEmailAndPassword(email, password).then(auth => {
      history.push("/");
    }).catch(error => alert(error.message))
  };


  
  const registar = (e) => {
    e.preventDefault();

    auth
      //passing in the values from state
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        //successfully creates a new user & with the email & password entered
        console.log(auth);
        if (auth) {
          history.push("/");
        }
      })
      .catch((error) => alert(error.message));
  };
  return (
    <div className="login">
      <Link to="/">
        <img
          className="login_logo"
          src="http://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          alt=""
        />
      </Link>
      <div className="login_container">
        <h1>Sign-in</h1>
        <form>
          <h5>E-mail</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="login_signInButton" onClick={signIn} type="submit">
            Sign In
          </button>
        </form>
        <p>
          <strong>
            By signing-in you agree to AMAZON FAKE CLONE Conditions of Use &
            Sale. Please see our Privacy Notice, our Cookies Notice and our
            Interest-Based Ads
          </strong>
        </p>
        <button className="login_registerButton" onClick={registar}>
          Create your Amazon Account
        </button>
      </div>
    </div>
  );
};
export default Login;
