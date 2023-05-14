import React from "react";

import favouriteImg from "../../assets/favourite-picture.png";

import "./movie-box.css";
function MovieBox(props) {
  return (
    <div className="trending-movie">
      <img src={props.thumbnail} alt="" />

      <div className="favourite-side">
        <img src={favouriteImg} alt="favourite-picture" />
      </div>

      <div className="movie-description">
        <div className="category">
          <span className="movie-year card">{props.year}</span>
          <span className="circle"></span>
          <span className="movie-or-serie card">
            {" "}
            <img src="" alt="" /> {props.category}{" "}
          </span>
          <span className="circle"></span>
          <span className="pg card">{props.rating}</span>
        </div>
        <h2 className="movie-title">{props.title}</h2>
      </div>
    </div>
  );
}
export default MovieBox;
