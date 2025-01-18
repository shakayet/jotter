import React from "react";
import { FaHome, FaBookmark, FaCalendarAlt, FaUser } from "react-icons/fa";
import { AiOutlinePlus } from "react-icons/ai";

function Footer() {
  return (
    <div className="fixed bottom-0 w-full bg-white border-t border-gray-200 flex gap-7 items-end py-2">
      {/* Home Button */}
      <button
        className="flex flex-col items-center text-gray-600 hover:text-black mb-2"
        onClick={() => console.log("Home clicked")}
      >
        <FaHome className="text-xl" />
      </button>

      {/* Bookmark Button */}
      <button
        className="flex flex-col items-center text-gray-600 hover:text-black mb-2"
        onClick={() => console.log("Bookmarks clicked")}
      >
        <FaBookmark className="text-xl" />
      </button>

      {/* Add Button */}
      <button
        className="relative bg-white border border-gray-300 shadow-md rounded-full w-14 h-14 flex items-center justify-center -top-6 hover:bg-gray-100"
        onClick={() => console.log("Add clicked")}
      >
        <AiOutlinePlus className="text-3xl text-gray-600" />
      </button>

      {/* Calendar Button */}
      <button
        className="flex flex-col items-center text-gray-600 hover:text-black mb-2"
        onClick={() => console.log("Calendar clicked")}
      >
        <FaCalendarAlt className="text-xl" />
      </button>

      {/* Profile Button */}
      <button
        className="flex flex-col items-center text-gray-600 hover:text-black mb-2"
        onClick={() => console.log("Profile clicked")}
      >
        <FaUser className="text-xl" />
      </button>
    </div>
  );
}

export default Footer;
