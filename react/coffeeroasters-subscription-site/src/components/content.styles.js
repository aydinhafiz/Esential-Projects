import styled from "styled-components";

const SContent = styled.div`
  .create-plan-info {
    position: relative;
  }

  .create-plan-info__image {
    border-radius: 10px;
    position: absolute;
    z-index: -1;
  }

  .create-plan-info__description {
    padding-left: 86px;
    padding-top: 160px;
  }

  .create-plan-info-description__title {
    color: #fefcf7;
    font-size: 72px;
    font-style: normal;
    font-weight: 900;
    line-height: 72px;
    /* 100% */
    width: 493px;
    margin-bottom: 32px;
  }

  .create-plan-info-descriptiono__paragraph {
    color: rgb(254, 252, 247, 0.8);
    font-family: Barlow;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 26px;
    /* 162.5% */
    width: 445px;
    margin-bottom: 56px;
  }

  .create-plan-info-description__button {
    border: none;
    padding: 15px 31px 16px 31px;
    cursor: pointer;

    color: #fefcf7;
    text-align: center;
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
`;

export default SContent;
