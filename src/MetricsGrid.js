// MetricsGrid.js
import React from 'react';
import Metric from './Metric';

const MetricsGrid = () => {
    const metricsData = [
        { size: '100 KB', min: '5.71 Mbps', max: '10.59 Mbps', median: 'N/A', average: 'N/A' },
        { size: '1 MB', min: '28.71 Mbps', max: '58.94 Mbps', median: '52.16 Mbps', average: '49.92 Mbps' },
        { size: '10 MB', min: '138.17 Mbps', max: '165.47 Mbps', median: 'N/A', average: 'N/A' },
        { size: '25 MB', min: '150.86 Mbps', max: '184.2 Mbps', median: 'N/A', average: 'N/A' },
    ];

    return (
        <div className="space-y-4">
            {metricsData.map((metric, index) => (
                <Metric
                    key={index}
                    size={metric.size}
                    min={metric.min}
                    max={metric.max}
                    median={metric.median}
                    average={metric.average}
                />
            ))}
        </div>
    );
};

export default MetricsGrid;
