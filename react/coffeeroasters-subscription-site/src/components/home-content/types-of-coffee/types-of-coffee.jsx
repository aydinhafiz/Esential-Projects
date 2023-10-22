import React from "react";
import { STypesOfCoffee } from "./types-of-coffe.styles";
import CoffeeTypeBox from "./coffee-type-box";

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
      {/* <img
        className="our-collection"
        src="/assets/home/desktop/ourcollection.png"
        alt=""
      /> */}

      {coffeeTypesData.map(function (props) {
        return <CoffeeTypeBox {...props} />;
      })}
    </STypesOfCoffee>
  );
}

export default TypesOfCoffee;
