// Hero.jsx
import React from 'react';


const Hero = () => {
  return (
    
  < div className="w-full min-h-screen bg-no-repeat bg-center bg-contain bg-black"
     style={{ backgroundImage: "url('/hero section bg.svg')" }}>



     <main className="flex flex-col items-center justify-center min-h-[calc(100vh-80px)] px-4 text-center">
  <div className="relative flex items-center justify-center w-full max-w-2xl mx-auto my-8">
    <div className="group flex flex-row justify-center overflow-hidden">
      <img src="/Invisible triangle.svg" alt="Centered Logo" className="w-200 200 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10" />
      <svg
        viewBox="0 0 300 434"
        xmlns="http://www.w3.org/2000/svg"
        className="opacity-0 -rotate-45 group-hover:opacity-100 group-hover:-rotate-0 transition-all duration-500 w-[120px] h-[174px] sm:w-[150px] sm:h-[217px] md:w-[180px] md:h-[260px] lg:w-[210px] lg:h-[304px] md:w-[240px] md:h-[348px] lg:w-[270px] lg:h-[392px]"
      >
        <path
          d="M300 217L0 433.506V0.493652L300 217Z"
          fill="#26A8DA"
          fillOpacity="0.6"
        />
        <text
          x="50%"
          y="50%"
          textAnchor="middle"
          dominantBaseline="middle"
          className="fill-white text-sm sm:text-base font-semibold"
        >
          Imagine
        </text>
      </svg>
             <svg
        viewBox="0 0 300 434"
        xmlns="http://www.w3.org/2000/svg"
        className="opacity-0 rotate-45 group-hover:opacity-100 group-hover:rotate-0 transition-all duration-500 w-[120px] h-[174px] sm:w-[150px] sm:h-[217px] md:w-[180px] md:h-[260px] lg:w-[210px] lg:h-[304px]w-[180px] h-[260px] sm:w-[210px] sm:h-[304px] md:w-[240px] md:h-[348px] lg:w-[270px] lg:h-[392px]"
      >
        <path
          d="M300 217L0 433.506V0.493652L300 217Z"
          fill="#26A8DA"
          fillOpacity="0.6"
        />
        <text
          x="50%"
          y="50%"
          textAnchor="middle"
          dominantBaseline="middle"
          className="fill-white text-sm sm:text-base font-semibold"
        >
          Imagine
        </text>
      </svg>
             <svg
        viewBox="0 0 300 434"
        xmlns="http://www.w3.org/2000/svg"
        className="opacity-0 -rotate-45 group-hover:opacity-100 group-hover:rotate-0 transition-all duration-500 w-[120px] h-[174px] sm:w-[150px] sm:h-[217px] md:w-[180px] md:h-[260px] lg:w-[210px] lg:h-[304px]w-[180px] h-[260px] sm:w-[210px] sm:h-[304px] md:w-[240px] md:h-[348px] lg:w-[270px] lg:h-[392px] "
      >
        <path
          d="M300 217L0 433.506V0.493652L300 217Z"
          fill="#26A8DA"
          fillOpacity="0.6"
        />
        <text
          x="50%"
          y="50%"
          textAnchor="middle"
          dominantBaseline="middle"
          className="fill-white text-sm sm:text-base font-semibold"
        >
          Imagine
        </text>
      </svg>
</div>

          {/* Logo/Text "eXc" */}
          <div className="relative z-10 flex items-center justify-center">
            {/* The "e" part - simplified, adjust path for exact look */}
          </div>
        </div>
        <p className="text-3xl text-blue-300 poppins bold mt-20 ">
          For Entrepreneurs || By Entrepreneurs
        </p>
         
      </main>
    
    </div>
    
  
  );
};

export default Hero;