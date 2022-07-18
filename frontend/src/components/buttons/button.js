import React from 'react';
import { Link } from 'react-router-dom';

const Button = ({ link, text, handleClick }) => {
  let linkButton, actionButton;
  if (handleClick !== undefined) {
    actionButton = (
      <Link to={link}>
        <div className='flex justify-center items-center
        px-2 py-1 bg-amber-600 font-bold rounded-sm'
          onClick={handleClick}>
          <span>{text}</span>
        </div>
      </Link>
    )
  } else {
    linkButton = (
      <Link to={link}>
        <div className='flex justify-center items-center
        px-2 py-1 bg-amber-600 font-bold rounded-sm'>
          <span>{text}</span>
        </div>
      </Link>
    )
  }

  return linkButton || actionButton;
};

export default Button;