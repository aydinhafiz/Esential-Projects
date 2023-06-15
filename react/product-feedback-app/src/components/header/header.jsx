import React from "react";
import lamp from "../../assets/lamp.png";
import grayArrowDown from "../../assets/gray-arrow-down.png";

function Header() {
  return (
    <div className="header">
      <div className="left-side">
        <img src={lamp} alt="lamp-img" className="lamp-img" />
        <span className="header-suggestions">6 Suggestions</span>
        <h2 className="sorted-by">
          Sort by : <span className="most-upvotes">Most Upvotes</span>{" "}
          <img
            src={grayArrowDown}
            alt="grayArrowDown"
            className="gray-arrow-down"
          />
        </h2>
      </div>
      <div className="right-side">
        <button className="add-feedback-button">+ Add Feedback</button>
      </div>
    </div>
  );
}
export default Header;
