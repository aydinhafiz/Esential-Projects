import styled from "styled-components";

export const SSideBarForm = styled.div`
  margin-left: 85px;

  .side-bar-steps {
    max-width: 255px;
  }

  .side-bar-step {
    display: flex;
    border-bottom: 1px solid rgba(131, 136, 143, 0.25);
    padding-bottom: 24px;
    margin-bottom: 24px;
  }

  .side-bar-step:last-child {
    border-bottom: none;
  }

  .side-bar-step-num {
    color: rgba(131, 136, 143, 0.5);
    font-family: "Fraunces" 9pt;
    font-size: 24px;
    font-style: normal;
    font-weight: 900;
    line-height: 32px;
    margin-right: 28.5px;
    cursor: pointer;
  }

  .side-bar-step-num:hover {
    color: rgba(51, 61, 75, 0.7);
  }

  .side-bar-step-title {
    color: rgba(51, 61, 75, 0.5);
    font-family: "Fraunces" 9pt;
    font-size: 24px;
    font-style: normal;
    font-weight: 900;
    line-height: 32px;
    cursor: pointer;
  }

  .side-bar-step-title:hover {
    color: rgba(51, 61, 75, 0.7);
  }

  /* .side-bar-step-num-active {
    color: #0e8784;
    font-family: "Fraunces" 9pt;
    font-size: 24px;
    font-style: normal;
    font-weight: 900;
    line-height: 32px;

    margin-right: 28.5px;
  }

  .side-bar-step-title-active {
    color: #333d4b;
    font-family: "Fraunces" 9pt;
    font-size: 24px;
    font-style: normal;
    font-weight: 900;
    line-height: 32px;
  } */
`;
