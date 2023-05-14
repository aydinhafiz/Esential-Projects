import React from "react";

import { SHomeContent } from "./home-content.styles";

import searchImg from "../../assets/icon-search.svg";

import MovieBoxes from "../movies/movie-boxes";

function HomeContent() {
  return (
    <SHomeContent>
      <div className="header">
        <img src={searchImg} alt="" className="magnify" />
        <input
          type="text"
          placeholder="Search for movies or TV series"
          className="search-for-movies"
        />
      </div>

      <MovieBoxes />
    </SHomeContent>
  );
}
export default HomeContent;
