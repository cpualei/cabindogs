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
        <div id="login-form-outer-container">
          <div id="login-form-container">
            <h1 id="login-title">Welcome back!</h1>
            <p id="sub-title">Let's get you and your pals outside.</p>

            <div id="login-form-div">
              <form id="login-form" onSubmit={handleSubmit}>
                <ul id="login-ul">
                  {errors.map((error, idx) => (
                    <li key={idx}>{error}</li>
                  ))}
                </ul>
                <div id="labels-inputs-btns-div">
                  <div id="labels-inputs-div">
                    <label className="user-email-label-input">
                      Username or Email
                      <input
                        className="user-email-label-input"
                        type="text"
                        value={credential}
                        onChange={(e) => setCredential(e.target.value)}
                        required
                      />
                    </label>

                    <label className="user-email-label-input">
                      Password
                      <input
                        className="user-email-label-input"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                      />
                    </label>
                  </div>
                  <div id="btns-div">
                    <button className="login-and-demo-btns" type="submit">
                      Log in
                    </button>
                    <button
                      className="login-and-demo-btns"
                      onClick={(e) => handleDefaultButton(e)}
                    >
                      Demo User
                    </button>
                  </div>
                  <p id="login-bottom-form-text">
                    Don't have an account?{" "}
                    <NavLink
                      to="/signup"
                      id="login-bottom-form-link"
                      style={{ textDecoration: "none" }}
                    >
                      Sign up!
                    </NavLink>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginFormPage;
