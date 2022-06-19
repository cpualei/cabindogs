import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import ProfileButton from "./ProfileButton";
import "./Navigation.css";

function Navigation({ isLoaded }) {
  const sessionUser = useSelector((state) => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <>
        <div id="right-side-nav-links">
          <NavLink
            to="/listings"
            id="listings-btn"
            style={{ textDecoration: "none" }}
          >
            Listings
          </NavLink>
          <NavLink
            to="/bookings"
            id="bookings-btn"
            style={{ textDecoration: "none" }}
          >
            Bookings
          </NavLink>
          <NavLink
            to="/newlisting"
            id="start-hosting-btn"
            style={{ textDecoration: "none" }}
          >
            Start Hosting
          </NavLink>
        </div>
        <div id="profile-btn-div">
          <ProfileButton
            id="profile-btn"
            user={sessionUser} />
        </div>
      </>
    );
  } else {
    sessionLinks = (
      <>
        <NavLink
          to="/login"
          id="login-btn"
          style={{ textDecoration: "none" }}
        >
          Log In
        </NavLink>
        <NavLink
          to="/signup"
          id="signup-btn"
          style={{ textDecoration: "none" }}
        >
          Sign Up
        </NavLink>
        <NavLink
          to="/newlisting"
          id="start-hosting-btn"
          style={{ textDecoration: "none" }}
        >
          Start Hosting
        </NavLink>
      </>
    );
  }

  return (
    <div>
      <div id="top-msg-bar">
        <div id="website-by">Website created by: Caitlin Buen-Lucas</div><br></br>
        <div><a id="networking-links" href="https://www.linkedin.com/in/caitlin-buen-lucas/">Linkedin</a> | <a id="networking-links" href="https://github.com/cpualei/">Github</a></div>
      </div>
      <div id="inner-navbar-div">
        <div id="left-side-nav">
          <i className="fa-solid fa-dog" />
          <NavLink
            id="cabindogs"
            exact
            to="/"
            style={{ textDecoration: "none" }}
          >
            CABINDOGS
          </NavLink>
        </div>
        <div id="right-side-nav">{isLoaded && sessionLinks}</div>
      </div>
    </div>
  );
}

export default Navigation;
