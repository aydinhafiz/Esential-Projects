import React from "react";
import { SSideBarForm } from "./side-bar-form.style";

function SideBarForm({ selectedQuestion }) {
  const SideBarStepData = [
    {
      steptitle: "Preferences",
    },
    {
      steptitle: "Bean Type",
    },
    {
      steptitle: "Quantity",
    },
    {
      steptitle: "Grind Option",
    },
    {
      steptitle: "Deliveries",
    },
  ];


  return (
    <SSideBarForm>
      <div className="side-bar-steps">
        {SideBarStepData.map(function (props, i) {
          return <SideBarStep key={i} {...{ ...props, num: i + 1 }} />;
        })}
      </div>
    </SSideBarForm>
  );
}

export default SideBarForm;

function SideBarStep({ steptitle, num }) {
  return (
    <div className="side-bar-step">
      <span className="side-bar-step-num">0{num}</span>
      <h3 className="side-bar-step-title">{steptitle}</h3>
    </div>
  );
}
