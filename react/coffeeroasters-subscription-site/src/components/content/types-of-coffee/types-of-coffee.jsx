import React from "react";
import { STypesOfCoffee } from "./types-of-coffe.styles";

const coffeeTypesData = [
  {
    coffeImg: "/assets/home/desktop/image-gran-espresso.png",
    coffeeType: "Gran Espresso",
    coffeeDescription:
      "Light and flavorful blend with cocoa and black pepper for an intense experience.",
  },
  {
    coffeImg: "/assets/home/desktop/image-planalto.png",
    coffeeType: "Planalto",
    coffeeDescription:
      "Brazilian dark roast with rich and velvety body, and hints of fruits and nuts.",
  },
  {
    coffeImg: "/assets/home/desktop/image-piccollo.png",
    coffeeType: "Picollo",
    coffeeDescription:
      "Mild and smooth blend featuring notes of toasted almond and dried cherry.",
  },
  {
    coffeImg: "/assets/home/desktop/image-danche.png",
    coffeeType: "Danche",
    coffeeDescription:
      "Ethiopian hand-harvested blend densely packed with vibrant fruit notes.",
  },
];

function TypesOfCoffee() {
  return (
    <STypesOfCoffee>
      <img
        className="our-collection"
        src="/assets/home/desktop/ourcollection.png"
        alt=""
      />

      {coffeeTypesData.map(function (props) {
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
