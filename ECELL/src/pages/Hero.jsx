// Hero.jsx
import React from 'react';

const Hero = () => {
  return (
    <div>
      {/* Main Content - Centered */}
      <main className="flex flex-col items-center justify-center min-h-[calc(100vh-80px)] px-4 text-center ">
        <div className="relative flex items-center justify-center w-full max-w-2xl mx-auto my-8">
          {/* This div acts as the circular/elliptical background seen in the image */}

          {/* Logo/Text "eXc" */}
          <div className="relative z-10 flex items-center justify-center">
            {/* The "e" part - simplified, adjust path for exact look */}
          </div>
        </div>

        <h1 className="text-3xl lg:text-4xl font-bold mt-4 tracking-wide">
          KIIT ENTREPRENEURSHIP CELL
        </h1>
        <p className="text-sm lg:text-base text-gray-400 mt-2 italic">
          For Entrepreneurs || By Entrepreneurs
        </p>

        {/* About Us section */}
        <div className="mt-20">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-blue-400">
            About Us
          </h2>
          <p className="text-lg lg:text-xl font-semibold px-4 max-w-3xl mx-auto">
            We're an organization, "NOT A SOCIETY"
          </p>
        </div>
      </main>
    </div>
  );
};

export default Hero;