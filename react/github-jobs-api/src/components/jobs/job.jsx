import React from "react";
import { Link } from "react-router-dom";
function Job(props) {
  const {
    id,
    company,
    logo,
    position,
    postedAt,
    contract,
    location,
    description,
  } = props;
  return (
    <div class="job">
      <div class="job-time">
        <div class="img">
          <img src="./assets/logos/scoot.svg" alt="" />
        </div>
        <span>{postedAt}</span>
        <span>{contract}</span>
      </div>
      <Link to="job-info">
        <h2>{position}</h2>
      </Link>
      <h3>{company}</h3>
      <h4>{location}</h4>
    </div>
  );
}

export default Job;
