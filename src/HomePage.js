import React from "react";
import { Link } from "react-router-dom";
import Location from "./locatioins/location";
import Brewerys from "./Brewreys/Brewery";
import "./homePage.css";

class HomePage extends React.Component {
  state = { brewery: "", type: "", ratting: 0 };
  render() {
    return (
      <div className="breweryContainer">
        <header>
          <h1>BEER ME</h1>
          <Link to="/">Sign Out</Link>
        </header>
        <Brewerys />
        <Location />
      </div>
    );
  }
}

export default HomePage;
