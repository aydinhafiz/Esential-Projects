import hero from "../images-react/illustration-hero.svg";
import rectangle from "../images-react/Rectangle.png";
function Content() {
  return (
    <div className="content">
      <div className="informations">
        <div className="title">
          <h2>A Simple Bookmark Manager</h2>
          <p className="description">
            A clean and simple interface to organize your favourite websites.
            Open a new browser tab and see your sites load instantly. Try it for
            free.
          </p>
        </div>
        <div className="get-it-buttons">
          <button className="onChrome">Get it on Chrome</button>
          <button className="onFirefox">Get it on Firefox</button>
        </div>
      </div>
      <div className="tablet-img">
        <img className="tablet" src={hero} alt="" />
        <img className="Rectangle" src={rectangle} alt="" />
      </div>
    </div>
  );
}

export default Content;
