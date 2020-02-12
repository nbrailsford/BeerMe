import React from "react";
import { Link } from "react-router-dom";
import Brewerys from "./Brewreys/Brewery";
import "./homePage.css";

class HomePage extends React.Component {
  state = { brewery: "", type: "", ratting: 0 };
  render() {
    return (
      <main>
        <header>
          <h1>BEER ME</h1>
          <Link to="/" className="Link">
            Sign Out
          </Link>
        </header>
        <div className="brewContainer">
          <Brewerys />
        </div>
      </main>
    );
  }
}

export default HomePage;
