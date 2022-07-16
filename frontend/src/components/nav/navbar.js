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
    <div className="flex flex-row w-screen justify-center">
      <div className="w-8" />
      <div className="flex-1 flex flex-row justify-between">
        <h2 className="text-slate-50 font-bold">nice-start-page</h2>
        <div className="nav-links">
          {navLinks}
        </div>
      </div>
      <div className="w-8" />
    </div>
  )
}

export default NavBar;