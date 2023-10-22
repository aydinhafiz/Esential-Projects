import React from "react";
import { STypeOfCoffeeBox } from "./styles";

function CoffeeTypeBox({ coffeeType, coffeImg, coffeeDescription }) {
  return (
    <STypeOfCoffeeBox key={coffeeType}>
      <img src={coffeImg} alt="" className="coffe-type__img" />
      <h3 className="coffee-type__title">{coffeeType}</h3>
      <p className="coffee-type__description">{coffeeDescription}</p>
    </STypeOfCoffeeBox>
  );
}

export default CoffeeTypeBox;
