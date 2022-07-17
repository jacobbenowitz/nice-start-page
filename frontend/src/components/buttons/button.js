import React from 'react';
import { Link } from 'react-router-dom';

const Button = ({ link, text }) => (
  <Link to={link}>
    <div className='flex justify-center items-center
      px-2 py-1 bg-amber-600 font-bold rounded-sm'>
      <span>{text}</span>
    </div>
  </Link>
);

export default Button;