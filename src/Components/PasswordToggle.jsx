import React, { useState } from "react";

export default function PasswordToggle() {

    const [showPassword, setShowPassword] = useState(false)

    const handleShowPassword = ()=>{
        setShowPassword(!showPassword)
    }

    return (
        <div className="p-4">
            <input
                type={showPassword?'text':'password'}
                placeholder="Enter password"
                className="px-3 py-2 mr-2 border"
            />
            <button
                onClick={handleShowPassword}
                className="px-3 py-2 text-white bg-green-500 rounded"
            >
                {showPassword?'Hide':'Show'}
            </button>
        </div>
    );
}
