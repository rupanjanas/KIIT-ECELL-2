import React from "react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 z-50 bg-black text-white px-6 py-4 flex items-center w-full pt-20">
      {/* Left Text Items */}
      <div className="flex flex-1 justify-start space-x-6 text-sm sm:text-base font-medium">
        <span className="hover:text-gray-300 cursor-default">Home</span>
        <span className="hover:text-gray-300 cursor-default">About Us</span>
        <span className="hover:text-gray-300 cursor-default">Blogs</span>
      </div>

      {/* Center Logo */}
      <div className="flex-1 text-xl sm:text-2xl tracking-wide text-white text-center font-poppins">
        KIIT E-CELL
      </div>

      {/* Right Text Items */}
      <div className="flex flex-1 justify-end space-x-6 text-sm sm:text-base font-medium items-center">
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
