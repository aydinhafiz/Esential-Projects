import styled from "styled-components";
import SideBarForm from "./side-bar-form/side-bar-form";
import DecisionPanel from "./decision-panel/decision-panel";

function CreatePlanForm() {
  return (
    <SCreatePlanForm>
      <SideBarForm />
      <DecisionPanel />
    </SCreatePlanForm>
  );
}

export default CreatePlanForm;





const SCreatePlanForm = styled.div`
  display: flex;
  justify-content: space-between;
`;

