import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTachometerAlt, faSignal } from '@fortawesome/free-solid-svg-icons';

const LatencyJitterPacketLossCard = ({ title, value, details }) => {
    return (
        <div className="p-4 bg-gray-900 border border-gray-700 rounded-lg flex flex-col justify-between h-full">
            <div className="flex space-x-2 items-center">
                <h3 className="text-lg font-semibold text-white">{title}</h3>
                <a href="https://www.google.com" className="text-blue-500">
                    <i className="fas fa-external-link-alt"></i>
                </a>
            </div>
            <div className="flex justify-between items-center">
                <div className="text-4xl font-bold text-white">{value}</div>
                <div className="text-right space-y-1">
                    {details?.map((detail, index) => (
                        <div key={index} className="text-sm text-blue-500">
                            {detail.value} {detail.label}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default LatencyJitterPacketLossCard;
