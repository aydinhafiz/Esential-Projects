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

import TrendingMovies from "../trending-movies/trending-movies";
import { SContainer } from "./main-lobby.styles";


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
      <TrendingMovies />
    </SContainer>
  );
}
export default MainLobby;
