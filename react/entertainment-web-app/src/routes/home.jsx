import "../App.css";

import HomeContent from "../components/home-header/home-content";

import SideBar from "../components/home-sidebar/home-sidebar";

function Home() {
  return (
    <div className="home-container">
      <div className="home-content">
        <SideBar />
        <HomeContent />
      </div>
    </div>
  );
}

export default Home;
