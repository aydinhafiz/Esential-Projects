import SContent from "./content.styles";
import CreatePlanInfo from "./create-plan-info";
import TypesOfCoffee from "./types-of-coffee";
// import "/assets/home/desktop/image-gran-espresso.png"
// import "/assets/home/desktop/image-planalto.png"
// import "/assets/home/desktop/image-piccollo.png"
// import "/assets/home/desktop/image-danche.png"  icon-coffee-bean.svg

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

const whyChooseUsAspectsData = [
  {
    chooseUsImg: "/assets/home/desktop/icon-coffee-bean.svg",
    chooseUsTitle: "Best Quality",
    chooseUsDescription:
      "Discover an endless variety of the world’s best artisan coffee from each of our roasters.",
  },
  {
    chooseUsImg: "/assets/home/desktop/icon-gift.svg",
    chooseUsTitle: "Best Quality",
    chooseUsDescription:
      "Discover an endless variety of the world’s best artisan coffee from each of our roasters.",
  },
  {
    chooseUsImg: "/assets/home/desktop/icon-truck.svg",
    chooseUsTitle: "Best Quality",
    chooseUsDescription:
      "Discover an endless variety of the world’s best artisan coffee from each of our roasters.",
  },
];

function Content() {
  return (
    <SContent>
      <CreatePlanInfo />
      <TypesOfCoffee coffeeData={coffeeTypesData} />
      <div className="why-choose-us">
        <div className="why-choose-us-intro">
          <h2 className="why-choose-us-title">Why choose us?</h2>
          <p className="why-choose-us-description">
            A large part of our role is choosing which particular coffees will
            be featured in our range. This means working closely with the best
            coffee growers to give you a more impactful experience on every
            level.
          </p>
        </div>
        <div className="why-choose-us-boxes">
          {whyChooseUsAspectsData.map(function (props) {
            return (
              <div className="choose-us-box">
                <img
                  src={props.chooseUsImg}
                  alt=""
                  className="choose-box-img"
                />
                <h3 className="choose-box-title">{props.chooseUsTitle}</h3>
                <p className="choose-box-description">
                  {props.chooseUsDescription}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </SContent>
  );
}

export default Content;
