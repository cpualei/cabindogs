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
            className="nav-links"
            style={{ textDecoration: "none" }}
          >
            Cabins
          </NavLink>
          <NavLink
            to="/bookings"
            className="nav-links"
            style={{ textDecoration: "none" }}
          >
            Bookings
          </NavLink>
          <NavLink
            to="/newlisting"
            id="start-hosting-btn"
            style={{ textDecoration: "none" }}
          >
            Start hosting
          </NavLink>
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
          className="nav-links"
          style={{ textDecoration: "none" }}
        >
          Log in
        </NavLink>
        <NavLink
          to="/signup"
          className="nav-links"
          style={{ textDecoration: "none" }}
        >
          Sign up
        </NavLink>
        <NavLink
          to="/signup"
          id="start-hosting-btn"
          style={{ textDecoration: "none" }}
        >
          Start hosting
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
            CabinDogs
          </NavLink>
        </div>
        <div id="right-side-nav">{isLoaded && sessionLinks}</div>
      </div>
    </div>
  );
}

export default Navigation;
