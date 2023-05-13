import React from "react";
import { moviesData } from "../../data";
import MovieBox from "./movie-box";

function MovieBoxes() {
  return (
    <div className="trending-movies">

      {moviesData.map(function (movie) {
        return (
          <MovieBox
            key={movie.title}
            title={movie.title}
            year={movie.year}
            category={movie.category}
            rating={movie.rating}
            isBookmarked={movie.isBookmarked}
            isTrending={movie.isTrending}
          />
        );
      })}
    </div>
  );
}
export default MovieBoxes;
