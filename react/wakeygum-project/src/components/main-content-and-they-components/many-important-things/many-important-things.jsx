import React from "react";
import blitz from "../../../assets/blitz.png";
import { SManyImportantThings } from "./many-important-things.styles";
const dataImportantThings = [
  {
    img: "",
    importantDescription: "Snappy Process",
    importantparagraph: "Snappy Process",
  },
  {
    img: "",
    importantDescription: "Snappy Process",
    importantparagraph: "Snappy Process",
  },
  {
    img: "",
    importantDescription: "Snappy Process",
    importantparagraph: "Snappy Process",
  },
];

function ManyImportantThings() {
  return (
    <SManyImportantThings>
      <div className="important-things">
        <div className="important-img-bar">
          <img className="important-img" src={blitz} alt="" />
        </div>
        <span className="important-description">Snappy Process</span>
        <p className="important-paragraph">
          Our application process can be completed in minutes, not hours. Don’t
          get stuck filling in tedious forms.
        </p>
      </div>
    </SManyImportantThings>
  );
}
export default ManyImportantThings;
