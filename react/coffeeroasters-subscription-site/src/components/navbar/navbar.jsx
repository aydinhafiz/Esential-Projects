import React from "react";
import SHeader from "./navbar.styles";

function Navbar() {
  return (
    <SHeader>
      <img src="/assets/shared/desktop/logo.svg" alt="" className="logo-img" />
      <div className="options">
        <span className="elements">HOME</span>
        <span className="elements">ABOUT US</span>
        <span className="elements">CREATE YOUR PLAN</span>
      </div>

      <button class="ham-button">
        <img src="./assets/shared/mobile/icon-hamburger.svg" alt="" />
      </button>
    </SHeader>
  );
}

export default Navbar;
