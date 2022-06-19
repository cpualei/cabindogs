import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, Redirect } from "react-router-dom";
import * as sessionActions from "../../store/session";

import "./SignupForm.css";

function SignupFormPage() {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState([]);

  if (sessionUser) return <Redirect to="/" />;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      setErrors([]);
      return dispatch(
        sessionActions.signup({ email, username, password })
      ).catch(async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      });
    }
    return setErrors([
      "Confirm Password field must be the same as the Password field",
    ]);
  };

  return (
    <div>
      <h1 id="title">Don't have an account?</h1>
      <p id="sub-title">Sign up now, for free!</p>

      <div id="sign-up-form-div">
        <form id="form" onSubmit={handleSubmit}>
          <ul id="signup-ul">
            {errors.map((error, idx) => (
              <li key={idx}>{error}</li>
            ))}
          </ul>
          <div id="labels-inputs-btns-div">
            <div id="labels-inputs-div">
              <label className="email-user-pw-label-input">
                Email
                <input
                  className="email-user-pw-label-input"
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </label>
              <label className="email-user-pw-label-input">
                Username
                <input
                  className="email-user-pw-label-input"
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </label>
              <label className="email-user-pw-label-input">
                Password
                <input
                  className="email-user-pw-label-input"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </label>
              <label className="email-user-pw-label-input">
                Confirm Password
                <input
                  className="email-user-pw-label-input"
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
              </label>
            </div>
          </div>
          <button id="signup-form-btn" type="submit">
            Sign Up
          </button>
          <p id="bottom-form-text">
            Already have an account?{" "}
            <NavLink to="/login" id="bottom-form-link" style={{ textDecoration: "none" }}>
              Sign in!
            </NavLink>
          </p>
        </form>
      </div>
    </div>
  );
}

export default SignupFormPage;
