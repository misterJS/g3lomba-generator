import React from "react";
import "./App.css";
import TeamGenerator from "./TeamGenerator";

function App() {
  return (
    <div>
      <h1 className="app-title">PINGPONG DRAWING TIM G3</h1>
      <p style={{ textAlign: "center" }}>by dion rt ganteng</p>
      <div className="teamgen-container">
        <TeamGenerator />
        <iframe
          src="https://challonge.com/g3pingpong/module"
          width="100%"
          height="500"
          frameborder="0"
          scrolling="auto"
          allowtransparency="true"
        ></iframe>
      </div>
    </div>
  );
}

export default App;
