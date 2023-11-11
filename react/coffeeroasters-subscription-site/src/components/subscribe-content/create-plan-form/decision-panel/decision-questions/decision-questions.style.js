import styled from "styled-components";

const SQuestions = styled.div`
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
    padding-right: 80px;
    cursor: pointer;
  }

  .question-title-arrow {
    position: absolute;
    top: 25px;
    right: 50px;
  }

  .question-title-arrow-active {
    transform: rotate(180deg);
    position: absolute;
    top: 25px;
    right: 50px;
  }
`;

export default SQuestions;
