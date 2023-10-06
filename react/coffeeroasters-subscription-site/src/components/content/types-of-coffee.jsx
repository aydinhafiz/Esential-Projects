import React from "react";
import { STypesOfCoffee } from "./content.styles";

function TypesOfCoffee(props) {
  const coffeeData = props.coffeeData;
  return (
    <STypesOfCoffee>
      <img
        className="our-collection"
        src="/assets/home/desktop/ourcollection.png"
        alt=""
      />

      {coffeeData.map(function (props) {
        return (
          <div className="coffee-type" key={props.coffeeType}>
            <img src={props.coffeImg} alt="" className="coffe-type__img" />
            <h3 className="coffee-type__title">{props.coffeeType}</h3>
            <p className="coffee-type__description">
              {props.coffeeDescription}
            </p>
          </div>
        );
      })}
    </STypesOfCoffee>
  );
}

export default TypesOfCoffee;
