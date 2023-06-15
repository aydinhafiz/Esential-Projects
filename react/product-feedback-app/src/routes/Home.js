import "../App.css";
import Header from "../components/header/header";
import SideBar from "../components/sidebar/sidebar";
import FeedbackContent from "./feedback-conent";

function App() {
  return (
    <div className="container">
      <SideBar />
      <div className="content">
        <Header />
        <FeedbackContent />
      </div>
    </div>
  );
}

export default App;
