import React, { useState } from "react";

export default function SearchExample() {
    // ডেমো ডাটা
    const items = ["Apple", "Banana", "Cherry", "Date", "Grapes", "Mango"];

    // Search state
    const [searchTerm, setSearchTerm] = useState("");

    // ইনপুট পরিবর্তন হলে state আপডেট
    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    // Filter logic (searchTerm মিলিয়ে ফিল্টার করা)
    const filteredItems = items.filter((item) =>
        item.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="p-6">
            {/* Search Input */}
            <input
                type="text"
                placeholder="Search fruits..."
                value={searchTerm}
                onChange={handleSearchChange}
                className="w-full px-3 py-2 mb-4 border"
            />

            {/* Filtered Results */}
            <ul className="pl-5 list-disc">
                {filteredItems.length > 0 ? (
                    filteredItems.map((item, index) => <li key={index}>{item}</li>)
                ) : (
                    <li>No results found</li>
                )}
            </ul>
        </div>
    );
}
