import React from "react";
import { SSideBarForm } from "./side-bar-form.style";

function SideBarForm({ selectedQuestion, createPlanState }) {
  return (
    <SSideBarForm>
      <div className="side-bar-steps">
        {createPlanState
          .map((section) => section.sectionName)
          .map(function (sectionName, i) {
            return <SideBarStep key={i} title={sectionName} num={i + 1} />;
          })}
      </div>
    </SSideBarForm>
  );
}

export default SideBarForm;

function SideBarStep({ title, num }) {
  return (
    <div className="side-bar-step">
      <span className="side-bar-step-num">0{num}</span>
      <h3 className="side-bar-step-title">{title}</h3>
    </div>
  );
}
