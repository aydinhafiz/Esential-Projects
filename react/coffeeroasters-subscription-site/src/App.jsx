import "./App.css";
import Content from "./components/content/content";
import Header from "./components/header/header";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Header />
        <Content />
      </div>
    </div>
  );
}

export default App;
