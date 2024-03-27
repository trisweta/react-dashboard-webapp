import React from 'react';
import Profile from '../assets/michaelbjordan.png'
import { IoNotificationsOutline } from "react-icons/io5";
import { CiCalendar } from "react-icons/ci";
import { GrAppsRounded } from "react-icons/gr";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-lg p-2 flex justify-between items-center">
      {/*Search Bar*/}
      <div className="flex-grow mr-2">
        <input
          type="text"
          placeholder="Search..."
          className="bg-white text-gray-700 border border-gray-300 px-3 py-1 rounded w-full"
        />
      </div>

      <div className="hidden md:flex space-x-4 cursor-pointer">
        {/*Icon 1*/}
        <IoNotificationsOutline/>

        {/*Icon 2*/}
        <CiCalendar/>

        {/*Icon 3*/}
        <GrAppsRounded/>
      </div>

      {/*Profile*/}
      <div className='px-4 cursor-pointer hidden md:block'>
        <img src={Profile} alt="Logo" className="size-6 rounded-xl" />
      </div>
    </nav>
  );
};

export default Navbar;
