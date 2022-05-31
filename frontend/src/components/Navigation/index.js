import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import ProfileButton from "./ProfileButton";
import "./Navigation.css";

function Navigation({ isLoaded }) {
  const sessionUser = useSelector((state) => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = <ProfileButton user={sessionUser} />;
  } else {
    sessionLinks = (
      <>
        <NavLink
          to="/login"
          className="login-btn"
          style={{ textDecoration: "none" }}
        >
          Log In
        </NavLink>
        <NavLink
          to="/signup"
          className="signup-btn"
          style={{ textDecoration: "none" }}
        >
          Sign Up
        </NavLink>
      </>
    );
  }

  return (
    <div>
      <div className="top-msg-bar">
        We've updated our terms of service. Learn more here.
      </div>
      <div className="inner-navbar-div">
        <div id="left-side-nav">
          <i className="fa-solid fa-dog" />
          <NavLink exact to="/" style={{ textDecoration: "none" }}>
            CabinDawgs
          </NavLink>
        </div>
        <div id="right-side-nav">{isLoaded && sessionLinks}</div>
      </div>
    </div>
  );
}

export default Navigation;
