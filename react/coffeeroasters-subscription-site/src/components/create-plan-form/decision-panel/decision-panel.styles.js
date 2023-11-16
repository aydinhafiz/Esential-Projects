import styled from "styled-components";

const SDecisionPanel = styled.div`
  margin-left: 170px;

  .question {
    margin-bottom: 88px;
  }

  .question-header {
    display: flex;
    align-items: center;
    position: relative;
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
    position: absolute;
    top: 23px;
    bottom: 0;
    right: -80px;
  }

  .question-title-arrow-active {
    transform: rotate(180deg);
  }

  .answer-panel {
    display: flex;
  }

  .answers {
    padding: 32px 28px 84px 28px;
    max-width: 228px;
    border-radius: 8px;
    background: #f4f1eb;
    margin-right: 23px;
    &:last-child {
      margin-right: 0;
    }
  }

  .answers-title {
    color: #333d4b;
    font-family: "Fraunces" 9pt;
    font-size: 24px;
    font-style: normal;
    font-weight: 900;
    line-height: 32px;
    margin-bottom: 28px;
  }

  .answers-description {
    color: #333d4b;
    font-family: "Barlow";
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 26px;
  }
`;

export default SDecisionPanel;
