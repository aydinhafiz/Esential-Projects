import React from "react";

import { SHomeHeader } from "./home-header.styles";

import searchImg from "../../assets/icon-search.svg";

function HomeHeader() {
  return (
    <SHomeHeader>
      <img src={searchImg} alt="" className="magnify" />
      <input
        type="text"
        placeholder="Search for movies or TV series"
        className="search-for-movies"
      />
    </SHomeHeader>
  );
}
export default HomeHeader;
