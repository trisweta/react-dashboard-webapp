import React, { useState } from 'react';
import { SlOptionsVertical } from 'react-icons/sl';
import { FaArrowLeftLong, FaArrowRight } from 'react-icons/fa6';
import zepplinLogo from '../img/zeppelin.png';
import figmaLogo from '../img/figma.png';
import metaLogo from '../img/meta.png';
import angularLogo from '../img/angular.png';
import vueLogo from '../img/vue.png';

const InstalledApps = () => {
  const sources = ["Zepplin", "Figma", "Meta", "Angular", "Vue"];
  const amounts = ["686.00", "864.00", "176.00", "49.00", "999.00"];
  const statuses = ["Active", "Pending", "Cancelled", "Active", "Active"];
  const userIds = [114423, 76223, 89453, 11467, 67385];
  const joinedDates = ["October", "June", "March", "February", "October"];
  const groups = ["Design", "Finance", "Coding", "Marketing", "Finance"];

  const itemsPerPage = 5; // Number of items to show per page
  const [currentPage, setCurrentPage] = useState(1);

  const totalItems = sources.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const getStatusStyle = (status) => {
    switch (status) {
      case "Active":
        return "bg-green-200 text-green-500 font-bold rounded-full px-2 py-1";
      case "Pending":
        return "bg-orange-200 text-orange-400 font-bold rounded-full px-2 py-1";
      case "Cancelled":
        return "bg-gray-200 text-gray-500 font-bold rounded-full px-2 py-1";
      default:
        return "";
    }
  };

  const getSourceLogo = (source) => {
    switch (source.toLowerCase()) {
      case 'zepplin':
        return zepplinLogo;
      case 'figma':
        return figmaLogo;
      case 'meta':
        return metaLogo;
      case 'angular':
        return angularLogo;
      case 'vue':
        return vueLogo;
      default:
        return '';
    }
  };

  const handleChangePage = (page) => {
    setCurrentPage(page);
  };

  const renderItems = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = Math.min(startIndex + itemsPerPage, totalItems);
    const renderedRows = [];
    
    for (let i = startIndex; i < endIndex; i++) {
      renderedRows.push(
        <tr key={i} className="border-t-2 border-gray-300">
          <td className="flex items-center px-3 py-4">
            <img src={getSourceLogo(sources[i])} alt={sources[i]} className="h-6 mr-2" />
            {sources[i]}
          </td>
          <td className="px-3 py-4">{amounts[i]}</td>
          <td className="px-3 py-4">
            <span className={`inline-block ${getStatusStyle(statuses[i])}`}>
              {statuses[i]}
            </span>
          </td>
          <td className="px-3 py-4">{userIds[i]}</td>
          <td className="px-3 py-4">{joinedDates[i]}</td>
          <td className="px-3 py-4">{groups[i]}</td>
        </tr>
      );
    }

    // We cam add rows if needed
    for (let j = renderedRows.length; j < itemsPerPage; j++) {
      renderedRows.push(
        <tr key={j} className="border-t-2 border-gray-300">
          <td colSpan="6" className="px-3 py-4">&nbsp;</td>
        </tr>
      );
    }

    return renderedRows;
  };

  return (
    <div className='h-full flex flex-col justify-between rounded-lg bg-white text-sm'>
      <div>
        <h2 className="text-lg font-semibold mb-4 relative px-2 top-2 py-2">
          Installed Apps
          <SlOptionsVertical className="absolute right-0 top-2 text-gray-600" />
        </h2>
        <div className="overflow-auto">
          <table className="rounded-lg w-full">
            <thead>
              <tr className="bg-gray-200 border-b-4">
                <th className="px-3 py-4 text-gray-600 border-b-2 border-gray-300">Source</th>
                <th className="px-3 py-4 text-gray-600 border-b-2 border-gray-300">Amount</th>
                <th className="px-3 py-4 text-gray-600 border-b-2 border-gray-300">Status</th>
                <th className="px-3 py-4 text-gray-600 border-b-2 border-gray-300">User ID</th>
                <th className="px-3 py-4 text-gray-600 border-b-2 border-gray-300">Joined</th>
                <th className="px-3 py-4 text-gray-600 border-b-2 border-gray-300">Group</th>
              </tr>
            </thead>
            <tbody>
              {renderItems()}
            </tbody>
          </table>
        </div>
      </div>
      <div className="flex justify-center mt-4">
        <button
          className="text-black py-2 px-4 rounded-l"
          disabled={currentPage === 1}
          onClick={() => handleChangePage(currentPage - 1)}
        >
          <FaArrowLeftLong />
        </button>
        <span className="px-4">
          {currentPage}/{totalPages}
        </span>
        <button
          className='bg-white text-black py-2 px-4 rounded-r'
          disabled={currentPage === totalPages}
          onClick={() => handleChangePage(currentPage + 1)}
        >
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default InstalledApps;
