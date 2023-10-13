import React from "react";
import "../App.css";

import Content from "../components/content/content";
import Navbar from "../components/navbar/navbar";
import Header from "../components/header/header";

function Home() {
  return (
    <div className="container">
      <Navbar />
      <Header />
      <Content />
    </div>
  );
}

export default Home;
