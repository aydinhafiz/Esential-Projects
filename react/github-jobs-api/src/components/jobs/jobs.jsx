import React from "react";
import Job from "./job";
import data from "../data";
function Jobs() {
  return (
    <div className="jobs">
      {data.map(function (request) {
        const {
          id,
          company,
          logo,
          position,
          postedAt,
          contract,
          location,
          description,
        } = request;
        return (
          <Job
            id={id}
            company={company}
            logo={logo}
            position={position}
            postedAt={postedAt}
            contract={contract}
            location={location}
            description={description}
          />
        );
      })}
    </div>
  );
}

export default Jobs;
