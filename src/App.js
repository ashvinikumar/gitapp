import React from "react";
import "./App.css";

import LeftColumn from "./LeftColumn/LeftColumn";
import RightColumn from "./RightColumn/RightColumn";

function App() {
  return (
    <div className="App">
      <div className="row padding5">
        <div className="container">
          {/* left column */}
          <div className="left-column">
            <LeftColumn />
          </div>
          {/* right column */}
          <div className="right-column">
            <RightColumn />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
