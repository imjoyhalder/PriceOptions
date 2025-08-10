import React, { useState } from "react";

export default function ThemeToggle() {
    const [darkMode, setDarkMode] = useState(false);

    const handleThemeChange = () => {
        setDarkMode(!darkMode);
    };

    return (
        <div className={darkMode ? "bg-black text-white h-screen" : "bg-white text-black h-screen"}>
            <button
                onClick={handleThemeChange}
                className="p-3 mt-5 bg-gray-300 rounded"
            >
                {darkMode ? "Light Mode" : "Dark Mode"}
            </button>
        </div>
    );
}
