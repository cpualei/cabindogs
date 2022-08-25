import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, Redirect } from "react-router-dom";
import * as sessionActions from "../../store/session";
import terrior from "./terrior.jpg"
import "../LoginForm/LoginForm.css";

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
    <>
      <div
        id="bkgrnd-img"
        style={{
          // backgroundImage: `url(https://cdn.80.lv/api/upload/content/29/606a861e97a38.jpg)`,
          backgroundImage: `url(https://cbsaustin.com/resources/media/cb9285fb-ff16-441a-b156-d227c9a7810d-jumbo16x9_GettyImages1216278125.jpg?1616544103796)`,
          height: "100vh",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div id="login-signup-form-outer-container">
          <div id="login-signup-form-container">
            <h2 id="login-signup-title">Don't have an account?</h2>
            <p id="login-signup-sub-title">Sign up now, for free!</p>

            <div id="login-signup-form-div">
              <form id="login-signup-form" onSubmit={handleSubmit}>
                <ul id="signup-ul">
                  {errors.map((error, idx) => (
                    <li key={idx}>{error}</li>
                  ))}
                </ul>
                <div id="login-signup-inputs-div">
                  <input
                    className="login-signup-label-input"
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                    required
                  />
                  <br />
                  <input
                    className="login-signup-label-input"
                    id="login-signup-input"
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Username"
                    required
                  />
                  <br />
                  <input
                    className="login-signup-label-input"
                    id="login-signup-input"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    required
                  />
                  <br />
                  <input
                    className="login-signup-label-input"
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="Confirm password"
                    required
                  />
                </div>
                <div id="btns-div">
                  <button className="login-signup-and-demo-btns" type="submit">
                    Sign Up
                  </button>
                </div>
                <p id="login-signup-bottom-form-text">
                  Already have an account?{" "}
                  <NavLink
                    to="/login"
                    id="login-signup-bottom-form-link"
                    style={{ textDecoration: "none" }}
                  >
                    Sign in!
                  </NavLink>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignupFormPage;
