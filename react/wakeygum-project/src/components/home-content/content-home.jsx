import React from "react";
import "./content-home.css";

import wakeyAlternativeLogo from "../../assets/Real-Wakey.png"
import logo from "../../assets/wakey-project-logo.png";

function ContentHome() {
  return (
    <div className="content-home">
      <div className="product-description">
        <div className="product-image">
          <img className="img-product" src={wakeyAlternativeLogo} alt="" />
        </div>
        <div className="product-info">
          <h2>Product Ideas</h2>
        </div>
      </div>
    </div>
  );
}
export default ContentHome;
