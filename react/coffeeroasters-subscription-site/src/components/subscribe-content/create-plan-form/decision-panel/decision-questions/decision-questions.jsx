import React from "react";
import SQuestions from "./decision-questions.style";
import QuestionOptions from "./question-options/question-options";

function DecisionQuestions({ questions, toggleQuestion, questionOpenStates }) {
  return (
    <SQuestions>
      {questions.map(function (question, index) {
        return (
          <div className="question" key={question.id}>
            <h3
              className="question-title"
              onClick={() => toggleQuestion(index)}
            >
              {question.title}
              <img
                className={"question-title-arrow"}
                src="/assets/plan/desktop/icon-arrow.svg"
                alt=""
              />
            </h3>
            <QuestionOptions
              questionOpenStates={questionOpenStates}
              question={question}
              index={index}
            />
          </div>
        );
      })}
    </SQuestions>
  );
}

export default DecisionQuestions;
