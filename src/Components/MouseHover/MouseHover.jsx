import React, { useState } from 'react';

const MouseHover = () => {

    const [message, setMessage] = useState('Hello Joy')

    const handleMouseLeave = ()=>{
        setMessage("Hover over me!")
    }

    const handleMouseEnter = ()=>{
        setMessage('Hello🥱')
    }
    
    return (
        <div className="p-6">
            <div
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className="p-6 text-center bg-black rounded cursor-pointer bg bg-"
            >
                {message}
            </div>
        </div>
    );
};

export default MouseHover;