import "./App.css";
import Content from "./components/content";
import Header from "./components/header";
import Navbar from "./components/navbar";

function App() {
  return (
    <div>
      <div className="container">
        <Header />
        <Content />
        <Navbar />
        <div className="board-and-info">
          <div className="board">
            <img
              className="boardimg"
              src="./images/illustration-features-tab-1.svg"
              alt=""
            />
            <img
              className="copypng"
              src="./images/Rectangle Copy 14.png"
              alt=""
            />
          </div>
          <div className="info">
            <span>Bookmark in one click</span>
            <p>
              Organize your bookmarks however you like. Our simple drag-and-drop
              interface gives you complete control over how you manage your
              favourite sites.
            </p>
            <div className="more-info-button">
              <button>More Info</button>
            </div>
          </div>
        </div>
        <div className="header-2">
          <div className="title-download">
            <span>Download the extension</span>
          </div>
          <div className="description-download">
            <p>
              We’ve got more browsers in the pipeline. Please do let us know if
              you’ve got a favourite you’d like us to prioritize.
            </p>
          </div>
        </div>
        <div className="browsers-panel">
          <div className="browser-chrome">
            <img src="./images/logo-chrome.svg" alt="" className="chrome" />
            <span>Add to Chrome</span>
            <p>Minimum version 62</p>
            <img src="./images/Combined Shape.png" alt="" className="line" />
            <div className="button-panel">
              <button>Add & Install Extension</button>
            </div>
          </div>
          <div className="browser-firefox">
            <img src="./images/logo-firefox.svg" alt="" className="firefox" />
            <span>Add to Firefox</span>
            <p>Minimum version 55</p>
            <img src="./images/Combined Shape.png" alt="" className="line" />
            <div className="button-panel">
              <button>Add & Install Extension</button>
            </div>
          </div>
          <div className="browser-opera">
            <img src="./images/logo-opera.svg" alt="" className="opera" />
            <span>Add to Opera</span>
            <p>Minimum version 46</p>
            <img src="./images/Combined Shape.png" alt="" className="line" />
            <div className="button-panel">
              <button>Add & Install Extension</button>
            </div>
          </div>
        </div>
        <div className="header-3">
          <div className="title-frequently">
            <span>Frequently Asked Questions</span>
          </div>
          <div className="description-frequently">
            <p>
              Here are some of our FAQs. If you have any other questions you’d
              like answered please feel free to email us.
            </p>
          </div>
        </div>
        <div className="some-questions-about-bookmark">
          <div className="what-is-bookmark">
            <span>What is Bookmark?</span>
            <img src="./images/icon-arrow.svg" alt="" />
          </div>
          <div className="how-can-I-request-a-new-browser">
            <span>How can I request a new browser?</span>
            <img src="./images/icon-arrow.svg" alt="" />
          </div>
          <div className="is-there-a-mobile-app">
            <span>Is there a mobile app?</span>
            <img src="./images/icon-arrow.svg" alt="" />
          </div>
          <div className="What-about-other-Chromium-browsers">
            <span>What about other Chromium browsers?</span>
            <img src="./images/icon-arrow.svg" alt="" />
          </div>

          <div className="more-info-button">
            <button>More Info</button>
          </div>
        </div>
      </div>
      <div className="outro">
        <div className="some-informations">
          <div className="already-joined">
            <p>35,000+ ALREADY JOINED</p>
            <span>Stay up-to-date with what we’re doing</span>
          </div>
          <div className="contact-infos">
            <input type="text" placeholder="Enter your email address" />
            <button>Contact Us</button>
          </div>
        </div>
      </div>

      <div className="the-end">
        <div className="logo-and-options">
          <img src="./images/Group 11.png" alt="" />
          <span className="features">FEATURES</span>
          <span className="pricing">PRICING</span>
          <span className="contact">CONTACT</span>
        </div>
        <div className="social-media">
          <img src="./images/icon-facebook.svg" alt="" className="facebook" />
          <img src="./images/icon-twitter.svg" alt="" className="twitter" />
        </div>
      </div>
    </div>
  );
}

export default App;
