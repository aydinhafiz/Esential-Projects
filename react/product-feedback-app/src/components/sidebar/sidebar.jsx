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
          <div className="category">
            <span className="all-ui-ux-categories">Feature</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
