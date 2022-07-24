import React from "react";
import { motion } from "framer-motion";
import { MdOutlineAddCircle } from "react-icons/md";

const NewLinkButton = ({ open }) => (
  <div className="absolute bottom-8 right-8">
    <motion.button className="cursor-pointer"
      onClick={open}
      whileHover={{ scale: 1.3 }}
      whileTap={{ scale: 0.85 }}
    >
      <MdOutlineAddCircle size="32" />
    </motion.button>
  </div>
)

export default NewLinkButton;