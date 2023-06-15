import React from "react";
import "../App.css";

import blueArrowUp from "../assets/blue-arrow-up.png";
import comment from "../assets/comments.png";

function FeedbackContent() {
  return (
    <div className="feedback">
      <div className="left-on-feedbacks">
        <div className="likes-bar">
          <img
            src={blueArrowUp}
            alt="blue-arrow-up"
            className="blue-arrow-up"
          />
          <span className="how-many-likes">112</span>
        </div>
        <div className="feedback-information">
          <h2 className="feedback-title">Add tags for solutions</h2>
          <p className="feedback-description">
            Easier to search for solutions based on a specific stack.
          </p>
          <button className="feedback-category">Enhancement</button>
        </div>
      </div>
      <div className="right-on-feedbacks">
        <div className="comment-bar">
          <img src={comment} alt="comment" className="comment" />
          <span className="how-many-comments">2</span>
        </div>
      </div>
    </div>
  );
}

export default FeedbackContent;
