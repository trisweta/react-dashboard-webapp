import React from 'react';
import { PiLightning } from "react-icons/pi";

const Upgrade = () => {
  return (
    <div className="bg-zinc-900 p-4 md:p-8 rounded-lg flex flex-col md:flex-row md:justify-between items-center">
      <div className="">
        <p className="font-semibold text-white text-2xl">Unlock premium stats</p>
        <p className="text-white text-sm">Get up to 10TB of storage for a limited time</p>
      </div>
      <button className="bg-white rounded-full px-4 py-2 flex items-center mt-4 md:mt-0">
        <PiLightning className=''/>
        <span className="text-gray-900 ml-1 md:mr-1 md:ml-0">Upgrade</span>
      </button>
    </div>
  );
};

export default Upgrade;
