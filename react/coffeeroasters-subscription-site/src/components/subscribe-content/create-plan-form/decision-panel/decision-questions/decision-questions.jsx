import React, { useState } from "react";
import SQuestions from "./decision-questions.style";
import QuestionOptions from "./question-options/question-options";

function DecisionQuestions({ questions, toggleQuestion, questionOpenStates }) {
  return (
    <SQuestions>
      {questions.map(function (question, index) {
        return (
          <div className="question" key={question.id}>
            <div className="question-header">
              <h3
                className="question-title"
                onClick={() => toggleQuestion(index)}
              >
                {question.title}
              </h3>
              <img
                src="/assets/plan/desktop/icon-arrow.svg"
                alt=""
                className={
                  questionOpenStates[index]
                    ? "question-title-arrow-active"
                    : "question-title-arrow"
                }
              />
            </div>
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
