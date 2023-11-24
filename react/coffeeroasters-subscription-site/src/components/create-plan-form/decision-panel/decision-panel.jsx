import React, { useState } from "react";
import SDecisionPanel from "./decision-panel.styles";
import Question from "../question";

function DecisionPanel({ questionsData, toggleQuestionAcc }) {
  // const [optionsIsOpen, setOptionsIsOpen] = useState(
  //   questionsData.map(() => false)
  // );

  // function toggleOption(index) {
  //   setOptionsIsOpen((prevOptions) => {
  //     const newOptions = [...prevOptions];
  //     newOptions[index] = !newOptions[index];
  //     return newOptions;
  //   });
  // }

  return (
    <SDecisionPanel>
      <div className="questions">
        {questionsData.map(function (question, index) {
          return (
            <Question
              key={question.title}
              toggleQuestionAcc={toggleQuestionAcc}
              question={question}
              index={index}
            />
          );
        })}
      </div>
    </SDecisionPanel>
  );
}

export default DecisionPanel;
