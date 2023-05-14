import styled from "styled-components";

export const SSideBar = styled.div`
  margin-top: 32px;
  margin-left: 32px;
  width: 96px;
  height: 960px;
  background: #161d2f;
  border-radius: 20px;

  .sidebar-header-img {
    margin-top: 35.41px;
    margin-bottom: 75px;
    margin-left: 31.86px;
    margin-right: 32.14px;
  }

  .categories {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 490px;
  }

  .film-category {
    margin-bottom: 40px;
  }

  .profile {
    margin-left: 28px;
    max-width: 40px;
    max-height: 40px;
    border: 1px solid #ffffff;
    border-radius: 50%;
  }
`;
