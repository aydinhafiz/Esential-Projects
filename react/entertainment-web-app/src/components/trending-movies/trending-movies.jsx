import React from "react";
import { STrendingMovies } from "./trending.styles";
///////////////////////////////DATA/////////////////////////
import movieData from "../../data.json";
//////////////IMAGE////////////////////////////////////////
import TrendingMovie from "./trending-movie";

function TrendingMovies() {
  movieData.map(function (movie) {
    return (
      <STrendingMovies>
        <TrendingMovie
          key={movie.title}
          title={movie.title}
          year={movie.year}
          category={movie.category}
          rating={movie.rating}
        />
      </STrendingMovies>
    );
  });
}
export default TrendingMovies;
