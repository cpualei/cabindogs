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
        <NavLink
          to="/listings"
          className="listings-btn"
          style={{ textDecoration: "none" }}
        >
          Listings
        </NavLink>
        <NavLink
          to="/bookings"
          className="bookings-btn"
          style={{ textDecoration: "none" }}
        >
          Bookings
        </NavLink>
        <NavLink
          to="/newlisting"
          className="addlisting-btn"
          style={{ textDecoration: "none" }}
        >
          Add a Listing
        </NavLink>
        <ProfileButton
          className="profile-btn"
          user={sessionUser} />
      </>
    );
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
        Website created by: Caitlin Buen-Lucas
      </div>
      <div className="inner-navbar-div">
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
