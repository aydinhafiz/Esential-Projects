import React from "react";

function QuestionOptions({ questionOpenStates, question, index }) {
  return (
    <div className="question-options">
      {questionOpenStates[index]
        ? question.options.map(function (option) {
            return (
              <div className="question-default-option" key={option.id}>
                <h4 className="default-option-title">{option.title}</h4>
                <p className="default-option-description">
                  {option.description}
                </p>
              </div>
            );
          })
        : ""}
    </div>
  );
}

export default QuestionOptions;
