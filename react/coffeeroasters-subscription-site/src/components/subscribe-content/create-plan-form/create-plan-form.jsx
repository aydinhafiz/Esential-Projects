import React, { useState } from "react";
import styled from "styled-components";

function CreatePlanForm() {
  return (
    <SCreatePlanForm>
      <SideBarForm />
      <DecisionPanel />
    </SCreatePlanForm>
  );
}

export default CreatePlanForm;

function SideBarForm() {
  const SideBarStepData = [
    {
      steptitle: "Preferences",
    },
    {
      steptitle: "Bean Type",
    },
    {
      steptitle: "Quantity",
    },
    {
      steptitle: "Grind Option",
    },
    {
      steptitle: "Deliveries",
    },
  ];

  return (
    <SSideBarForm>
      <div className="side-bar-steps">
        {SideBarStepData.map(function (props, i) {
          return <SideBarStep key={i} {...{ ...props, num: i + 1 }} />;
        })}
      </div>
    </SSideBarForm>
  );
}

function SideBarStep({ steptitle, num }) {
  return (
    <div className="side-bar-step">
      <span className="side-bar-step-num">0{num}</span>
      <h3 className="side-bar-step-title">{steptitle}</h3>
    </div>
  );
}

function DecisionPanel() {
  const [questions, setQuestions] = useState([
    {
      id: 1,
      title: "How do you drink your coffee?",
      options: [
        {
          id: 1,
          title: "Capsule",
          description: "Compatible with Nespresso systems and similar brewers",
        },
        {
          id: 2,
          title: "Filter",
          description:
            "For pour over or drip methods like Aeropress, Chemex, and V60",
        },
        {
          id: 3,
          title: "Espresso",
          description:
            "Dense and finely ground beans for an intense, flavorful experience",
        },
      ],
    },
    {
      id: 2,
      title: "What type of coffee?",
      options: [
        {
          id: 1,
          title: "Single Origin",
          description:
            "Distinct, high quality coffee from a specific family-owned farm",
        },
        {
          id: 2,
          title: "Decaf",
          description:
            "Just like regular coffee, except the caffeine has been removed",
        },
        {
          id: 3,
          title: "Blended",
          description:
            "Combination of two or three dark roasted beans of organic coffees",
        },
      ],
    },
    {
      id: 3,
      title: "How much would you like?",
      options: [
        {
          id: 1,
          title: "250g",
          description:
            "Perfect for the solo drinker. Yields about 12 delicious cups.",
        },
        {
          id: 2,
          title: "500g",
          description:
            "Perfect option for a couple. Yields about 40 delectable cups.",
        },
        {
          id: 3,
          title: "1000g",
          description:
            "Perfect for offices and events. Yields about 90 delightful cups.",
        },
      ],
    },
    {
      id: 4,
      title: "Want us to grind them?",
      options: [
        {
          id: 1,
          title: "Wholebean",
          description: "Best choice if you cherish the full sensory experience",
        },
        {
          id: 2,
          title: "Filter",
          description:
            "For drip or pour-over coffee methods such as V60 or Aeropress",
        },
        {
          id: 3,
          title: "Cafetiére",
          description:
            "Course ground beans specially suited for french press coffee",
        },
      ],
    },
    {
      id: 5,
      title: "How often should we deliver?",
      options: [
        {
          id: 1,
          title: "Every week",
          description:
            "$7.20 per shipment. Includes free first-class shipping.",
        },
        {
          id: 2,
          title: "Every 2 weeks",
          description: "$9.60 per shipment. Includes free priority shipping.",
        },
        {
          id: 3,
          title: "Every month",
          description: "$12.00 per shipment. Includes free priority shipping.",
        },
      ],
    },
  ]);

  return (
    <SDecisionPanel>
      <div className="questions">
        {questions.map(function (question) {
          return (
            <div className="question">
              <h3 className="question-title">
                {question.title}
                <img
                  className="question-title-arrow"
                  src="/assets/plan/desktop/icon-arrow.svg"
                  alt=""
                />
              </h3>
              <div className="question-options">
                {question.options.map(function (option) {
                  return (
                    <div className="question-default-option">
                      <h4 className="default-option-title">{option.title}</h4>
                      <p className="default-option-description">
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

const SDecisionPanel = styled.div`
  max-width: 730px;
  margin-right: 165px;

  .question {
    margin-bottom: 88px;
  }

  .question-title {
    color: #83888f;
    font-family: "Fraunces" 9pt;
    font-size: 40px;
    font-style: normal;
    font-weight: 900;
    line-height: 48px;

    margin-bottom: 56px;
    cursor: pointer;
  }

  .question-title-arrow {
    padding-left: 80px;
  }

  .question-default-option {
    padding: 32px 28px 84px 28px;
    border-radius: 8px;
    background: #f4f1eb;
    max-width: 235px;
  }

  .default-option-title {
    color: #333d4b;
    font-family: "Fraunces" 9pt;
    font-size: 24px;
    font-style: normal;
    font-weight: 900;
    line-height: 32px;

    margin-bottom: 24px;
  }

  .question-options {
    display: flex;
    gap: 51px;
  }
`;

const SCreatePlanForm = styled.div`
  display: flex;
  justify-content: space-between;
`;

const SSideBarForm = styled.div`
  margin-left: 85px;

  .side-bar-steps {
    max-width: 255px;
  }

  .side-bar-step {
    display: flex;
    border-bottom: 1px solid rgba(131, 136, 143, 0.25);
    padding-bottom: 24px;
    margin-bottom: 24px;
  }

  .side-bar-step:last-child {
    border-bottom: none;
  }

  .side-bar-step-num {
    color: rgba(131, 136, 143, 0.5);
    font-family: "Fraunces" 9pt;
    font-size: 24px;
    font-style: normal;
    font-weight: 900;
    line-height: 32px;
    margin-right: 28.5px;
    cursor: pointer;
  }

  .side-bar-step-num:hover {
    color: rgba(51, 61, 75, 0.7);
  }

  .side-bar-step-title {
    color: rgba(51, 61, 75, 0.5);
    font-family: "Fraunces" 9pt;
    font-size: 24px;
    font-style: normal;
    font-weight: 900;
    line-height: 32px;
    cursor: pointer;
  }

  .side-bar-step-title:hover {
    color: rgba(51, 61, 75, 0.7);
  }

  /* .side-bar-step-num-active {
    color: #0e8784;
    font-family: "Fraunces" 9pt;
    font-size: 24px;
    font-style: normal;
    font-weight: 900;
    line-height: 32px;

    margin-right: 28.5px;
  }

  .side-bar-step-title-active {
    color: #333d4b;
    font-family: "Fraunces" 9pt;
    font-size: 24px;
    font-style: normal;
    font-weight: 900;
    line-height: 32px;
  } */
`;
