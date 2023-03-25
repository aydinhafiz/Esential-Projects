import React from "react";
import devJobLogo from "../assets/devjob.logo.png";
import sunimg from "../assets/sun.png";
import mondimg from "../assets/mond.png";
import "./header.css";
function Header() {
  return (
    <div className="header">
      <div className="navbar">
        <img className="logoimg" src={devJobLogo} alt="" />
        <div className="darkmode">
          <img className="sunimg" src={sunimg} alt="" />
          <button className="turn-on-or-light"></button>
          <img className="mondimg" src={mondimg} alt="" />
        </div>
      </div>
      <div className="content">
        <div className="search-bar">
          <img className="searchimg" src="" alt="" />
          <input type={Text} placeholder="" />
        </div>
        <div className="gps-bar">
          <img className="gpsimg" src="" alt="" />
          <input type={Text} placeholder="" />
        </div>
        <div className="click-for-search">
          <img className="boximg" src="" alt="" />
          <span></span>
          <button className="search-button"></button>
        </div>
      </div>
    </div>
  );
}

export default Header;
