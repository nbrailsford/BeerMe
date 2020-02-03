import React from "react";
import { Route } from "react-router-dom";
import SignUp from "./SignInSignUp/SignUp";
import HomePage from "./HomePage";
import "./App.css";

function App() {
  return (
    <>
      <div className="App">
        <Route exact path="/" component={SignUp} />
        <Route exact path="/homePage" component={HomePage} />
      </div>
    </>
  );
}

export default App;
