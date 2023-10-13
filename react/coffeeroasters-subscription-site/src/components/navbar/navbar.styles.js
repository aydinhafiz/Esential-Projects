import styled from "styled-components";

const SHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 44px;
  margin-bottom: 43px;

  .options {
    display: flex;
  }

  .ham-button {
    display: none;
    background-color: transparent;
    border: none;
  }

  .elements:nth-child(2) {
    margin: 0px 33px;
  }

  .elements {
    color: #83888f;
    font-size: 12px;
    font-style: normal;
    font-weight: 700;
    line-height: 15px;
    /* 125% */
    letter-spacing: 0.923px;
    text-transform: uppercase;
    cursor: pointer;
  }

  .elements:hover {
    color: #333d4b;
  }

  @media only screen and (max-width: 600px) {
    .options {
      display: none;
    }

    .ham-button {
      display: block;
      margin-right: 24px;
    }

    .logo-img {
      margin-left: 24px;
    }
  }
`;

export default SHeader;
