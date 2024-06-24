// Tabs.js
import React from 'react';

const Tabs = ({ tabs, selectedTab, onSelect }) => {
    return (
        <div className="flex border-b border-gray-700">
            {tabs.map((tab, index) => (
                <div
                    key={index}
                    className={`cursor-pointer px-4 py-2 text-white ${selectedTab === tab ? 'border-b-2 border-blue-500' : ''}`}
                    onClick={() => onSelect(tab)}
                >
                    {tab}
                </div>
            ))}
        </div>
    );
};

export default Tabs;
