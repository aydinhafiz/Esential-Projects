import styled from "styled-components";

export const SWhyChooseBox = styled.div`
  max-width: 350px;

  border-radius: 8px;
  background: #0e8784;
  padding: 72px 48px 48px 48px;

  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  text-align: center;

  @media only screen and (max-width: 890px) {
    flex-direction: row;
    align-items: center;
    justify-content: center;
    max-width: 100%;
    padding: 41px 48px 41px 70px;
  }

  .choose-box-text {
    @media only screen and (max-width: 890px) {
      text-align: start;
      margin-left: 55px;
    }
  }

  .choose-box-img {
    margin-bottom: 56px;
    @media only screen and (max-width: 890px) {
      margin-bottom: 0;
    }
  }

  .choose-box-title {
    color: #fefcf7;
    font-size: 24px;
    font-style: normal;
    font-weight: 900;
    line-height: 32px;
    margin-bottom: 24px;
    @media only screen and (max-width: 890px) {
      margin-bottom: 16px;
    }
  }

  .choose-box-description {
    color: #fefcf7;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 26px;
  }
`;
