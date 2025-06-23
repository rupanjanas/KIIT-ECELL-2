import React, { useState, useRef, useEffect } from "react";
import Login from "./Loginpopup";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const popupRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (popupRef.current && !popupRef.current.contains(e.target)) {
        setShowLogin(false);
      }
    };

    if (showLogin) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showLogin]);

  return (
    <>
      <nav className="fixed top-0 left-0 z-50 bg-black text-white w-full px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Hamburger (Mobile Only) */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Left Tabs */}
          <div className="hidden md:flex space-x-12 text-sm sm:text-base font-medium">
            <span className="hover:text-gray-300 cursor-pointer">Home</span>
            <span className="hover:text-gray-300 cursor-pointer">About Us</span>
            <span className="hover:text-gray-300 cursor-pointer">Blogs</span>
          </div>

          {/* Center Logo */}
          <div className="text-xl sm:text-2xl tracking-wide text-white text-center font-poppins">
            KIIT E-CELL
          </div>

          {/* Right Tabs */}
          <div className="hidden md:flex space-x-6 text-sm sm:text-base font-medium items-center">
            <span className="hover:text-gray-300 cursor-pointer">Events</span>
            <span className="hover:text-gray-300 cursor-pointer">Join Us</span>

            {/* Profile Button */}
            <button
              onClick={() => setShowLogin(true)}
              className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-black font-semibold"
            >
              U
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {isOpen && (
          <div className="md:hidden mt-4 space-y-2 text-sm font-medium">
            <span className="block hover:text-gray-300">Home</span>
            <span className="block hover:text-gray-300">About Us</span>
            <span className="block hover:text-gray-300">Blogs</span>
            <span className="block hover:text-gray-300">Events</span>
            <span className="block hover:text-gray-300">Join Us</span>
            <span
              className="block hover:text-gray-300"
              onClick={() => setShowLogin(true)}
            >
              Profile
            </span>
          </div>
        )}
      </nav>

      {/* Popup Wrapper */}
      {showLogin && (
  <div className="fixed inset-0 z-[999] bg-black bg-opacity-60 flex items-center justify-center px-4">
    <div ref={popupRef} className="w-full max-w-md">
      <Login />
    </div>
  </div>
)}

    </>
  );
};

export default Navbar;
