import React from "react";
import { useNavigate } from "react-router-dom";
import { TfiPencilAlt } from "react-icons/tfi";

const Welcome = () => {
    const navigate = useNavigate(); // Initialize navigate

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-white text-center">
            <div className="flex">
                <div className="text-4xl text-black font-bold">
                    <TfiPencilAlt />
                </div>
                <div>
                    <h1 className="text-4xl font-bold">Jotter</h1>
                </div>
            </div>
            <p className="text-gray-600 my-4 font-bold">
                Your Notes, Organized. Automatically.
            </p>
            <small>Save your screenshots, PDFs, and notes in one place. Search effortlessly and find what you need in seconds.</small>
            <button
                onClick={() => navigate("/login")} // Use navigate function here
                className="mt-6 px-6 py-2 bg-black text-white rounded"
            >
                Get Started for Free
            </button>
        </div>
    );
};

export default Welcome;
