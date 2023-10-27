import styled from "styled-components";

export const SSubscribeStep = styled.div`
  max-width: 380px;
  position: relative;
  padding-top: 80px;

  &::before {
    content: "";
    height: 31px;
    width: 31px;
    border: 2px solid #0e8784;
    border-radius: 50%;
    position: absolute;
    top: 0;
    background: #2c343e;
  }

  &:not(:last-child) {
    padding-right: 95px;
  }

  &:not(:last-child)::after {
    content: "";
    position: absolute;
    height: 2px;
    width: 100%;
    top: 17px;
    left: 35px;
    background: #fdd6ba;
  }

  .step-num {
    display: inline-block;
    color: #fdd6ba;
    font-family: "Fraunces" 9pt;
    font-size: 72px;
    font-style: normal;
    font-weight: 900;
    line-height: 72px;

    margin-bottom: 38px;
  }
  .step-title {
    color: #fefcf7;
    font-family: "Fraunces" 9pt;
    font-size: 32px;
    font-style: normal;
    font-weight: 900;
    line-height: 36px;

    margin-bottom: 42px;
  }
  .step-description {
    color: #fefcf7;
    font-family: "Barlow";
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 26px;
  }
`;
