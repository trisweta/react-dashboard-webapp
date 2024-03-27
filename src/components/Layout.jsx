import React from 'react';
import '../App.css';
import InstalledApps from './InstalledApps';
import Stats from './Stats';
import Upgrade from './Upgrade';
import Graph from './Graph';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import MobDash from './Mobdash'; 

function Layout() {
  const statsData = [
    { name: "Revenue", main: "$56,945", percent: +45, description: "From 4.6%" },
    { name: "Users", main: "76.8%", percent: -1.7, description: "From 4.6%" },
    { name: "New Signups", main: 116, percent: 0.00, description: "" },
    { name: "Retention", main: "12.67%", percent: +0.6, description: "From 4.6%" }
  ];

  return (
    <div className='grid h-full grid-custom bg-gray-50'>
      <div id="side" className="hidden md:block sm:block"><Sidebar/></div>
      <div id="nav"><Navbar/></div>
      <div id="content1" className="px-2 md:px-4 w-full"><Upgrade/></div>
      {statsData.map((data, index) => (
        <div key={index} id={`content${index + 2}`} className="px-2 md:px-4 w-full">
          <Stats {...data} />
        </div>
      ))}
      <div id="content6" className="px-2 md:px-4 w-full"><Graph/></div>
      <div id="content7" className="px-2 md:px-4 w-full"><InstalledApps/></div>


      <div id="mobdash" className="px-2 md:hidden sm:hidden"><MobDash/></div>
    </div>
  );
}

export default Layout;
