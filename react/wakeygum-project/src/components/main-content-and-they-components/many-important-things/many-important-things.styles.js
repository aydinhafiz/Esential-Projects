import styled from "styled-components";

export const SManyImportantThings = styled.div`
  display: flex;
  margin-bottom: 50px;

  .important-things {
    max-width: 350px;
    margin-right: 30px;
  }

  .important-img-bar {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 86px;
    height: 86px;
    background-color: #96a9c6;
    border-radius: 50%;
    margin-bottom: 32px;
  }

  .important-description {
    font-family: "DM Serif Display";
    font-style: normal;
    font-weight: 400;
    font-size: 28px;
    line-height: 38px;
    letter-spacing: -0.388889px;

    color: #2c2830;
  }

  .important-paragraph {
    font-family: "Karla";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 26px;

    color: #837d88;
    margin-top: 16px;
  }
`;
