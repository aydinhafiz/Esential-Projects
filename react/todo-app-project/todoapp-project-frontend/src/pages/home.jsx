import React from "react";
import ToDo from "../components/ToDo";

function Home() {
  return (
    <div>
      <div className="container">
        <h1>ToDo App</h1>

        <div className="top">
          <input type="text" placeholder="Add ToDos.." />

          <div className="add">Add</div>

          <div className="list">
            <ToDo text="hi" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
