import React from "react";
import { Link } from "react-router-dom"
import "./navbar.css"

const NavBar = ({ loggedIn, logout }) => {
  let navLinks;

  if (loggedIn) {
    navLinks = (
      <button onClick={() => logout()}>
        Logout
      </button>
    )
  } else {
    navLinks = (
      <>
        <Link to="/login">Login</Link>
        <Link to="/signup">Signup</Link>
      </>
    )
  }

  return (
    <div className="navbar-wrapper">
      <h2>NiceStartPage</h2>
      <div className="nav-links">
        {navLinks}
      </div>
    </div>
  )
}

export default NavBar;