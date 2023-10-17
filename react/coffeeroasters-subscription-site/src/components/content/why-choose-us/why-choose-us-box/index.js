import React from "react";
import { SWhyChooseBox } from "./style";

function WhyChooseUsBox({ chooseUsImg, chooseUsTitle, chooseUsDescription }) {
  return (
    <SWhyChooseBox>
      <img src={chooseUsImg} alt="" className="choose-box-img" />
      <h3 className="choose-box-title">{chooseUsTitle}</h3>
      <p className="choose-box-description">{chooseUsDescription}</p>
    </SWhyChooseBox>
  );
}

export default WhyChooseUsBox;
