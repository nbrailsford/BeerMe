import React from "react";
import { Link } from "react-router-dom";
import Brewerys from "./Brewreys/Brewery";
import "./homePage.css";

class HomePage extends React.Component {
  state = { brewery: "", type: "", isSelected: false, State: "Colorado" };

  stateInput = e => {
    e.preventDefault();
    this.setState({ isSelected: true });
  };
  render() {
    if (this.state.isSelected) {
      return (
        <main>
          <header>
            <h1>BEER ME</h1>
            <Link to="/" className="Link">
              Sign Out
            </Link>
          </header>
          <div className="brewContainer">
            <Brewerys Location={this.state.State} />
          </div>
        </main>
      );
    } else {
      return (
        <div>
          <form onSubmit={this.stateInput}>
            <label htmlFor="state">Choose a State</label>
            <input
              type="text"
              name="user-state"
              id="user-state"
              required
              onChange={e => this.setState({ State: e.target.value })}
              value={this.state.State}
            />
          </form>
          <p>testing testing one two three</p>
        </div>
      );
    }
  }
}

export default HomePage;
