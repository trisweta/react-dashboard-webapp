import React from 'react';
import Logo from '../assets/logo.png';
import Profile from '../assets/michaelbjordan.png';

function Mobdash() {
  return (
    <div className="flex justify-between items-center">
      <div className="">
        <img src={Logo} alt="Logo" className="w-32" />
      </div>
      <div className="px-4 cursor-pointer ml-auto">
        <img src={Profile} alt="Logo" className="size-6 rounded-xl" />
      </div>
    </div>
  );
}

export default Mobdash;
