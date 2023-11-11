import styled from "styled-components";

export const SSteps = styled.div`
  display: flex;
  padding: 80px 85px 64px 84px;

  ${(props) => {
    if (props.type === "dark") {
      return `background-color:#2C343E;`;
    }
  }}
`;
