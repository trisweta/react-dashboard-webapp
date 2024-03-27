import React from 'react';

const Stats = ({ name, main, percent, description }) => {
  let percentColor = '';
  if (percent < 0) {
    percentColor = 'bg-red-400';
  } else if (percent === 0) {
    percentColor = 'bg-gray-400';
  } else {
    percentColor = 'bg-green-400';
  }

  return (
    <div className="flex flex-col mb-4 rounded-lg bg-white px-4 py-4">
      <div className="text-xs text-gray-500">{name}</div>
      <div className="text-2xl font-bold mb-2 pb-4">{main}</div>
      <div className="flex items-center">
        <div className={`rounded-full px-2 py-1 text-white mr-2 text-xs ${percentColor}`}>{percent}%</div>
        <div className='text-xs'>{description}</div>
      </div>
    </div>
  );
};

export default Stats;
