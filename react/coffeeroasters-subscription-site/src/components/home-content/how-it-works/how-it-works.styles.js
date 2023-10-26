import styled from "styled-components";

export const SHowWorks = styled.div`
  margin-top: 200px;

  .how-it-works-title {
    color: #83888f;
    font-size: 24px;
    font-style: normal;
    font-weight: 900;
    line-height: 32px;

    margin-bottom: 80px;
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

  /* .step-line {
    border-right: 9px solid #fdd6ba;
  } */
`;
