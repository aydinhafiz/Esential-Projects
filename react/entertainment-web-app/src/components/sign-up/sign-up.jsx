import React from "react";
import { SSignUpHeader } from "./sign-up.styles";
import { Link } from "react-router-dom";

function SignUp() {
  return (
    <SSignUpHeader>
      <div className="signup-page">
        <h2 className="title-signup">Sign Up</h2>
        <div className="signup-info">
          <input
            className="signup-email"
            type="email"
            placeholder="Email address"
          />
          <input
            className="signup-password"
            type="password"
            placeholder="Password"
          />
          <input
            className="repeat-password"
            type="Repeat password"
            placeholder="Password"
          />
        </div>
        <button className="login-your-account">Create an account</button>
        <h3 className="dont-have-account">
          Already have an account?{" "}
          <Link to={"/login"}>
            {" "}
            <span className="login">Login</span>
          </Link>
        </h3>
      </div>
    </SSignUpHeader>
  );
}
export default SignUp;
