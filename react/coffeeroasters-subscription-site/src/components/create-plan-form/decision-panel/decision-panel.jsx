import React, { useState } from "react";
import SDecisionPanel from "./decision-panel.styles";

function DecisionPanel({ questionsData }) {
  const [optionsIsOpen, setOptionsIsOpen] = useState(
    questionsData.map(() => false)
  );

  function toggleOption(index) {
    setOptionsIsOpen((prevOptions) => {
      const newOptions = [...prevOptions];
      newOptions[index] = !newOptions[index];
      return newOptions;
    });
  }

  return (
    <SDecisionPanel>
      <div className="questions">
        {questionsData.map(function (question, index) {
          return (
            <div className="question" key={question.title}>
              <div className="question-header">
                <h2
                  onClick={() => toggleOption(index)}
                  className="question-title"
                >
                  {question.title}
                </h2>
                {/* <img
                  src="/assets/plan/desktop/icon-arrow.svg"
                  alt=""
                  className={
                    optionsIsOpen[index]
                      ? "question-title-arrow-active"
                      : "question-title-arrow"
                  }
                /> */}
              </div>

              <div className="answer-panel">
                {optionsIsOpen[index] &&
                  question.options.map(function (option) {
                    return (
                      <div className="answers" key={option.id}>
                        <h3 className="answers-title">{option.title}</h3>
                        <p className="answers-description">
                          {option.description}
                        </p>
                      </div>
                    );
                  })}
              </div>
            </div>
          );
        })}
      </div>
    </SDecisionPanel>
  );
}

export default DecisionPanel;
