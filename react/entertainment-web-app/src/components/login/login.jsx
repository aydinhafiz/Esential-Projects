import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="container">
      <div className="content">
        <h2 className="login">Login</h2>
        <div className="login-process">
          <div className="login-informations">
            <input className="email" type="email" placeholder="Email address" />
            <input
              className="password"
              type="password"
              placeholder="Password"
            />
          </div>

          <div className="login-button">
            <Link to="/home">
              <button className="button-for-login">
                {" "}
                Login to your account
              </button>
            </Link>
          </div>
          <p className="dont-have-account">
            Don’t have an account? <h2 className="sign-up">Sign Up</h2>{" "}
          </p>
        </div>
      </div>
    </div>
  );
}
export default Login;
