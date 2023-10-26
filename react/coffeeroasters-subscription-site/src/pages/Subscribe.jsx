import React from "react";
import Navbar from "../components/navbar/navbar";
import SubscribeHeader from "../components/subscribe-header/subscribe-header";
import styled from "styled-components";

function Subscribe() {
  return (
    <div className="container">
      <Navbar />
      <SubscribeHeader />
      <Steps />
    </div>
  );
}

export default Subscribe;

function Steps() {
  const steps = [
    {
      title: "Pick your coffee",
      description:
        "Select from our evolving range of artisan coffees. Our beans are ethically sourced and we pay fair prices for them. There are new coffees in all profiles every month for you to try out.",
    },
    {
      title: "Choose the frequency",
      description:
        "Customize your order frequency, quantity, even your roast style and grind type. Pause, skip or cancel your subscription with no commitment through our online portal.",
    },
    {
      title: "Receive and enjoy!",
      description:
        "We ship your package within 48 hours, freshly roasted. Sit back and enjoy award-winning world-class coffees curated to provide a distinct tasting experience.",
    },
  ];
  return (
    <SSubscribeSteps>
      {steps.map(function (step, i) {
        return <SubscribeStep key={i} {...{ ...step, num: i + 1 }} />;
      })}
    </SSubscribeSteps>
  );
}

function SubscribeStep({ num, title, description }) {
  return (
    <SSubscribeStep>
      <span className="step-num">0{num}</span>
      <h2 className="step-title">{title} </h2>
      <p className="step-description">{description} </p>
    </SSubscribeStep>
  );
}

const SSubscribeSteps = styled.div`
  background: #2c343e;
  display: flex;
  padding: 100px 150px 100px 85px;
`;

const SSubscribeStep = styled.div`
  max-width: 380px;
  position: relative;
  padding-top: 80px;

  &::before {
    content: "";
    height: 31px;
    width: 31px;
    border: 2px solid #0e8784;
    border-radius: 50%;
    position: absolute;
    top: 0;
    background: #2c343e;
  }

  &:not(:last-child) {
    padding-right: 95px;
  }

  &:not(:last-child)::after {
    content: "";
    position: absolute;
    height: 2px;
    width: 100%;
    top: 17px;
    left: 35px;
    background: #fdd6ba;
  }

  .step-num {
    display: inline-block;
    color: #fdd6ba;
    font-family: "Fraunces" 9pt;
    font-size: 72px;
    font-style: normal;
    font-weight: 900;
    line-height: 72px;

    margin-bottom: 38px;
  }
  .step-title {
    color: #fefcf7;
    font-family: "Fraunces" 9pt;
    font-size: 32px;
    font-style: normal;
    font-weight: 900;
    line-height: 36px;

    margin-bottom: 42px;
  }
  .step-description {
    color: #fefcf7;
    font-family: "Barlow";
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 26px;
  }
`;
