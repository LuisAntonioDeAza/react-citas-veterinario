import React from 'react';

const Alert = ({clss,txt}) => {
    return (
        <div>
            <h2 className={`py-3 px-3  rounded-md text-white text-center ${clss}`}>{txt}</h2>
        </div>
    );
};

export default Alert;
