import styled from "styled-components";

const SMenu = styled.div`
  .menu-options {
    @media only screen and (max-width: 750px) {
      flex-direction: column;
      align-items: center;
      justify-content: center;
      position: absolute;
      width: 400px;
      right: 0;
      top: 200px;
      margin-right: 20px;
      background: linear-gradient(
        180deg,
        rgba(254, 252, 247, 0.5) 0%,
        #fefcf7 55.94%
      );
      z-index: 100;
    }
  }

  .elements {
    @media only screen and (max-width: 750px) {
      color: #333d4b;
      text-align: center;
      font-family: "Fraunces";
      font-size: 24px;
      font-style: normal;
      font-weight: 900;
      line-height: 32px;
      margin-left: 100px;
      margin-bottom: 32px;
      width: 100%;
    }
  }
`;

export default SMenu;
