import React from "react";
import { SHeader } from "./header.styles";

function Header() {
  return (
    <SHeader>
      <div className="create-plan-info__description">
        <h2 className="create-plan-info-description__title">
          Great coffee made simple.
        </h2>
        <p className="create-plan-info-descriptiono__paragraph">
          Start your mornings with the world’s best coffees. Try our expertly
          curated artisan coffees from our best roasters delivered directly to
          your door, at your schedule.
        </p>
        <button className="create-plan-info-description__button">
          Create your plan
        </button>
      </div>
    </SHeader>
  );
}

export default Header;
