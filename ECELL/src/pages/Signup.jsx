import React, { useState, useEffect } from 'react';

const SignUp = () => {
    const [showFirstLogo, setShowFirstLogo] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowFirstLogo(prev => !prev);
    }, 3000); // switch every 3 seconds

    return () => clearInterval(interval); // cleanup
  }, []);
  return (
    <div className="min-h-screen bg-black flex flex-col justify-center items-center px-4 sm:px-6 lg:px-12">
      <div className="w-full max-w-6xl bg-[#0e0e0e] text-white rounded-lg shadow-lg flex flex-col md:flex-row overflow-hidden">

        {/* Left Side - Form */}
        <div className="w-full md:w-1/2 p-8 sm:p-12">
          <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-6">Create Your Account</h2>

          {/* Google Sign Up */}
          <button className="w-full border border-gray-400 rounded-md py-2 flex items-center justify-center gap-3 text-sm mb-4 hover:border-white transition">
            <span className="text-lg font-bold">G</span>
            <span>Sign up with Google</span>
          </button>

          {/* Divider */}
          <div className="flex items-center my-6">
            <div className="flex-grow border-t border-gray-600" />
            <span className="mx-4 text-sm text-gray-400">OR</span>
            <div className="flex-grow border-t border-gray-600" />
          </div>

          {/* Form Fields */}
          <form className="space-y-4 text-sm">
            <div>
              <label className="block mb-1 font-medium">Name</label>
              <input
                type="text"
                placeholder="Enter your Name"
                className="w-full px-4 py-2 rounded-md bg-black border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block mb-1 font-medium">
                E-mail <span className="text-xs text-gray-400">(Use KIIT Email ID)</span>
              </label>
              <input
                type="email"
                placeholder="Enter your KIIT Email ID"
                className="w-full px-4 py-2 rounded-md bg-black border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block mb-1 font-medium">Password</label>
              <input
                type="password"
                placeholder="Enter your Password"
                className="w-full px-4 py-2 rounded-md bg-black border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Checkbox */}
            <div className="flex items-center text-xs text-gray-400 mt-2">
              <input type="checkbox" className="mr-2" />
              <span>I accept all the terms and conditions</span>
            </div>

            {/* Sign Up Button */}
            <button
              type="submit"
              className="w-full mt-4 py-2 rounded-md bg-white text-black font-bold tracking-wide hover:bg-gray-200 transition"
            >
              SIGN UP
            </button>
          </form>
        </div>

        {/* Right Side - Logo & Circle */}
         <div className="hidden md:flex w-1/2 items-center justify-center p-10">
          <img
            src={showFirstLogo ? '/Signup logo(1).svg' : '/Signup logo(2).svg'}
            alt="E-Cell Logo"
            className=" transition-opacity duration-6000 ease-in-out w-[300px] sm:w-[380px] md:w-[440px]"
          />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
