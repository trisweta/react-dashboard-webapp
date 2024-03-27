import React, { useState } from 'react';
import Logo from '../assets/logo.png';
import { TbDashboard } from "react-icons/tb";
import { HiOutlineEnvelope } from "react-icons/hi2";
import { GrAppsRounded } from "react-icons/gr";
import { BiUser } from "react-icons/bi";
import { CiFolderOn } from "react-icons/ci";
import { FaAngleDown } from 'react-icons/fa';
import { CgOptions } from "react-icons/cg";
import { TbLogin2 } from "react-icons/tb";
import { CiGlobe } from "react-icons/ci";

const Sidebar = () => {
  const [showDashboard, setShowDashboard] = useState(false);
  const [showMessages, setShowMessages] = useState(false);
  const [showFriends, setShowFriends] = useState(false);
  const [showApps, setShowApps] = useState(false);
  const [showHelpCenter, setShowHelpCenter] = useState(false);
  const [showFileManager, setShowFileManager] = useState(false);

  const toggleDashboard = () => {
    setShowDashboard(!showDashboard);
  };

  const toggleMessages = () => {
    setShowMessages(!showMessages);
  };

  const toggleFriends = () => {
    setShowFriends(!showFriends);
  };

  const toggleApps = () => {
    setShowApps(!showApps);
  };

  const toggleHelpCenter = () => {
    setShowHelpCenter(!showHelpCenter);
  };

  const toggleFileManager = () => {
    setShowFileManager(!showFileManager);
  };

  return (
    <div className="sidebar bg-white text-gray-900 p-4" style={{ height: '135vh' }}>
      <div className="flex mb-4">
        <img src={Logo} alt="Logo" className="w-1/2 h-1/2" />
      </div>
      
      <div className="flex mb-4 p-2">
        <h2 className="font-bold text-gray-400">DASHBOARD</h2>
      </div>
      
     {/* Dashboard Section */}
     <div className="mt-4 pl-4">
        {/* Dashboard Header */}
        <div className="flex flex-rows items-center cursor-pointer" onClick={toggleDashboard}>
          <TbDashboard className="mr-3" />
          <span style={{ textAlign: 'left', marginRight: '42px', fontWeight: showDashboard ? 'bold' : 'normal' }}>Dashboard</span>
          <FaAngleDown className={`transition-transform ${showDashboard ? 'transform rotate-180' : ''}`} />
        </div>
        {/* Dropdown Content - Dashboard */}
        {showDashboard && (
          <div className="pl-8 mt-2">
            <div>Analytics</div>
            <div>Finance</div>
            <div>Job Board</div>
          </div>
        )}
      </div>

      {/* Messages Section */}
      <div className="mt-4 pl-4">
        {/* Messages Header */}
        <div className="flex flex-rows items-center cursor-pointer">
          <HiOutlineEnvelope className="mr-3" />
          <span style={{ textAlign: 'left', marginRight: '50px' }}>Messages</span>
          <FaAngleDown onClick={toggleMessages} className={`transition-transform ${showMessages ? 'transform rotate-180' : ''}`} />
        </div>
        {/* Dropdown Content - Messages */}
        {showMessages && (
          <div className="pl-4 mt-2">
            {/* Add your message options here */}
          </div>
        )}
      </div>

      {/* Friends Section */}
      <div className="mt-4 pl-4">
        {/* Friends Header */}
        <div className="flex flex-rows items-center cursor-pointer">
          <BiUser className="mr-3" />
          <span style={{ textAlign: 'left', marginRight: '69px' }}>Friends</span>
          <FaAngleDown onClick={toggleFriends} className={`transition-transform ${showFriends ? 'transform rotate-180' : ''}`} />
        </div>
        {/* Dropdown Content - Friends */}
        {showFriends && (
          <div className="pl-4 mt-2">
            {/* Add your friends options here */}
          </div>
        )}
      </div>

      {/* Apps Section */}
      <div className="mt-4 pl-4">
        {/* Apps Header */}
        <div className="flex flex-rows items-center cursor-pointer">
          <GrAppsRounded className="mr-3" />
          <span style={{ textAlign: 'left', marginRight: '85px' }}>Apps</span>
          <FaAngleDown onClick={toggleApps} className={`transition-transform ${showApps ? 'transform rotate-180' : ''}`} />
        </div>
        {/* Dropdown Content - Apps */}
        {showApps && (
          <div className="pl-4 mt-2">
            {/* Add your apps options here */}
          </div>
        )}
      </div>

      <div className="flex mt-4 mb-4 p-2">
        <h2 className="font-bold text-gray-400">PAGES</h2>
      </div>

      {/* Help Center Section */}
      <div className="mt-4 pl-4">
        {/* Help Center Header */}
        <div className="flex flex-rows items-center cursor-pointer">
          <GrAppsRounded className="mr-3" />
          <span style={{ textAlign: 'left', marginRight: '37px' }}>Help Center</span>
          <FaAngleDown onClick={toggleHelpCenter} className={`transition-transform ${showHelpCenter ? 'transform rotate-180' : ''}`} />
        </div>
        {/* Dropdown Content - Help Center */}
        {showHelpCenter && (
          <div className="pl-4 mt-2">
            {/* Add your Help Center options here */}
          </div>
        )}
      </div>

      {/* File Manager Section */}
      <div className="mt-4 pl-4">
        {/* File Manager Header */}
        <div className="flex flex-rows items-center cursor-pointer">
          <CiFolderOn className="mr-3" />
          <span style={{ textAlign: 'left', marginRight: '30px' }}>File Manager</span>
          <FaAngleDown onClick={toggleFileManager} className={`transition-transform ${showFileManager ? 'transform rotate-180' : ''}`} />
        </div>
        {/* Dropdown Content - File Manager */}
        {showFileManager && (
          <div className="pl-4 mt-2">
            {/* Add your File Manager options here */}
          </div>
        )}
      </div>
      <div className="flex justify-around mt-80 border-t-2 pt-4">
        <CgOptions className="mr-2 cursor-pointer " />
        <TbLogin2 className="mr-2 cursor-pointer" />
        <CiGlobe className="mr-2 cursor-pointer" />
      </div>
    </div>
  );
};

export default Sidebar
