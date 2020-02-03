import React from "react";
import { Link } from "react-router-dom";
import Location from "./locatioins/location";

class HomePage extends React.Component {
  state = { brewery: "", type: "", ratting: 0 };
  render() {
    return (
      <div>
        <header>
          <h1>BEER ME</h1>
          <Link to="/">Sign Out</Link>
        </header>
        <Location />
      </div>
    );
  }
}

export default HomePage;
