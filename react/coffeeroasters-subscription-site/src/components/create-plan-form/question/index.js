import React from "react";
import Answer from "../answer";
import SQuestion from "./question.styles";

function Question({ toggleQuestionAcc, question }) {
  return (
    <SQuestion>
      <button
        className="question-header"
        onClick={() => toggleQuestionAcc(question.id)}
      >
        <h2 className="question-title">{question.title}</h2>
        <img
          src="/assets/plan/desktop/icon-arrow.svg"
          alt=""
          className={`question-title-arrow${question.open ? "-open" : ""}`}
        />
      </button>

      {question.open && (
        <div className="answers-panel">
          {question.options.map(function (option) {
            return <Answer answer={option} key={option.id} />;
          })}
        </div>
      )}
    </SQuestion>
  );
}

export default Question;
