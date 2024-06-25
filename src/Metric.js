import React from 'react';
const Metric = ({ size, min, max }) => {

    return (
        <div className="mb-4">
            <div className="flex justify-between items-center text-white">
                <div className="text-left">{size}</div>
                <div className="flex justify-end space-x-4 items-center">
                    <div className="text-right">min: {min}</div>
                    <div className="text-right">max: {max}</div>
                    <div>|</div>
                    <div className="flex items-center space-x-2">
                        <div className="w-5 h-6 bg-gradient-to-b from-green-300 to-green-500 rounded"></div>
                        <div className="text-right">median</div>
                    </div>
                    <div className="flex items-center space-x-2">
                        <div className="w-5 h-6 bg-gradient-to-b from-green-300 to-green-500 rounded"></div>
                        <div className="text-right">average</div>
                    </div>
                </div>
            </div>
            <div className="relative h-4 mt-2">
                <div className='tooltip-container'>
                    <div className="absolute top-0 left-0 h-6 bg-gradient-to-b from-green-300 to-green-500" style={{ width: '5%' }}></div>
                    <div className='tooltip-content'>Tooltip Content</div>
                </div>
                <div className="absolute top-0 left-1/4 h-4 bg-green-200 w-1"></div>
                <div className="absolute top-0 left-2/4 h-4 bg-green-200 w-1"></div>
                <div className="absolute top-0 left-3/4 h-4 bg-green-200 w-1"></div>
                <div className="absolute top-0 right-0 h-4 bg-green-200 w-1"></div>
                <div className="absolute bottom-0 left-0 w-full flex justify-between text-xs text-white px-2">
                    <span>0</span>
                    <span>20M</span>
                    <span>40M</span>
                    <span>60M</span>
                </div>
            </div>
            <hr className="border-gray-600 my-4" />
        </div>
    );
};

export default Metric;

