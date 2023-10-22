import React from "react";
import SNavbar from "./navbar.styles";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <SNavbar>
      <img src="/assets/shared/desktop/logo.svg" alt="" className="logo-img" />
      <div className="options">
        <span className="elements">HOME</span>
        <Link to="About-Us" className="route-about" >
          <span className="elements">ABOUT US</span>
        </Link>
        <span className="elements">CREATE YOUR PLAN</span>
      </div>

      <button className="ham-button">
        <img src="./assets/shared/mobile/icon-hamburger.svg" alt="" />
      </button>
    </SNavbar>
  );
}

export default Navbar;
