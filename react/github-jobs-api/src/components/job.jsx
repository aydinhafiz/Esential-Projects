import React from "react";
import scootLogo from "./logos/scoot.svg"
function Job(props) {
  const { id, company, logo, description, position, postedAt,contract, location,} = props;
  return (
    <div className="job">
      <div class="job-time">
        <div class="img">
          <img src="" alt="" />
        </div>
        <span>{postedAt}</span>
        <span>{contract}</span>
      </div>
      <h2>{position}</h2>
      <h3>{company}</h3>
      <h4>{location}</h4>
    </div>
  );
}

export default Job