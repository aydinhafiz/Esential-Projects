import styled from "styled-components";

export const SJob = styled.div`
  background: #ffffff;
  min-width: 350px;
  margin-bottom: 65px;

  
  padding: 49px 32px 32px 32px;
  font-family: "Kumbh Sans";
  font-style: normal;

  h2 {
    font-weight: 700;
    font-size: 20px;
    line-height: 25px;
    color: #19202d;
  }
  &:hover {
    font-weight: 700;
    font-size: 20px;
    line-height: 25px;
    color: #6e8098;
  }

  h3 {
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    color: #6e8098;
  }

  h4 {
    font-weight: 700;
    font-size: 14px;
    line-height: 18px;
    color: #5964e0;
  }
`;

export const SJobTime = styled.div`
  font-family: "Kumbh Sans";
  font-style: normal;
  span {
    position: relative;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    color: #6e8098;
    margin-right: 12px;
  }
`;
