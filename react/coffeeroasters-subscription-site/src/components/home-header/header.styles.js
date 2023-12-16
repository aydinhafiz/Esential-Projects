import styled from "styled-components";

export const SHomeHeader = styled.div`
  margin-bottom: 250px;
  position: relative;
  background-image: url("/assets/home/desktop/image-hero-coffeepress.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 10px;
  padding: 117px 85px;
  background-position: 50% 50%;

  @media only screen and (max-width: 375px) {
    margin-left: 24px;
    margin-right: 24px;
    padding: 100px 24px;
    width: 327px;
    background-position: 100% 100%;
    text-align: center;
  }
  /* .create-plan-info__description { padding-left: 86px; padding-top: 160px; } */
  .create-plan-info-description__title {
    color: #fefcf7;
    font-size: 72px;
    font-style: normal;
    font-weight: 900;
    line-height: 72px;
    /* 100% */
    /* width: 493px; */
    margin-bottom: 32px;
    max-width: 493px;

    @media only screen and (max-width: 375px) {
      color: #fefcf7;
      text-align: center;
      font-size: 40px;
      font-style: normal;
      font-weight: 900;
      line-height: 40px;
      width: 279px;
    }
  }

  .create-plan-info-descriptiono__paragraph {
    color: rgb(254, 252, 247, 0.8);
    font-family: Barlow;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 26px;
    /* 162.5% */
    max-width: 445px;
    margin-bottom: 56px;

    @media only screen and (max-width: 375px) {
      color: #fefcf7;
      text-align: center;
      font-size: 15px;
      font-style: normal;
      font-weight: 400;
      line-height: 25px;
      width: 279px;
      opacity: 0.7;
    }
  }

  .create-plan-info-description__button {
    border: none;
    padding: 15px 31px 16px 31px;
    cursor: pointer;

    color: #fefcf7;
    text-align: center;
    font-family: Fraunces 9pt;
    font-size: 18px;
    font-style: normal;
    font-weight: 900;
    line-height: 25px;
    /* 138.889% */

    border-radius: 6px;
    background: #0e8784;
  }

  .create-plan-info-description__button:hover {
    border-radius: 6px;
    background: #66d2cf;
  }

  @media only screen and (max-width: 600px) {
    background-image: url("./assets/home/tablet/image-hero-coffeepress.jpg");
  }
`;
