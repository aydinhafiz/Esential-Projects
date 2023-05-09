import React from "react";
import { SSideBar } from "./home-sidebar.styles";

import sidebarImg from "../../assets/Movie.png";

import homeImg from "../../assets/icon-nav-home.svg";
import movieImg from "../../assets/icon-nav-movies.svg";
import tvImage from "../../assets/icon-nav-tv-series.svg";
import favouriteImg from "../../assets/icon-nav-bookmark.svg";
import profileImg from "../../assets/image-avatar.png";

function SideBar() {
  return (
    <SSideBar>
      <img src={sidebarImg} alt="" className="sidebar-header-img" />
      <div className="categories">
        <img src={homeImg} alt="" className="film-category" />
        <img src={movieImg} alt="" className="film-category" />
        <img src={tvImage} alt="" className="film-category" />
        <img src={favouriteImg} alt="" className="film-category" />
      </div>
      <div className="profile-img">
        <img src={profileImg} alt="" className="profile" />
      </div>
    </SSideBar>
  );
}
export default SideBar;
