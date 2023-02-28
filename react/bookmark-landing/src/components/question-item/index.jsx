import React from "react";
import arrows from "../../images-react/icon-arrow.svg";

function QuestionItem(props) {
  const { question } = props;
  return (
    <div className="question-container">
      <span>{question}</span>
      <img src={arrows} alt="" />
    </div>
  );
}

export default QuestionItem;
