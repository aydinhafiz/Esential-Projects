import styled from "styled-components";

export const SHowWorks = styled.div`
  margin-top: 200px;

  .how-it-works-title {
    color: #83888f;
    font-size: 24px;
    font-style: normal;
    font-weight: 900;
    line-height: 32px;
    padding-left: 85px;
  }

  .steps-circle {
    margin-top: 80px;
  }

  .step {
    display: inline-block;
    background-color: #fefcf7;
    border-radius: 50%;
    color: white;
    width: 31px;
    height: 31px;
    border: 2px solid #0e8784;
    margin-right: 349px;
  }

  .step:last-child {
    margin-right: 0px;
  }

  .how-create-plan-button {
    color: #fefcf7;
    text-align: center;
    font-family: "Fraunces" 9pt;
    font-size: 18px;
    font-style: normal;
    font-weight: 900;
    line-height: 25px;
    border-radius: 6px;
    background: #0e8784;

    padding: 15px 31px 16px 31px;
    border: none;
    margin-left: 85px;
    cursor: pointer;
    &:hover {
      border-radius: 6px;
      background: #66d2cf;
    }
  }

  /* .step-line {
    border-right: 9px solid #fdd6ba;
  } */
`;
