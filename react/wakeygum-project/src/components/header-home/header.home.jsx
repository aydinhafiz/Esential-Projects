import React from "react";
import "./header.home.css";
///////////////////////////IMAGES////////////////////////////////////
import logoImg from "../../assets/wakey-project-logo.png";
////////////////////////////////////////////////////////////////////

function HeaderHome() {
  return (
    <div className="header-home">
      <div className="content-header">
        <div className="logo-image">
          <img src={logoImg} alt="" className="logo" />
        </div>
        <div className="info-items">
          <button className="info-item">Kontakt</button>
          <button className="info-item">Über uns</button>
          <button className="info-item">Bestellen</button>
        </div>
      </div>
    </div>
  );
}
export default HeaderHome;
