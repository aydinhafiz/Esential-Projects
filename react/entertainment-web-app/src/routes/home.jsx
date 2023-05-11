import "../App.css";

import HomeHeader from "../components/home-header/home-header";
import SideBar from "../components/home-sidebar/home-sidebar";

function Home() {
  return (
    <div className="home-container">
      <div className="home-content">
        <SideBar />
        <HomeHeader />
        <div className="trending-movies">
          <h2 className="trending-title">Trending</h2>
          <div className="trending-movie"></div>
        </div>
      </div>
    </div>
  );
}

export default Home;
