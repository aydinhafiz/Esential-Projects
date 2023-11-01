import styled from "styled-components";

export const SDecisionPanel = styled.div`
  max-width: 730px;
  margin-right: 165px;


  .question-options {
    display: flex;
  }

  .question-default-option {
    border-radius: 8px;
    background: #f4f1eb;
    padding: 32px 28px 84px 28px;
    margin-right: 23px;
    max-width: 220px;
  }

  .question-default-option:last-child {
    margin-right: 0;
  }

  .default-option-title {
    color: #333d4b;
    font-family: "Fraunces" 9pt;
    font-size: 24px;
    font-style: normal;
    font-weight: 900;
    line-height: 32px;

    margin-bottom: 24px;
  }

  .default-option-description {
    color: #333d4b;
    font-family: "Barlow";
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 26px;
  }
`;
