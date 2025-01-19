import React, { useState } from "react";
import { FaHome, FaBookmark, FaCalendarAlt, FaUser } from "react-icons/fa";
import { AiOutlinePlus } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

function Footer() {
  const [showDropdown, setShowDropdown] = useState(false);  // State to toggle dropdown visibility
  const navigate = useNavigate();

  // Handle dropdown toggle
  const toggleDropdown = () => {
    setShowDropdown((prevState) => !prevState);
  };

  // Dropdown options click handler
  const handleOptionClick = (option) => {
    setShowDropdown(false);  // Hide dropdown after option is clicked
    switch (option) {
      case "Add Note":
        // Handle add note action
        console.log("Add Note clicked");
        break;
      case "Import Images":
        // Handle import images action
        console.log("Import Images clicked");
        break;
      case "Import PDF":
        // Handle import PDF action
        console.log("Import PDF clicked");
        break;
      case "Create Folder":
        // Handle create folder action
        console.log("Create Folder clicked");
        break;
      default:
        break;
    }
  };

  return (
    <div className="fixed bottom-0 w-full bg-white border-t border-gray-200 flex gap-7 items-end py-2">
      {/* Home Button */}
      <button
        className="flex flex-col items-center text-gray-600 hover:text-black mb-2"
        onClick={() => navigate("/home")}
      >
        <FaHome className="text-xl" />
        <span className="text-xs">Home</span>
      </button>

      {/* Bookmark Button */}
      <button
        className="flex flex-col items-center text-gray-600 hover:text-black mb-2"
        onClick={() => navigate("/favourite")}
      >
        <FaBookmark className="text-xl" />
        <span className="text-xs">Favourites</span>
      </button>

      {/* Add Button with Dropdown */}
      <div className="relative">
        <button
          className="bg-white border border-gray-300 shadow-md rounded-full w-14 h-14 flex items-center justify-center -top-6 hover:bg-gray-100 transition duration-200"
          onClick={toggleDropdown}
        >
          <AiOutlinePlus className="text-3xl text-gray-600" />
        </button>

        {showDropdown && (
  <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 w-56 bg-white shadow-lg rounded-lg border border-gray-200 mt-2 transition-all duration-200">
    <ul>
      <li
        className="flex items-center gap-2 py-3 px-4 hover:bg-green-100 cursor-pointer text-gray-700 transition duration-300 rounded-t-lg"
        onClick={() => navigate("/notes")}
      >
        📝 Add Note
      </li>
      <li
        className="flex items-center gap-2 py-3 px-4 hover:bg-green-100 cursor-pointer text-gray-700 transition duration-300"
        onClick={() => navigate("/images")}
      >
        🖼️ Import Images
      </li>
      <li
        className="flex items-center gap-2 py-3 px-4 hover:bg-green-100 cursor-pointer text-gray-700 transition duration-300"
        onClick={() => navigate("/pdfs")}
      >
        📄 Import PDF
      </li>
      <li
        className="flex items-center gap-2 py-3 px-4 hover:bg-green-100 cursor-pointer text-gray-700 transition duration-300 rounded-b-lg"
        onClick={() => handleOptionClick("Create Folder")}
      >
        📂 Create Folder
      </li>
    </ul>
  </div>
)}
      </div>

      {/* Calendar Button */}
      <button
        className="flex flex-col items-center text-gray-600 hover:text-black mb-2"
        onClick={() => navigate("/calendar")}
      >
        <FaCalendarAlt className="text-xl" />
        <span className="text-xs">Calendar</span>
      </button>

      {/* Profile Button */}
      <button
        className="flex flex-col items-center text-gray-600 hover:text-black mb-2"
        onClick={() =>  navigate("/profile")}
      >
        <FaUser className="text-xl" />
        <span className="text-xs">Profile</span>
      </button>
    </div>
  );
}

export default Footer;
