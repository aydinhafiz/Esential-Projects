import React from "react";
import { SStep } from "./how-work-step.style";

function HowWorkStep({ num, title, description }) {
  return (
    <SStep>
      <span className="step-num">0{num}</span>
      <h2 className="step-title">{title} </h2>
      <p className="step-description">{description} </p>
    </SStep>
  );
}

export default HowWorkStep;
