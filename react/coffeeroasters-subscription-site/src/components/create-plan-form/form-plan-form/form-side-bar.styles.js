import styled from "styled-components";

const SFormSideBar = styled.div`
  max-width: 255px;

  .side-bar-steps {
    display: flex;
    padding-bottom: 24px;
    border-bottom: 1px solid rgba(131, 136, 143, 0.5);
    margin-bottom: 24px;
    &:last-child {
      border-bottom: none;
    }
  }

  .steps-num {
    color: rgba(131, 136, 143, 0.5);
    font-family: "Fraunces" 9pt;
    font-size: 24px;
    font-style: normal;
    font-weight: 900;
    line-height: 32px;
    margin-right: 28.5px;
    &:hover {
      color: #83888f;
    }
  }

  .steps-title {
    color: rgba(51, 61, 75, 0.5);
    font-family: "Fraunces" 9pt;
    font-size: 24px;
    font-style: normal;
    font-weight: 900;
    line-height: 32px;
    cursor: pointer;
    &:hover {
      color: #333d4b;
    }
  }
`;

export default SFormSideBar;
