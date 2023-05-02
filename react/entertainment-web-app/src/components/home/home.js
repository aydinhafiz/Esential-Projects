import styled from "styled-components";

export const SContainer = styled.div`
  position: relative;
  .search-bar {
    margin-top: 64px;
    margin-left: 164px;
    display: flex;
    justify-content: space-between;
    max-width: 377px;
  }

  .magnifying-img {
    width: 24px;
    height: 24px;
  }

  .search-films-or-movies-input {
    font-family: "Outfit";
    font-style: normal;
    font-weight: 300;
    font-size: 24px;
    line-height: 30px;

    color: #ffffff;
    mix-blend-mode: normal;
    opacity: 0.5;
    background: none;
    border: none;
    width: 321px;
  }

  .movie-and-series-filter {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    margin-left: 32px;
    width: 96px;
    height: 960px;
    background: #161d2f;
    border-radius: 20px;
  }

  .choose-films-or-movies {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .film-start-logo {
    margin-top: 35.41px;
    margin-bottom: 75px;

    width: 32px;
    height: 25.6px;
  }

  .all-movies-and-series {
    margin-bottom: 40px;
    cursor: pointer;

    width: 20px;
    height: 20px;
  }

  .only-movies {
    margin-bottom: 40px;
    cursor: pointer;

    width: 20px;
    height: 20px;
  }

  .only-series {
    margin-bottom: 40px;
    cursor: pointer;

    width: 20px;
    height: 20px;
  }

  .favourites {
    cursor: pointer;

    width: 17px;
    height: 20px;
  }
`;
