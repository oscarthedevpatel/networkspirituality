import "./App.css";
import React, { Component, createRef } from "react";
import Navigation from "./components/Navbar/MyNavbar";
import FallingImages from "./components/FallingImages/FallingImages";
import CentralNav from "./components/CentralNav/centralNav"

class App extends Component {
  render() {
    return (
      <div className="background">
        {/* <FallingImages /> */}
        <CentralNav />


      </div>
    );
  }
}
export default App;
