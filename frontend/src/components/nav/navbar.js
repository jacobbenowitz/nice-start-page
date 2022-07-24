import React from "react";
import { Link } from "react-router-dom"
import Button from '../buttons/button'

const NavBar = ({ loggedIn, logout }) => {
  let navLinks;

  if (loggedIn) {
    navLinks = (
      <Button
        link="/"
        text="Logout"
        handleClick={logout}
      />
    )
  } else {
    navLinks = (
      <>
        <Button link="/login" text="Login"/>
        <Button link="/signup" text="Signup"/>
      </>
    )
  }

  return (
    <div className="flex flex-row w-screen h-12 items-center justify-center fixed">
      <div className="w-8" />
      <div className="flex-1 flex flex-row justify-between">
        <h4 className="text-slate-50 font-bold">nice-start-page</h4>
        <div className="flex flex-row items-center justify-between gap-5">
          {navLinks}
        </div>
      </div>
      <div className="w-8" />
    </div>
  )
}

export default NavBar;