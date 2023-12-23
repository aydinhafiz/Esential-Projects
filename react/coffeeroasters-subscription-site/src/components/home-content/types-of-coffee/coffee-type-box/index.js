import React from "react";
import { STypeOfCoffeeBox } from "./styles";

function CoffeeTypeBox({
  coffeeType,
  coffeImg,
  coffeeDescription,
  handleCoffeeClick,
  clickedCoffees,
}) {
  return (
    <STypeOfCoffeeBox key={coffeeType}>
      <img src={coffeImg} alt="" className="coffe-type__img" />
      <h3
        className={
          clickedCoffees.includes(coffeeType)
            ? "coffee-type__title-active"
            : "coffee-type__title"
        }
        onClick={() => handleCoffeeClick(coffeeType)}
      >
        {coffeeType}
      </h3>
      <p className="coffee-type__description">{coffeeDescription}</p>
    </STypeOfCoffeeBox>
  );
}

export default CoffeeTypeBox;
