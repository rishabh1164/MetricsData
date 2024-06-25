// import React from 'react';
// import Metric from './Metric';

// const MetricsGrid = () => {
//     const metricsData = [
//         { size: '100 KB', min: '5.71 Mbps', max: '10.59 Mbps' },
//         { size: '1 MB', min: '28.71 Mbps', max: '58.94 Mbps' },
//         { size: '10 MB', min: '138.17 Mbps', max: '165.47 Mbps' },
//         { size: '25 MB', min: '150.86 Mbps', max: '184.2 Mbps' },
//     ];

//     return (
//         <div className="space-y-4">
//             {metricsData.map((metric, index) => (
//                 <Metric
//                     key={index}
//                     size={metric.size}
//                     min={metric.min}
//                     max={metric.max}
//                 />
//             ))}
//         </div>
//     );
// };

// export default MetricsGrid;


import React from 'react';
import Highcharts, { color } from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import HighchartsMore from 'highcharts/highcharts-more';

HighchartsMore(Highcharts);

const SingleChart = ({ title, data, min, max, average, median,yAxisMax, tickInterval }) => {
  const options = {
    chart: {
      type: 'columnrange',
      inverted: true,
      backgroundColor: 'transparent',
      height: 100,
    },
    title: {
      text: '',
    },
    xAxis: {
      labels: {
        style: {
          color: '#FFFFFF',
        },
      },
      lineWidth: 0,
    },
    yAxis: {
      min: 0,
      max:yAxisMax,
      tickInterval:tickInterval,
      title: {
        style: {
          color: '#FFFFFF',
        },
      },
      labels: {
        style: {
          color: '#FFFFFF',
        },
      },
      gridLineWidth: 0,
    },
    legend: {
      enabled: false,
    },
    series: [
      {
        name: 'Speed Range',
        data: data,
        color: {
          linearGradient: { x1: 0, y1: 0, x2: 1, y2: 1},
        
        stops: [
          [0, 'rgba(0,255,0,0.5'],
          [1, 'rgba(0,128,0,1)']
        ]
      },
      
        tooltip: {
          pointFormat: 'Average: {point.low} Mbps<br/>Median: {point.high} Mbps',
        },
      },
    ],
  };

  return (
    <div className="p-4 bg-gray-800 rounded-lg shadow-lg">
      <div className="flex justify-between items-center mb-2">
        <span className="text-lg font-bold text-white">{title}</span>
        <div className="flex flex-col text-white text-right">

          <div className="flex space-x-2">
            <span>min: {min} Mbps  max: {max} Mbps |</span>
            <div className="flex items-center">
              <span className="w-3 h-3 bg-green-500 mr-2"></span>
              <span>Median</span>
            </div>
            <div className="flex items-center">
              <span className="w-3 h-3 bg-green-500 mr-2"></span>
              <span>Average</span>
            </div>
          </div>
        </div>
      </div>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};

export default SingleChart;

