import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import { SlOptionsVertical } from 'react-icons/sl';

const LineChart = () => {
  const chartContainer = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    const resizeObserver = new ResizeObserver(entries => {
      if (entries && entries[0]) {
        const { width, height } = entries[0].contentRect;
        if (chartInstance.current) {
          chartInstance.current.resize(width, height);
        }
      }
    });

    if (chartContainer.current) {
      resizeObserver.observe(chartContainer.current);
    }

    return () => {
      resizeObserver.disconnect();
      if (chartInstance.current !== null) {
        chartInstance.current.destroy();
      }
    };
  }, []);

  useEffect(() => {
    if (chartInstance.current !== null) {
      chartInstance.current.destroy();
    }

    if (chartContainer.current !== null) {
      const ctx = chartContainer.current.getContext('2d');
      chartInstance.current = new Chart(ctx, {
        type: 'line',
        data: {
          labels: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
          datasets: [
            {
              label: 'Facebook',
              data: [180, 230, 190, 150, 240, 100, 260],
              borderColor: '#52cc7a',
              backgroundColor: '#52cc7a',
              tension: 0.4,
            },
            {
              label:'Instagram',
              data: [200, 190, 310, 400, 215, 100, 230],
              borderColor: '#4f82db',
              backgroundColor: '#4f82db',
              tension: 0.4,
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            x: {
              grid: {
                display: false,
              },
            },
            y: {
              ticks: {
                stepSize: 100,
              },
              grid: {
                display: false,
              },
            },
          },
          plugins: {
            legend: {
              display: false,
            },
          },
        },
      });
    }
  }, []);

  return (
    <div className="chart-container bg-white rounded-lg relative pb-12 px-4" style={{ maxWidth: '100%', maxHeight: '400px', margin: 'auto', overflow: 'hidden' }}>
      <h2 className="text-lg font-semibold mb-4 relative px-2 top-2 pb-4 ">
        Performance
        <SlOptionsVertical className="absolute right-0 top-2 text-gray-600" />
      </h2>
      <canvas ref={chartContainer} />
      <div className="legend-container absolute bottom-0 left-0 right-0 flex justify-center p-2">
        <div className="legend-item ml-6 mr-1" style={{ backgroundColor: '#4f82db', width: '14px', height: '14px', borderRadius: '50%' }} />
        <span className='text-xs'>Instagram</span>
        <div className="legend-item ml-6 mr-1" style={{ backgroundColor: '#52cc7a', width: '14px', height: '14px', borderRadius: '50%' }} />
        <span className='text-xs'>Facebook</span>
      </div>
    </div>
  );
};

export default LineChart;