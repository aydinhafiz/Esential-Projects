import arrows from "../images-react/icon-arrow.svg"
function SomeQuestions() {
  return (
    <div className="some-questions-about-bookmark">
      <div className="what-is-bookmark">
        <span>What is Bookmark?</span>
        <img src={arrows} alt="" />
      </div>
      <div className="how-can-I-request-a-new-browser">
        <span>How can I request a new browser?</span>
        <img src={arrows} alt="" />
      </div>
      <div className="is-there-a-mobile-app">
        <span>Is there a mobile app?</span>
        <img src={arrows} alt="" />
      </div>
      <div className="What-about-other-Chromium-browsers">
        <span>What about other Chromium browsers?</span>
        <img src={arrows} alt="" />
      </div>

      <div className="more-info-button">
        <button>More Info</button>
      </div>
    </div>
  );
}

export default SomeQuestions;
