import React from "react";
import { Link } from "react-router-dom";
import { SJob, SJobTime } from "./job.styles";

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
    <SJob>
      <SJobTime>
        <div className="img">
          <img src="./assets/logos/scoot.svg" alt="" />
        </div>
        <span>{postedAt}</span>
        <span>{contract}</span>
      </SJobTime>
      <Link to="job-info">
        <h2>{position}</h2>
      </Link>
      <h3>{company}</h3>
      <h4>{location}</h4>
    </SJob>
  );
}

export default Job;
