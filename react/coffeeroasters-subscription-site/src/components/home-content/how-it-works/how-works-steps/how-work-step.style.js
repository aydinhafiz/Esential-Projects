import styled from "styled-components";

export const SStep = styled.div`
  /* max-width: 380px; */
  max-width: 406px;
  padding-top: 80px;
  position: relative;

  ${(props) => {
    if (props.type === "dark") {
      return `background-color:#2C343E;`;
    }
  }}

  &::before {
    content: "";
    height: 31px;
    width: 31px;
    border: 2px solid #0e8784;
    border-radius: 50%;
    position: absolute;
    top: 0;

    ${(props) => {
      if (props.type === "dark") {
        return `background: #2C343E;`;
      }
      if (props.type === "light") {
        return `background: #fefcf7;`;
      }
    }}
  }

  &:not(:last-child) {
    padding-right: 95px;
    @media only screen (max-width: 1000px) {
      padding-right: 35px;
    }
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
    color: #333d4b;
    font-family: "Fraunces" 9pt;
    font-size: 32px;
    font-style: normal;
    font-weight: 900;
    line-height: 36px;

    margin-bottom: 42px;

    @media only screen and (max-width: 600px) {
      color: #333d4b;
      font-size: 28px;
      font-style: normal;
      font-weight: 900;
      line-height: 32px;
    }

    ${(props) => {
      if (props.type === "dark") {
        return `color: #FEFCF7;`;
      }
      if (props.type === "light") {
        return `background: #fefcf7;`;
      }
    }}
  }

  .step-description {
    color: #333d4b;
    font-family: "Barlow";
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 26px;

    @media only screen and (max-width: 600px) {
      color: #333d4b;
      font-size: 15px;
      font-style: normal;
      font-weight: 400;
      line-height: 25px;
    }

    ${(props) => {
      if (props.type === "dark") {
        return `color: #FEFCF7;`;
      }
      if (props.type === "light") {
        return `background: #fefcf7;`;
      }
    }}
  }
`;
