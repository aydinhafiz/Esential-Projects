import React from "react";
import { SHowWorks } from "./how-it-works.styles";
import Steps from "./how-works-steps/how-works-steps";

function HowItWorks() {
  return (
    <SHowWorks>
      <h2 className="how-it-works-title">How it works</h2>
      <Steps />
    </SHowWorks>
  );
}

export default HowItWorks;
