import React from "react";
import "./signup.css";
import { Link } from "react-router-dom";
function SignUp() {
  // console.log(axios); Log ettim ve error alındı.
  // axios("https://product-feedbacks-api-app.herokuapp.com");
  // async function getData() {
  //   const response = await axios(
  //     "https://product-feedbacks-api-app.herokuapp.com"
  //   );
  //   console.log(response);
  // }
  // getData()
  fetch("https://product-feedbacks-api-app.herokuapp.com");
  return (
    <div className="container-signup">
      <div className="content-signup">
        <h2 className="Sign-up">Sign Up</h2>
        <div className="sign-up-process">
          <div className="sign-up-informations">
            <input className="email" type="email" placeholder="Email address" />
            <input
              className="password"
              type="password"
              placeholder="Password"
            />
            <input
              className="repeat-password"
              type="password"
              placeholder="Repeat password"
            />
          </div>
          <div className="sign-up-button">
            <Link to="/home">
            <button className="button-for-sign-up">Create an account</button>
            </Link>
          </div>
          <p className="dont-have-account">
            Don’t have an account? <h2 className="login">Login</h2>{" "}
          </p>
        </div>
      </div>
    </div>
  );
}
export default SignUp;
