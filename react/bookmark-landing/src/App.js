import "./App.css";
import BoardAndInfo from "./components/boar-and-info";
import BrowserPanel from "./components/browsers-panel";
import Content from "./components/content";
import Header from "./components/header";
import Navbar from "./components/navbar";
import SomeQuestions from "./components/some-questions-about-bookmark";
import TheLast from "./components/the-end";

function App() {
  return (
    <div>
      <div className="container">
        <Header />
        <Content />
        <Navbar />
        <BoardAndInfo />
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
        <BrowserPanel />
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
        <SomeQuestions />
      </div>
      <TheLast />
    </div>
  );
}

export default App;
