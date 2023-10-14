import React from "react";
import { SHowWorks } from "./how-it-works.styles";

function HowItWorks() {
  return (
    <SHowWorks>
      <h2 className="how-it-works-title">How it works</h2>

      <div className="steps-circle">
        
        <span className="step"></span>

        <span className="step-line"></span>

        <span className="step"></span>

        <span className="step-line"></span>

        <span className="step"></span>
      </div>

      <div className="steps-info">
        <div className="step-info"></div>
      </div>
    </SHowWorks>
  );
}

export default HowItWorks;
