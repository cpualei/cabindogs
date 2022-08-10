import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import * as sessionActions from "../../store/session";
import "./ProfileButton.css"


function ProfileButton({ user }) {
  const dispatch = useDispatch();
  const history = useHistory();
  const [showMenu, setShowMenu] = useState(false);

  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };

  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = () => {
      setShowMenu(false);
    };

    document.addEventListener("click", closeMenu);

    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
    history.push("/")
  };

  return (
    <>
        <button id="profile-btn" onClick={openMenu}>
          <i className="fa-solid fa-paw" />
        </button>
        {showMenu && (
          <>
          <ul className="profile-dropdown">
            <li>{user.username}</li>
            <li>{user.email}</li>
              <button id="logout-btn" onClick={logout}>Log out</button>
          </ul>
          </>
        )}
    </>
  );
}

export default ProfileButton;
