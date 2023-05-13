import React from "react";

import "./movie-box.css";

import movieBk from "../../assets/mobie-bg.png";

function MovieBox(props) {
  return (
    <div className="trending-movie">
      <img src={movieBk} alt="" />
    
      <div className="movie-description">
        <movie className="category">
          <span className="movie-year card">{props.year}</span>
          <span className="circle"></span>
          <span className="movie-or-serie card">
            {" "}
            <img src="" alt="" /> Movie{" "}
          </span>
          <span className="circle"></span>
          <span className="pg card">PG</span>
        </movie>
        <h2 className="movie-title">{props.title}</h2>
      </div>
    </div>
  );
}
export default MovieBox;
