import React from "react";
import Backdrop from "./backdrop";
import { motion } from 'framer-motion';

const dropIn = {
  hidden: {
    y: "-100vh",
    opacity: 0,
  },
  visible: {
    y: "0",
    opacity: 1,
    transition: {
      duration: 0.1,
      type: "spring",
      damping: 25,
      stiffness: 500,
    },
  },
  exit: {
    y: "100vh",
    opacity: 0,
  },
};

const LargeModal = ({ handleClose, content }) => {
  return (
    <Backdrop handleClick={handleClose}>
      <motion.div
        onClick={e => e.stopPropagation()}
        className="w-screen-sm m-0 p-8 rounded-lg flex flex-col items-center
        w-min"
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        {content}
      </motion.div>
    </Backdrop>
  )
}

export default LargeModal;