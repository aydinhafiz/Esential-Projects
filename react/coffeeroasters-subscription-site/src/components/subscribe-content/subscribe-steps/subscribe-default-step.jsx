import React from "react";
import { SSubscribeStep } from "./subscribe-default-step.style";

function SubscribeDefaultStep({ num, title, description }) {
  return (
    <SSubscribeStep>
      <span className="step-num">0{num}</span>
      <h2 className="step-title">{title} </h2>
      <p className="step-description">{description} </p>
    </SSubscribeStep>
  );
}

export default SubscribeDefaultStep;
