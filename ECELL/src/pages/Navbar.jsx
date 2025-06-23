import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-black text-white px-6 py-4 flex justify-between items-center shadow-md w-full">
      {/* Left Text Items */}
      <div className="flex space-x-6 text-sm sm:text-base font-medium">
        <span className="hover:text-gray-300 cursor-default">Home</span>
        <span className="hover:text-gray-300 cursor-default">About Us</span>
        <span className="hover:text-gray-300 cursor-default">Blogs</span>
      </div>

      {/* Center Logo */}
      <div className="text-xl sm:text-2xl font-bold tracking-wide text-white text-center">
        KIIT E-CELL
      </div>

      {/* Right Text Items */}
      <div className="flex space-x-6 text-sm sm:text-base font-medium items-center">
        <span className="hover:text-gray-300 cursor-default">Events</span>
        <span className="hover:text-gray-300 cursor-default">Join Us</span>

        {/* Circle profile icon with "U" */}
        <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-black font-semibold">
          U
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
