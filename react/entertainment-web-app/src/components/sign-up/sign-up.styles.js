import styled from "styled-components";

export const SSignUpHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 187px;

  .signup-page {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    padding: 32px;
    background: #161d2f;
    border-radius: 20px;
    max-width: 400px;
  }

  .title-signup {
    margin-right: 292px;
    margin-bottom: 40px;
    margin-left: 32px;

    font-family: "Outfit";
    font-style: normal;
    font-weight: 300;
    font-size: 32px;
    line-height: 40px;
    letter-spacing: -0.5px;

    color: #ffffff;
  }

  .signup-email {
    font-family: "Outfit";
    font-style: normal;
    font-weight: 300;
    font-size: 15px;
    line-height: 19px;

    padding: 0px 227px 18px 16px;
    max-width: 336px;
    border: none;
    background: none;
    border-bottom: 1px solid #5a698f;
    padding-bottom: 17px;
    mix-blend-mode: normal;
    opacity: 0.5;
    margin-bottom: 24px;
  }

  .signup-password {
    font-family: "Outfit";
    font-style: normal;
    font-weight: 300;
    font-size: 15px;
    line-height: 19px;

    padding: 0px 227px 18px 16px;
    max-width: 336px;
    border: none;
    background: none;
    border-bottom: 1px solid #5a698f;
    padding-bottom: 17px;
    mix-blend-mode: normal;
    opacity: 0.5;
    margin-bottom: 24px;
  }

  .repeat-password {
    font-family: "Outfit";
    font-style: normal;
    font-weight: 300;
    font-size: 15px;
    line-height: 19px;

    padding: 0px 227px 18px 16px;
    max-width: 336px;
    border: none;
    background: none;
    border-bottom: 1px solid #5a698f;
    padding-bottom: 17px;
    mix-blend-mode: normal;
    opacity: 0.5;
  }

  .login-your-account {
    font-family: "Outfit";
    font-style: normal;
    font-weight: 300;
    font-size: 15px;
    line-height: 19px;
    text-align: center;

    background: #fc4747;
    border: none;
    border-radius: 6px;
    color: #ffffff;
    padding: 14px 96.5px 15px 96.5px;
    margin-top: 40px;
    margin-bottom: 24px;
  }

  .login-your-account:hover {
    font-family: "Outfit";
    font-style: normal;
    font-weight: 300;
    font-size: 15px;
    line-height: 19px;
    text-align: center;
    color: #161d2f;

    background: #ffffff;
    border-radius: 6px;
  }

  .dont-have-account {
    font-family: "Outfit";
    font-style: normal;
    font-weight: 300;
    font-size: 15px;
    line-height: 19px;

    color: #ffffff;
  }

  .login {
    font-family: "Outfit";
    font-style: normal;
    font-weight: 300;
    font-size: 15px;
    line-height: 19px;

    padding-left: 9px;
    color: #fc4747;
    cursor: pointer;
  }
`;
