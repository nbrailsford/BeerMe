import React from "react";
import { Link } from "react-router-dom";
import "./SignIn.css";

class SignUp extends React.Component {
  render() {
    return (
      <>
        <form action="/signup" method="most" className="signup-form">
          <fieldset>
            <legend>Sign Up</legend>
            <label htmlFor="state">State</label>
            <input
              type="text"
              placeholder="Colorado"
              name="user-state"
              id="user-state"
              required
            />
            <label htmlFor="user-email">Email</label>
            <input
              type="email"
              placeholder="name@mail.com"
              name="user-email"
              id="user-email"
              required
            />
            <label htmlFor="user-password">Password</label>
            <input
              placeholder="passWoRd123"
              id="user-password"
              name="user-password"
              required
            />
            <button type="submit">Sign Up</button>
            <p>
              Already have an account?
              <Link to="/homePage" className="Link">
                {" "}
                Sign In
              </Link>
            </p>
          </fieldset>
        </form>

        <footer role="contentinfo" className="footer">
          <p> sign up form is not set up yet. click below to continue</p>
          <Link to="/HomePage">Click here to get started</Link>
        </footer>
      </>
    );
  }
}

export default SignUp;
