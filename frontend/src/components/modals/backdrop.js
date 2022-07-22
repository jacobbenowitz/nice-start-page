import React from "react";

const Backdrop = ({ children, handleClick }) => {
  return (
    <div
      className="absolute top-0 left-0 h-screen w-screen backdrop-blur-lg bg-black bg-opacity-40 flex items-center justify-center z-50 box-border"
      onClick={handleClick}
    >
      {children}
    </div>
  )
}

export default Backdrop;