import React from "react";
import styled from "styled-components";
////////////////////////////DATA/////////////////////////////////////

/////////////////////IMAGES/////////////////////////////////
import trendMovieImg from "../../assets/movie-img-trending.png";
import playButtonImg from "../../assets/play-button.png";
import onlyMovies from "../../assets/only-films.png";

const STrendingMovieContent = styled.div`
  .category-trending {
    font-family: "Outfit";
    font-style: normal;
    font-weight: 300;
    font-size: 32px;
    line-height: 40px;
    letter-spacing: -0.5px;

    color: #ffffff;
  }
`;

function TrendingMovie(props) {
  return (
    <STrendingMovieContent>
      <h2 className="category-trending">Trending</h2>
      <div className="trend-movie">
        <img src={trendMovieImg} alt="" className="movie-title-img" />
        <div className="movie-or-serie-info">
          <span className="time-year">{props.year}</span>
          <h2 className="circle"></h2>
          <div className="movie-or-serie-filter">
            <img className="movie-img" src={onlyMovies} alt="" />
            <span className="movie-or-serie-filter-span">{props.category}</span>
          </div>
          <h2 className="circle"></h2>
          <span className="pg">{props.category}</span>
        </div>
        <div className="movie-or-serie-title">
          <h3 className="title-serie-movie">{props.title}</h3>
        </div>
        <div className="play-button-hover">
          <img src={playButtonImg} alt="" className="start-img" />
          <span className="play-description">Play</span>
        </div>
      </div>
    </STrendingMovieContent>
  );
}
export default TrendingMovie;
