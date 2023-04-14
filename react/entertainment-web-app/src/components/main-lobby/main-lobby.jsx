import React from "react";
import styled from "styled-components";

import "./main-lobby.css";
import magnifyingImg from "../../assets/magnifying.png";
import filmStartLogo from "../../assets/film-start-img.png";
import filmsAndMovies from "../../assets/films-and-movies.png";
import onlyMovies from "../../assets/only-films.png";
import onlySeries from "../../assets/only-series.png";
import favourites from "../../assets/favourites.png";
import profileImg from "../../assets/profile-img.png";
import trendMovieImg from "../../assets/movie-img-trending.png";
import playButtonImg from "../../assets/play-button.png";
const SContainer = styled.div`
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

function MainLobby() {
  return (
    <SContainer>
      <div className="search-bar">
        <img src={magnifyingImg} alt="" className="magnifying-img" />
        <input
          className="search-films-or-movies-input"
          type="text"
          placeholder="Search for movies or TV series"
        />
      </div>
      <div className="movie-and-series-filter">
        <div className="choose-films-or-movies">
          <img src={filmStartLogo} alt="" className="film-start-logo" />

          <img src={filmsAndMovies} alt="" className="all-movies-and-series" />
          <img src={onlyMovies} alt="" className="only-movies" />
          <img src={onlySeries} alt="" className="only-series" />
          <img src={favourites} alt="" className="favourites" />
        </div>
        <div className="profile-circle">
          <img src={profileImg} alt="" className="profile-img" />
        </div>
      </div>
      <div className="trending-movies">
        <h2 className="category-trending">Trending</h2>
        <div className="trend-movie">
          <img src={trendMovieImg} alt="" className="movie-title-img" />
          <div className="movie-or-serie-info">
            <span className="time-year">2019</span>
            <h2 className="circle"></h2>
            <div className="movie-or-serie-filter">
              <img className="movie-img" src={onlyMovies} alt="" />
              <span className="movie-or-serie-filter-span">Movie</span>
            </div>
            <h2 className="circle"></h2>
            <span className="pg">PG</span>
          </div>
          <div className="movie-or-serie-title">
            <h3 className="title-serie-movie">Beyond Earth</h3>
          </div>
          <div className="play-button-hover">
            <img src={playButtonImg} alt="" className="start-img" />
            <span className="play-description">Play</span>
          </div>
        </div>
      </div>
    </SContainer>
  );
}
export default MainLobby;
