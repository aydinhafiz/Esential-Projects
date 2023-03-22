import React from "react";
import "../App.css";
// import Job from "./job";
import jobData from "./data";
import Job from "./job";

function Jobs() {
  return (
    <div className="jobs">
      {jobData.map(function (jobrequest) {
        const {
          id,
          company,
          logo,
          description,
          position,
          postedAt,
          contract,
          location,
        } = jobrequest;
        return (
          <Job
            key={id}
            id={id}
            logo={logo}
            position={position}
            postedAt={postedAt}
            company={company}
            description={description}
            contract={contract}
            location={location}
          />
        );
      })}
    </div>
  );
}

export default Jobs;
