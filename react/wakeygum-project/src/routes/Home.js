import "../App.css";
import HeaderHome from "../components/header-home/header.home";
import ContentHome from "../components/home-content/content-home";

function App() {
  return (
    <div className="container">
      <div className="header-container">
        <HeaderHome />
      </div>
      <div className="content-container">
        <ContentHome />
      </div>
    </div>
  );
}

export default App;
