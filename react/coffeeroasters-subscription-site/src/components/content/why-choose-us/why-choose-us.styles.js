import styled from "styled-components";

export const SWhyChooseUs = styled.div`
  border-radius: 10px;
  background: #2c343e;
  position: relative;
  padding: 112px 370px 286px 370px;
  /* width: 1280px;
    height: 577px; */

  .why-choose-us-intro {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 112px;
  }

  .why-choose-us-title {
    color: #fefcf7;
    text-align: center;
    font-family: Fraunces 9pt;
    font-size: 40px;
    font-style: normal;
    font-weight: 900;
    line-height: 48px; /* 120% */
  }

  .why-choose-us-description {
    color: #fefcf7;
    text-align: center;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 26px; /* 162.5% */
    opacity: 0.8;
  }
  .choose-us-box {
    /* width: 350px; */
    height: 382px;
    border-radius: 8px;
    background: #0e8784;
    padding: 72px 48px 48px 48px;

    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }

  .choose-box-img {
    margin-bottom: 56px;
  }
  .choose-box-title {
    color: #fefcf7;
    text-align: center;
    font-family: Fraunces 9pt;
    font-size: 24px;
    font-style: normal;
    font-weight: 900;
    line-height: 32px; /* 133.333% */
    margin-bottom: 24px;
  }

  .choose-box-description {
    text-align: center;
    color: #fefcf7;
    text-align: center;
    font-family: Barlow;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 26px; /* 162.5% */
  }

  .why-choose-us-boxes {
    margin-top: 86px;
    display: flex;
    position: absolute;
    left: -1px;
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
