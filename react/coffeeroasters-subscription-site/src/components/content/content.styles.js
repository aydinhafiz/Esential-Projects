import styled from "styled-components";

export const SCreatePlanInfo = styled.div`
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

export const STypesOfCoffee = styled.div`
  margin-top: 250px;
  margin-bottom: 393px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  position: relative;

  .coffee-type {
    margin-bottom: 200px;
    margin-right: 30px;
  }

  .coffe-type__img {
    height: 193px;
    margin-bottom: 71px;
    width: 255px;
  }

  .coffee-type__title {
    color: #333d4b;
    font-size: 24px;
    font-style: normal;
    font-weight: 900;
    line-height: 32px; /* 133.333% */
    margin-bottom: 24px;
    width: 255px;
  }

  .coffee-type__description {
    color: #333d4b;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 26px; /* 162.5% */
    width: 255px;
  }

  .our-collection {
    position: absolute;
    color: #83888f;
    text-align: center;
    font-family: Fraunces 9pt;
    font-size: 150px;
    font-style: normal;
    font-weight: 900;
    line-height: 72px; /* 48% */

    top: -80px;
    left: 80px;
    z-index: -1;
    opacity: 0.5;
  }
`;

const SContent = styled.div`
  .why-choose-us {
    border-radius: 10px;
    background: #2c343e;
    position: relative;
    padding: 112px 450px 230px 450px;
    /* width: 1280px;
    height: 577px; */
  }

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
    width: 329px;
  }

  .why-choose-us-description {
    color: #fefcf7;
    text-align: center;
    font-family: Barlow;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 26px; /* 162.5% */
    opacity: 0.8;
    width: 540px;
  }
  .choose-us-box {
    width: 350px;
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
`;

export default SContent;

// .types-of-coffee {
//   margin-top: 136px;
//   display: flex;
//   flex-wrap: wrap; /* Yeterli alan yoksa alt satıra geç */
// }

// .coffee-type {
//   margin-right: 20px; /* Kahve türleri arasında boşluk bırakmak için */
//   width: 255px;
// }

// .coffee-type__img {
//   height: 193px;
//   width: 255px;
// }

// .coffee-type__info {
//   padding: 20px; /* Gerekirse içerik etrafında boşluk bırakmak için */
// }

// .coffee-type__title {
//   color: #333d4b;
//   font-size: 24px;
//   font-style: normal;
//   font-weight: 900;
//   line-height: 32px;
//   margin-bottom: 24px;
// }

// .coffee-type__description {
//   color: #333d4b;
//   font-size: 16px;
//   font-style: normal;
//   font-weight: 400;
//   line-height: 26px;
// }
