import React from 'react';
import DownloadUploadCard from './DownloadUploadCard';
import LatencyJitterPacketLossCard from './LatencyJitterPacketLossCard';

const NewMetricsGrid = () => {
    return (
        <div className="flex flex-col md:flex-row gap-4 p-4 bg-gray-900 rounded-lg border border-gray-700 h-full">
            <div className="space-y-4 flex flex-col justify-between flex-grow">
                <DownloadUploadCard title="Download" value="76.3" gradientColor="fill-green-500" />
                <DownloadUploadCard title="Upload" value="45.0" gradientColor="fill-blue-500" />
            </div>
            <div className="flex flex-col justify-between flex-grow">
                <LatencyJitterPacketLossCard
                    title="Latency"
                    value="66.6"
                    details={[
                        { label: 'Download', value: '43.9 ms' },
                        { label: 'Upload', value: '40.7 ms' },
                    ]}
                />
                <hr className="border-gray-700" />
                <LatencyJitterPacketLossCard
                    title="Jitter"
                    value="1.72"
                    details={[
                        { label: 'Download', value: '10.8 ms' },
                        { label: 'Upload', value: '3.25 ms' },
                    ]}
                />
                <hr className="border-gray-700" />
                <LatencyJitterPacketLossCard
                    title="Packet Loss"
                    value="0 %"
                    className="flex-grow"
                />
            </div>
        </div>
    );
};

export default NewMetricsGrid;
