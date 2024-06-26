import React from "react";

function SideBar() {
  return (
    <div className="sidebar">
      <div className="feedback-board">
        <div className="frontend-mentor-description">
          <h2 className="mentor-title">Frontend Mentor</h2>
          <p className="mentor-board">Feedback Board</p>
        </div>
      </div>
      

      <div className="category-board">
        <div className="categories">
          <div className="category">
            <span className="all-ui-ux-categories">All</span>
            <span className="all-ui-ux-categories">UI</span>
            <span className="all-ui-ux-categories">UX</span>
          </div>
          <div className="category">
            <span className="all-ui-ux-categories">Enhancement</span>
            <span className="all-ui-ux-categories">Bug</span>
          </div>
          <div className="category-3">
            <span className="all-ui-ux-categories">Feature</span>
          </div>
        </div>
      </div>

      <div className="roadmap">
        <div className="roadmap-header">
          <h2 className="roadmap-title">Roadmap</h2>
          <button className="view-button">View</button>
        </div>
        <div className="roadmap-filter">
          <div className="planned">
            <span className="circle-color"></span>
            <p className="which-status">Planned</p>

            <span className="how-many">2</span>
          </div>

          <div className="in-progress">
            <span className="circle-color"></span>
            <p className="which-status">In-Proggress</p>
            <span className="how-many">3</span>
          </div>
          <div className="Live">
            <span className="circle-color"></span>
            <p className="which-status">Live</p>
            <span className="how-many">1</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
