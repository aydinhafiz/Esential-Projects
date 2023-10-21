import styled from "styled-components";

export const STypesOfCoffee = styled.div`
  margin-bottom: 188px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  position: relative;
  gap: 30;

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