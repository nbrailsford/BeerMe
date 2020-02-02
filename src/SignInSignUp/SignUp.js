import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Link } from "react-router-dom";
import "./SignIn.css";

class SignUp extends React.Component {
  render() {
    return (
      <>
        <form action="/signup" method="most" className="signup-form">
          <fieldset>
            <legend>Sign Up</legend>
            <label for="user-email">Email</label>
            <input
              type="email"
              placeholder="name@mail.com"
              name="user-email"
              id="user-email"
              required
            />
            <label for="user-password">Password</label>
            <input
              placeholder="passWoRd123"
              id="user-password"
              name="user-password"
              required
            />
            <button type="submit">Sign Up</button>
          </fieldset>
        </form>

        <footer role="contentinfo" className="footer">
          <p>
            Already have an account?
            <Link to="/homePage"> Sign In</Link>
          </p>
        </footer>
      </>
    );
  }
}

export default SignUp;
