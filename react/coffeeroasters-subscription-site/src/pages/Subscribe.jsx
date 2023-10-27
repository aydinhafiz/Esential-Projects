import React from "react";
import Navbar from "../components/navbar/navbar";
import SubscribeHeader from "../components/subscribe-header/subscribe-header";
import SubscribeContent from "../components/subscribe-content/subscribe-content";


function Subscribe() {
  return (
    <div className="container">
      <Navbar />
      <SubscribeHeader />
      <SubscribeContent />
    </div>
  );
}

export default Subscribe;
