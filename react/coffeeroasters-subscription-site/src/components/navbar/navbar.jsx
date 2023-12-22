import React from "react";
import SNavbar from "./navbar.styles";
import { Link } from "react-router-dom";
import ScrollToTop from "../scroll-to-top";

function Navbar() {
  return (
    <SNavbar>
      <ScrollToTop />
      <Link to="/" className="logo-link">
        <img
          src="/assets/shared/desktop/logo.svg"
          alt=""
          className="logo-img"
        />
      </Link>
      <div className="options">
        <Link to="/" className="route-navbar">
          <span className="elements">HOME</span>
        </Link>
        <Link to="/about-Us" className="route-navbar">
          <span className="elements">ABOUT US</span>
        </Link>
        <Link to="/subscribe" className="route-navbar">
          <span className="elements no-margin">CREATE YOUR PLAN</span>
        </Link>
      </div>

      <button className="ham-button">
        <img src="./assets/shared/mobile/icon-hamburger.svg" alt="" />
      </button>
    </SNavbar>
  );
}

export default Navbar;
