import "../App.css";

import searchImg from "../assets/icon-search.svg";
import SideBar from "../components/home-sidebar/home-sidebar";

function Home() {
  return (
    <div className="home-container">
      <div className="home-content">
        <SideBar />
        <div className="home-header">
          <img src={searchImg} alt="" className="magnify" />
          <input
            type="text"
            placeholder="Search for movies or TV series"
            className="search-for-movies"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
