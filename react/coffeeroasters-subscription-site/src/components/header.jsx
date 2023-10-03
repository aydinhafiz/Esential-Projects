import React from "react";
import SHeader from "./header.styles";

function Header() {
  return (
    <SHeader>
      <img src="/assets/shared/desktop/logo.svg" alt="" className="logo-img" />
      <div className="options">
        <span className="elements">HOME</span>
        <span className="elements">ABOUT US</span>
        <span className="elements">CREATE YOUR PLAN</span>
      </div>
    </SHeader>
  );
}

export default Header;
