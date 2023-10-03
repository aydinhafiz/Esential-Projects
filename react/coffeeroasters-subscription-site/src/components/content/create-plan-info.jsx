import React from "react";
import { SCreatePlanInfo } from "./content.styles";

function CreatePlanInfo() {
  return (
    <SCreatePlanInfo>
      <img
        className="create-plan-info__image"
        src="/assets/home/desktop/image-hero-coffeepress.jpg"
        alt=""
      />
      <div className="create-plan-info__description">
        <h2 className="create-plan-info-description__title">
          GREAT COFFEE MADE SİMPLE.
        </h2>
        <p className="create-plan-info-descriptiono__paragraph">
          Start your mornings with the world’s best coffees. Try our expertly
          curated artisan coffees from our best roasters delivered directly to
          your door, at your schedule.
        </p>
        <button className="create-plan-info-description__button">
          Ceate your plan
        </button>
      </div>
    </SCreatePlanInfo>
  );
}

export default CreatePlanInfo;
