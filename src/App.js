import React from "react";
import "./App.css";
import TeamGenerator from "./TeamGenerator";

function App() {
  return (
    <div>
      <h1 className="app-title">E-sport DRAWING TIM G3</h1>
      <p style={{ textAlign: "center" }}>by dion rt ganteng</p>
      <div className="teamgen-container">
        {/* <TeamGenerator /> */}
        <h1 className="app-title">Bagan Tim Pingpong</h1>
        <div style={{ marginTop: 10 }}>
          <iframe
            src="https://challonge.com/g3pingpongtournament/module"
            width="100%"
            height="1000"
            frameborder="0"
            scrolling="auto"
            allowtransparency="true"
          ></iframe>
          <h1 className="app-title">Bagan Tim E-sport</h1>
          <iframe
            src="https://challonge.com/g3football/module"
            width="100%"
            height="1000"
            frameborder="0"
            scrolling="auto"
            allowtransparency="true"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default App;
