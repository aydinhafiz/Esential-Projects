import React from "react";

import { SHomeHeader } from "./home-header.styles";

import searchImg from "../../assets/icon-search.svg";


import MovieBoxes from "../movies/movie-boxes";

function HomeHeader() {
  return (
    <SHomeHeader>
      <div className="header">
        <img src={searchImg} alt="" className="magnify" />
        <input
          type="text"
          placeholder="Search for movies or TV series"
          className="search-for-movies"
        />
      </div>

      <MovieBoxes />
    </SHomeHeader>
  );
}
export default HomeHeader;
