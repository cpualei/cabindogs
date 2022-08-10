import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useHistory } from "react-router-dom";
import { Redirect } from "react-router-dom";
import "./LoginForm.css";

function LoginFormPage() {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const [credential, setCredential] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const history = useHistory();

  const handleDefaultButton = (e) => {
    e.preventDefault();
    const credential = "Demo-lition";
    const password = "password";
    return dispatch(sessionActions.login({ credential, password }))
      .then(() => history.push("/"))
      .catch(async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      });
  };

  if (sessionUser) return <Redirect to="/" />;

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    return dispatch(sessionActions.login({ credential, password })).catch(
      async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      }
    );
  };

  return (
    <>
      <div
        id="bkgrnd-img"
        style={{
          backgroundImage: `url(https://www.chaletvillage.com/wp-content/uploads/2017/09/shutterstock_512245666.jpg)`,
          height: "100vh",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div id="login-signup-form-outer-container">
          <div id="login-signup-form-container">
            <h2 id="login-signup-title">Welcome back!</h2>
            <p id="login-signup-sub-title">Let's get you and your pals outside.</p>

            <div id="login-signup-form-div">
              <form id="login-signup-form" onSubmit={handleSubmit}>
                <ul>
                  {errors.map((error, idx) => (
                    <li key={idx}>{error}</li>
                  ))}
                </ul>
                  <div id="login-signup-inputs-div">
                      <input
                        className="login-signup-label-input"
                        id="login-signup-input"
                        type="text"
                        value={credential}
                        placeholder="Username or Email"
                        onChange={(e) => setCredential(e.target.value)}
                        required
                        />
                    <br/>
                      <input
                        className="login-signup-label-input"
                        id="login-signup-input"
                        type="password"
                        value={password}
                        placeholder="Password"
                        onChange={(e) => setPassword(e.target.value)}
                        required
                      />
                  </div>
                  <div id="btns-div">
                    <button className="login-signup-and-demo-btns" type="submit">
                      Log in
                    </button>
                    <button
                      className="login-signup-and-demo-btns"
                      onClick={(e) => handleDefaultButton(e)}
                    >
                      Demo site
                    </button>
                  </div>
                  <p id="login-signup-bottom-form-text">
                    Don't have an account?{" "}
                    <NavLink
                      to="/signup"
                      id="login-signup-bottom-form-link"
                      style={{ textDecoration: "none" }}
                    >
                      Sign up!
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

export default LoginFormPage;
