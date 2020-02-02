import React from "react";
import "./SignIn.css";

class SignIn extends React.Component {
  render() {
    return (
      <>
        <header>Sign In</header>
        <form className="signIn">
          <fieldset>
            <legend>Sign In</legend>
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
            <button type="submit">Sign In</button>
          </fieldset>
        </form>
      </>
    );
  }
}

export default SignIn;
