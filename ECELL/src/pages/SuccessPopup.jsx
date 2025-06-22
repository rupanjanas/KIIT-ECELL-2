import React from 'react';

const SuccessPopup = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70">
      <div className="rounded-full border border-white px-6 py-4 text-center bg-[#1a1a1a] text-white shadow-xl max-w-lg w-[90%]">
        <p className="text-green-400 font-bold text-sm sm:text-base">
          You’ve successfully created your account
        </p>
        <p className="text-xs text-gray-400 mt-1">
          We’re redirecting you to the login
        </p>
      </div>
    </div>
  );
};

export default SuccessPopup;
