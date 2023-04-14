import React from "react";
import styled from "styled-components";
import { STrendingMovies } from "./trending.styles";

import trendMovieImg from "../../assets/movie-img-trending.png";
import playButtonImg from "../../assets/play-button.png";
import onlyMovies from "../../assets/only-films.png";

function TrendingMovies() {
  return (
    <STrendingMovies>
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
    </STrendingMovies>
  );
}
export default TrendingMovies;
