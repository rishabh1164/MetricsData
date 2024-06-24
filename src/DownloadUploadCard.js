// DownloadUploadCard.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown, faArrowUp } from '@fortawesome/free-solid-svg-icons';

const DownloadUploadCard = ({ title, value, gradientColor }) => {
    const icon = title === "Download" ? faArrowDown : faArrowUp;
    
    return (
        <div className="p-4 bg-gray-900 border border-gray-700 rounded-lg flex flex-col justify-between h-full relative">
            <div className="flex justify-between items-center">
                <div className="flex items-center space-x-2">
                    <h3 className="text-lg font-semibold text-white">{title}</h3>
                    <a href="https://www.google.com" className="text-blue-500">
                        <i className="fas fa-external-link-alt"></i>
                    </a>
                </div>
                <button className="bg-gray-700 text-white p-1 rounded hover:bg-gray-600">
                    <FontAwesomeIcon icon={icon} />
                </button>
            </div>
            <div className="flex justify-between items-center mt-2">
                <div className="text-4xl font-bold text-white">{value} Mbps</div>
            </div>
            <div className="relative w-full h-16 overflow-hidden flex justify-end items-center">
                <svg viewBox="0 0 500 100" preserveAspectRatio="none" className="h-full opacity-30" style={{ width: '50%' }}>
                    <path d="M0,50 C150,100 350,0 500,50 L500,00 L0,0 Z" className={gradientColor} />
                </svg>
            </div>
        </div>
    );
};

export default DownloadUploadCard;
