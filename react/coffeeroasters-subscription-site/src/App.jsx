import "./App.css";
import SNavbar from "./components/header.styles";

function App() {
  return (
    <div className="App">
      <div className="container">
        <SNavbar>
          <div className="header">
            <div className="logo-img-header">
              <img
                src="/assets/shared/desktop/logo.svg"
                alt=""
                className="logo-header"
              />
            </div>
            <div className="option-elements-header">
              <button className="elements-header">HOME</button>
              <button className="elements-header">ABOUT US</button>
              <button className="elements-header">CREATE YOUR PLAN</button>
            </div>
          </div>
          <div className="create-plan-description">
            <img
              className="create-plan-bg-image"
              src="/assets/home/desktop/image-hero-coffeepress.jpg"
              alt=""
            />
            <div className="create-plan-info">
              <h2 className="create-plan-title">Great coffee made simple.</h2>
              <p className="create-plan-paragraph">
                Start your mornings with the world’s best coffees. Try our
                expertly curated artisan coffees from our best roasters
                delivered directly to your door, at your schedule.
              </p>
              <button className="create-plan-button">Create your plan</button>
            </div>
          </div>
        </SNavbar>
      </div>
    </div>
  );
}

export default App;
