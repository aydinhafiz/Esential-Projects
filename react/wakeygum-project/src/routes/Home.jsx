import React from "react";
import "../home.css";
import Header from "../components/home-header/home.header";
import HeaderContent from "../components/header-content/header-content";
import logoInsure from "../assets/insure-logo.svg";
import facebook from "../assets/facebook.svg";
import twitter from "../assets/twitter.svg";
import instagram from "../assets/instagram.svg";
/////////////////////////IMAGES//////////////////////////////

import MainContent from "../components/main-content-and-they-components/main-content/main-content";
////////////////////////////////////////////////////////////
function Home() {
  return (
    <div className="home-container">
      <Header />
      <HeaderContent />
      <MainContent />
      <div className="section-end">
        <div className="logo-side">
          <img src={logoInsure} alt="" className="last-logo" />
        </div>
        <div className="social-media">
          <img src={facebook} className="facebook" alt="" />
          <img src={twitter} className="twitter" alt="" />
          <img src={instagram} className="instagram" alt="" />
        </div>
      </div>
    </div>
  );
}
export default Home;
