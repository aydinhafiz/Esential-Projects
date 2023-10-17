import styled from "styled-components";

export const SWhyChooseUs = styled.div`
  border-radius: 10px;
  background: #2c343e;
  position: relative;
  padding: 100px 80px 0px 80px;
  height: 577px;

  .why-choose-us-intro {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .why-choose-us-title {
    color: #fefcf7;
    text-align: center;
    font-size: 40px;
    font-style: normal;
    font-weight: 900;
    line-height: 48px;
    margin-bottom: 32px;
  }

  .why-choose-us-description {
    color: #fefcf7;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 26px;
    opacity: 0.8;
    max-width: 538px;
    text-align: center;
  }

  .why-choose-us-boxes {
    margin-top: 86px;
    display: flex;
    gap: 30px;
    flex-wrap: wrap;
  }

  .choose-us-box:nth-child(1) {
    margin-left: 85px;
    margin-right: 30px;
  }
  .choose-us-box:nth-child(2) {
    margin-right: 30px;
  }

  @media only screen and (max-width: 600px) {
    border-radius: 10px;
    background: #2c343e;
    position: relative;
    padding: 64px 24px 0px 24px;
  }
`;
