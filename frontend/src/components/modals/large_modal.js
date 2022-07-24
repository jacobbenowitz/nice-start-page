import React from "react";
import Backdrop from "./backdrop"

const LargeModal = ({ handleClose, content }) => {
  return (
    <Backdrop handleClick={handleClose}>
      <div
        onClick={e => e.stopPropagation()}
        className="w-screen-sm m-0 p-8 rounded-lg flex flex-col items-center"
      >
        {content}
      </div>
    </Backdrop>
  )
}

export default LargeModal;