import React from "react";
import CreatePlanForm from "./create-plan-form/create-plan-form";
import Steps from "../home-content/how-it-works/how-works-steps/how-works-steps";

function SubscribeContent() {
  return (
    <>
      <Steps type="dark" />
      <CreatePlanForm />
    </>
  );
}

export default SubscribeContent;
