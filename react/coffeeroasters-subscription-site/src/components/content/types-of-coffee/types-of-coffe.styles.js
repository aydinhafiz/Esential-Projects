import styled from "styled-components";

export const STypesOfCoffee = styled.div`
  margin-top: 250px;
  margin-bottom: 188px;
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

  @media only screen and (max-width: 600px) {
    .coffee-type {
      max-width: 573px;
    }
  }
`;
