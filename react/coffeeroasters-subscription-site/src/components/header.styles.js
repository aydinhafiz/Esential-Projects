import styled from "styled-components";

const SNavbar = styled.div`
  .header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 40px;
  }

  .logo-header {
    margin-left: 80px;
  }

  .option-elements-header {
    margin-right: 80px;
  }

  .elements-header:nth-child(2) {
    margin: 0px 33px;
  }

  .elements-header {
    border: none;
    background: none;
    color: #83888f;
    font-size: 12px;
    font-style: normal;
    font-weight: 700;
    line-height: 15px;
    letter-spacing: 0.923px;
    text-transform: uppercase;
    cursor: pointer;
  }

  .elements-header:hover {
    color: #333d4b;
    font-size: 12px;
    font-style: normal;
    font-weight: 700;
    line-height: 15px;

    letter-spacing: 0.923px;
    text-transform: uppercase;
  }

  .create-plan-info {
    margin-left: 86px;
    margin-top: 180px;
  }

  .create-plan-description {
    margin: 0px 80px;
    display: flex;
    flex-direction: column;
  }

  .create-plan-title {
    color: #fefcf7;
    font-size: 72px;
    font-style: normal;
    font-weight: 900;
    line-height: 72px;

    margin-bottom: 32px;
    max-width: 493px;
  }

  .create-plan-paragraph {
    color: rgb(254, 252, 247, 0.8);
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 26px;

    margin-bottom: 73px;
    max-width: 445px;
  }

  .create-plan-button {
    color: #fefcf7;
    text-align: center;
    font-size: 18px;
    font-style: normal;
    font-weight: 900;
    line-height: 25px;

    border-radius: 6px;
    background: #0e8784;
    padding: 15px 31px;
    border: none;
    cursor: pointer;
  }

  .create-plan-button:hover {
    border-radius: 6px;
    background: #66d2cf;
  }

  .create-plan-bg-image {
    border-radius: 10px;
    z-index: -1;
    position: absolute;
    width: 1720px;
    height: 800px;
  }
`;

export default SNavbar;
