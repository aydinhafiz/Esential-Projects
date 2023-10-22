import React from "react";
import "../App.css";

import Content from "../components/home-content/content";
import Navbar from "../components/navbar/navbar";
import Header from "../components/home-header/header";

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
