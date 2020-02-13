import React from "react";
import { Route } from "react-router-dom";
import SignUp from "./SignInSignUp/SignUp";
import HomePage from "./HomePage";
import InfoPage from "./InfoPage/InfoPage";
import "./App.css";

function App() {
  return (
    <>
      <div className="App">
        <Route exact path="/" component={SignUp} />
        <Route exact path="/homePage" component={HomePage} />
        <Route exact path="/InfoPage" component={InfoPage} />
      </div>
    </>
  );
}

export default App;
