import React from "react";
import { SLoginHeader } from "../components/login-page/login-page.stlyes";
import { Link } from "react-router-dom";

function Login() {
  return (
    <SLoginHeader>
      <div className="login-page">
        <h2 className="title-login">Login</h2>
        <div className="login-info">
          <input
            className="login-email"
            type="email"
            placeholder="Email address"
          />
          <input
            className="login-password"
            type="password"
            placeholder="Password"
          />
        </div>
        <button className="login-your-account">Login to your account</button>
        <h3 className="dont-have-account">
          Don’t have an account?{" "}
          <Link to={"/signup"}>
            <span className="sign-up">Sign Up</span>
          </Link>
        </h3>
      </div>
    </SLoginHeader>
  );
}
export default Login;
