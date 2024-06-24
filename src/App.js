// App.js
import React, { useState } from 'react';
import MetricsGrid from './MetricsGrid';
import NewMetricsGrid from './NewMetricsGrid';
import Tabs from './Tabs';
import './index.css'; // Ensure you import FontAwesome styles

const App = () => {
    const [selectedTab, setSelectedTab] = useState('Download Metrics');
    const tabs = ['Download Metrics', 'Upload Metrics', 'Latency Metrics', 'Jitter Metrics', 'PCAP'];

    return (
        <div className="min-h-screen bg-black flex flex-col items-center justify-center p-4">
            <div className="w-full max-w-4xl">
                <Tabs tabs={tabs} selectedTab={selectedTab} onSelect={setSelectedTab} />
                <div className="p-4">
                    <MetricsGrid />
                </div>
                <div className="p-4">
                    <NewMetricsGrid />
                </div>
            </div>
        </div>
    );
};

export default App;
    