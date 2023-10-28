import styled from "styled-components";

export const SDecisionPanel = styled.div`
  max-width: 730px;
  margin-right: 165px;

  .question {
    margin-bottom: 88px;
  }

  .question-title {
    color: #83888f;
    font-family: "Fraunces" 9pt;
    font-size: 40px;
    font-style: normal;
    font-weight: 900;
    line-height: 48px;

    margin-bottom: 56px;
    cursor: pointer;
  }

  .question-title-arrow {
    padding-left: 80px;
  }

  .question-default-option {
    padding: 32px 28px 84px 28px;
    border-radius: 8px;
    background: #f4f1eb;
    max-width: 235px;
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

  .question-options {
    display: flex;
    gap: 51px;
  }
`;
