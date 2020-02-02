import React from "react";
import { Route, Router } from "react-router-dom";
import SignUp from "./SignInSignUp/SignUp";
import "./App.css";
import HomePage from "./HomePage";

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={SignUp} />
      <Route exact path="/homePage" component={HomePage} />
    </div>
  );
}

export default App;
