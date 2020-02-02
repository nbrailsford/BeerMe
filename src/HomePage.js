import React from "react";
import { Link } from "react-router-dom";

class HomePage extends React.Component {
  render() {
    return (
      <header>
        <h1>Hello</h1>
        <Link to="/">Sign Up</Link>
      </header>
    );
  }
}

export default HomePage;
