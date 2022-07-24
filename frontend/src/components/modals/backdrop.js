import React from "react";
import { motion } from 'framer-motion';

const Backdrop = ({ children, handleClick }) => {
  return (
    <motion.div
      className="absolute top-0 left-0 h-screen w-screen backdrop-blur-lg bg-black bg-opacity-40 flex items-center justify-center z-50 box-border"
      onClick={handleClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {children}
    </motion.div>
  )
}

export default Backdrop;