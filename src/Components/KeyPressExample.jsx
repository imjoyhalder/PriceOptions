import React, { useState } from "react";

export default function KeyPressExample() {
    const [lastKey, setLastKey] = useState("");
    const [isOn, setIsOn] = useState(false)
    const [name, setName] = useState("");

    const [tasks, setTasks] = useState([]);
    const [task, setTask] = useState("");

    const addTask = () => {
        if (task.trim() !== "") {
            setTasks([...tasks, task]);
            setTask("");
        }
    };

    const handleToggle = () => {
        setIsOn(!isOn)
    }

    const handleKeyDown = (event) => {
        setLastKey(event.key);
    };

    return (
        <div className="p-4">
            <input
                type="text"
                onKeyDown={handleKeyDown}
                placeholder="Press any key..."
                className="px-3 py-2 border"
            />
            <p className="mt-2">Last key pressed: {lastKey}</p>

            {/* button toggle */}
            <div>
                <button onClick={handleToggle}
                    className={`px-4 py-2 rounded ${isOn ? 'bg-green-500 duration-1000 text-white' : 'bg-gray-300 duration-1000 text-black'}`}
                >
                    {isOn ? 'ON' : 'OFF'}
                </button>
            </div>
            <p className="mt-3">
                Toggle is <strong>{isOn ? "Enabled" : "Disabled"}</strong>
            </p>

            {/* live text changing  */}
            <div className="p-4">
                <input
                    type="text"
                    placeholder="Type your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="px-3 py-2 border"
                />
                <p className="mt-2">Your name is: {name}</p>
            </div>

            {/* Array State management */}
            <div className="p-4">
                <input
                    type="text"
                    placeholder="Enter task"
                    value={task}
                    onChange={(e) => setTask(e.target.value)}
                    className="px-3 py-2 border"
                />
                <button onClick={addTask} className="px-4 py-2 ml-2 text-white bg-green-500 rounded">
                    Add
                </button>

                <ul className="pl-5 mt-3 list-disc">
                    {tasks.map((t, index) => (
                        <li key={index}>{t}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
