import styled from "styled-components";

const SQuestion = styled.div`
  margin-bottom: 88px;

  .question-header {
    display: flex;
    justify-content: space-between;
    background: transparent;
    border: none;
    cursor: pointer;
    width: 100%;
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
    margin-top: 20px;
  }

  .question-title-arrow-open {
    transform: rotate(180deg);
    margin-top: 20px;
  }
`;

export default SQuestion;
