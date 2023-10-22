import styled from "styled-components";

export const SCoffeeQualityInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 10px;
  background: #2c343e;
  padding: 88px 85px 88px 85px;
  width: 100%;
  height: 474px;
  margin-bottom: 168px;

  .coffe-quality-text {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    text-align: start;
    max-width: 540px;
  }

  .coffee-quality-title {
    color: #fefcf7;
    font-family: "Fraunces" 9pt;
    font-size: 40px;
    font-style: normal;
    font-weight: 900;
    line-height: 48px;
    margin-bottom: 32px;
  }

  .coffee-quality-description {
    color: #fefcf7;
    font-family: "Barlow";
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 26px;
  }

  .quality-img {
    margin-bottom: 88px;
  }
`;
