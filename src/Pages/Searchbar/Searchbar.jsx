import React from "react";
import { FaSearch } from "react-icons/fa"; // Search icon
import { HiMenuAlt4 } from "react-icons/hi"; // Menu icon

const SearchBar = () => {
    return (
        <div>
            <div className="flex items-center justify-between w-full max-w-md px-4 py-2 border border-gray-300 rounded-lg shadow-sm bg-white">
                {/* Search Icon & Input */}
                <div className="flex items-center space-x-2">
                    <FaSearch className="text-gray-400" />
                    <input
                        type="text"
                        placeholder="Search here"
                        className="outline-none bg-transparent text-gray-700 placeholder-gray-400"
                    />
                </div>

                {/* Menu Icon */}
                <HiMenuAlt4 className="text-gray-500 cursor-pointer" />
            </div>
        </div>
    );
};

export default SearchBar;
