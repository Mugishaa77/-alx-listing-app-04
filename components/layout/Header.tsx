import React from "react";
import { Search } from "lucide-react"; // You can also use Heroicons if preferred.

const Header: React.FC = () => {
  return (
    <header className="w-full bg-white shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <div className="text-2xl font-bold text-red-500 cursor-pointer">
          AirbnbClone
        </div>

        {/* Search Bar */}
        <div className="flex items-center w-1/2 bg-gray-100 rounded-full px-4 py-2 shadow-sm">
          <input
            type="text"
            placeholder="Search..."
            className="flex-grow bg-transparent outline-none text-gray-700"
          />
          <Search className="text-gray-500" size={20} />
        </div>

        {/* Auth Buttons */}
        <div className="flex items-center gap-4">
          <button className="text-gray-700 hover:text-red-500">Sign In</button>
          <button className="bg-red-500 text-white px-4 py-2 rounded-full hover:bg-red-600">
            Sign Up
          </button>
        </div>
      </div>

      {/* Accommodation Types */}
      <div className="max-w-7xl mx-auto flex justify-center gap-6 text-gray-600 border-t border-gray-200 py-3">
        <button className="hover:text-red-500">Rooms</button>
        <button className="hover:text-red-500">Mansion</button>
        <button className="hover:text-red-500">Countryside</button>
        <button className="hover:text-red-500">Beach</button>
        <button className="hover:text-red-500">Luxury</button>
      </div>
    </header>
  );
};

export default Header;
