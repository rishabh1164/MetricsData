import React from 'react';

const Card = ({ title, children }) => {
    return (
        <div className="bg-gray-800 p-6 rounded-lg shadow-md w-full max-w-4xl text-white">
            <h2 className="text-2xl font-bold mb-4">{title}</h2>
            {children}
        </div>
    );
};

export default Card;
