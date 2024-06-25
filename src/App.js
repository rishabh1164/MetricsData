import React, { useState } from 'react';
import NewMetricsGrid from './NewMetricsGrid';
import Tabs from './Tabs';
import './index.css';
import MetricsChart from './SingleChart';
import SingleChart from './SingleChart';

const App = () => {
    const [selectedTab, setSelectedTab] = useState('Download Metrics');
    const tabs = ['Download Metrics', 'Upload Metrics', 'Latency Metrics', 'Jitter Metrics', 'PCAP'];

    const chartData = [
        { title: '100 KB', data: [[5.71, 10.59]], min: 5.71, max: 10.59, average: 7.15, median: 8.15, yAxisMax: 60, tickInterval: 20 },
        { title: '1 MB', data: [[28.71, 58.94]], min: 28.71, max: 58.94, average: 49.92, median: 52.16, yAxisMax: 150, tickInterval: 50 },
        { title: '10 MB', data: [[138.17, 165.47]], min: 138.17, max: 165.47, average: 140.5, median: 143.3, yAxisMax: 200, tickInterval: 50 },
        { title: '25 MB', data: [[150.86, 184.2]], min: 150.86, max: 184.2, average: 160.6, median: 165.3, yAxisMax: 200, tickInterval: 50 },
    ];

    return (
        <div className="min-h-screen bg-black flex flex-col items-center justify-center p-4">
            <div className="w-full max-w-4xl">

                <div className="p-4">
                    <NewMetricsGrid />
                </div>

                <Tabs tabs={tabs} selectedTab={selectedTab} onSelect={setSelectedTab} />
                <div className="bg-black min-h-screen">
                    <div>
                        {chartData.map((chart, index) => (
                            <SingleChart
                            key={index}
                            title={chart.title}
                            data={chart.data}
                            categories={[chart.title]}
                            min={chart.min}
                            max={chart.max}
                            average={chart.average}
                            median={chart.median}
                            yAxisMax={chart.yAxisMax}
                            tickInterval={chart.tickInterval}
                          />
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
};

export default App;
