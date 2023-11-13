import "./App.css";
import React, { Component } from "react";
import CentralNav from "./components/CentralNav/centralNav";

class App extends Component {
  render() {
    return (
      <div className="background">
        <div className="column-container">
          {/* <FallingImages /> */}
          <CentralNav />
          <br></br>
          <br></br>

          <br></br>
          <br></br>
          

          <div className="contract">
            0x2182014c324d57F7aF6A37a1C2Db11dac588F58A
          </div>
        </div>
      </div>
    );
  }
}

export default App;