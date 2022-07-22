import React from 'react';

const IconButton = ({ icon }) => (
  <div
    className='flex p-1 items-center justify-center rounded-full cursor-pointer
    hover:bg-gray-400 hover:bg-opacity-25 '>
    {icon}
  </div>
)

export default IconButton;