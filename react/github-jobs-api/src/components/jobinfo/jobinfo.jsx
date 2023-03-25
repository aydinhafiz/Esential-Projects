import React from "react";
import "./jobinfo.css";
import logoimg from "../../assets/logos/scoot.svg";
function JobInfo() {
  return (
    <div className="mycontent">
      <div className="header-info">
        <img className="logoimg" src={logoimg} alt="" />
        <div className="company-information">
          <h2 className="company-name">So Digital Inc.</h2>
          <span className="company-tag"> sodigital.co</span>
        </div>
        <div className="company-site-button">
          <button>Company Site</button>
        </div>
      </div>
    </div>
  );
}
export default JobInfo;
