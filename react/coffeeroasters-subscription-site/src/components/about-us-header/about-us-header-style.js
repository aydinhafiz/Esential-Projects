import styled from "styled-components";

export const SAboutHeader = styled.div`
  background-image: url("/assets/about/desktop/image-hero-whitecup.jpg");
  width: 100%;
  height: 450px;
  border-radius: 10px;
  background-size: cover;
  background-repeat: no-repeat;
  padding: 137px 0px 137px 85px;
  background-position: 50% 50%;
  margin-bottom: 168px;
  .about-us-info-text {
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
    max-width: 445px;
  }

  .about-us-header-title {
    color: #fefcf7;
    font-family: "Fraunces" 9pt;
    font-size: 40px;
    font-style: normal;
    font-weight: 900;
    line-height: 48px;
    margin-bottom: 24px;
  }
  .about-us-header-description {
    color: #fefcf7;
    font-family: "Barlow";
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 26px;
  }
`;
