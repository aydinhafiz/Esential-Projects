import React from "react";
import "./jobinfo.css";
import logoimg from "../../assets/logos/scoot.svg";
import styled from "styled-components";
const Swritten = styled.div`
  margin-left: 40px;
  .company-name {
    font-family: "Kumbh Sans";
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 30px;
    color: #19202d;
    margin-top: 42px;
    margin-bottom: 7px;
  }
  .company-tag {
    font-family: "Kumbh Sans";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    color: #6e8098;
  }
`;

const SHeaderButton = styled.div`
  button {
    margin-top: 46px;
    margin-right: 43px;
    font-family: "Kumbh Sans";
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 20px;
    text-align: center;
    color: #5964e0;
    border: none;
    padding: 16px 20px 12px 20px;
  }
`;

function JobInfo() {
  return (
    <div className="mycontent">
      <div className="header-info">
        <div className="company-info">
          <img src={logoimg} alt="" className="logo-img" />
          <Swritten>
            <h2 className="company-name">So Digital Inc.</h2>
            <span className="company-tag">sodigital.co</span>
          </Swritten>
        </div>
        <SHeaderButton>
          <button>Company Site</button>
        </SHeaderButton>
      </div>

      {/* <div className="content-job-info">
        <div className="header-job-info">
          <div className="header-left-info">
            <div className="actuallity-and-jobtyp">
              <span>1w ago</span>
              <span>Part Time</span>
            </div>
          <div className="company-title">
            <h2>Senior Software Engineer</h2>
          </div>
          <div className="location">
            <span>Remote, Seoul, Tokyo, Mountain View, San Fransisco</span>
          </div>
          </div>
          <div className="apply-now-button">
            <button>Apply Now</button>
          </div>
        </div>
      </div> */}
    </div>
  );
}
export default JobInfo;
