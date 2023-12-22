import styled from "styled-components";

const SNavbar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 44px;
  margin-bottom: 43px;

  .options {
    display: flex;

    @media only screen and (max-width: 900px) {
      padding-right: 105px;
    }

    @media only screen and (max-width: 400px) {
      display: none;
    }
  }

  .ham-button {
    display: none;
    background-color: transparent;
    border: none;

    @media only screen and (max-width: 400px) {
      display: block;
      margin-right: 28px;
    }
  }

  .route-navbar {
    text-decoration: none;
  }

  .elements {
    display: flex;
    align-items: center;

    color: #83888f;
    font-size: 12px;
    font-style: normal;
    font-weight: 700;
    line-height: 15px;

    letter-spacing: 0.923px;
    text-transform: uppercase;

    cursor: pointer;

    margin-right: 33px;
  }

  .elements:hover {
    color: #333d4b;
  }

  .no-margin {
    margin-right: 0px;
  }

  .logo-img {
    @media only screen and (max-width: 900px) {
      margin-left: 105px;
    }
    @media only screen and (max-width: 400px) {
      margin-left: 25px;
    }
  }
`;

export default SNavbar;
