// Hero.jsx
import React from 'react';

const Hero = () => {
  return (
    <div>
      
     
      <main className="flex flex-col items-center justify-center min-h-[calc(100vh-80px)] px-4 text-center bg-black">
        <div className="relative flex items-center justify-center w-full max-w-2xl mx-auto my-8">
         
          <div class="group flex flex-wrap space-x justify-center overflow-hidden ">
            
           <svg width="100" height="134" viewBox="0 0 265 434" fill="none" xmlns="http://www.w3.org/2000/svg" class="opacity-0 -rotate-45 group-hover:opacity-100 group-hover:rotate-0 transition-all duration-500 ">
           <path d="M300 217L0 433.506V0.493652L300 217Z" fill="#26A8DA" fillOpacity="0.6" class="border border-blue-300"/>
            <text
              x="50%" y="50%" textAnchor="middle" dominantBaseline="middle"
              className="fill-white text-6xl"
              >
             Imagine
             </text>
           </svg>
            <svg width="100" height="134" viewBox="0 0 265 434" fill="none" xmlns="http://www.w3.org/2000/svg" class="opacity-0 rotate-45 group-hover:opacity-100 group-hover:rotate-0 transition-all duration-500 ">
            <path d="M300 217L0 433.506V0.493652L300 217Z" fill="#26A8DA" fillOpacity="0.6"/>
             <text
              x="50%" y="50%" textAnchor="middle" dominantBaseline="middle"
              className="fill-white text-6xl"
              >
             Innovate
             </text>
             </svg>
            <svg width="100" height="134" viewBox="0 0 265 434" fill="none" xmlns="http://www.w3.org/2000/svg" class="opacity-0 -rotate-45 group-hover:opacity-100 group-hover:rotate-0 transition-all duration-500 ">
            <path d="M300 217L0 433.506V0.493652L300 217Z" fill="#26A8DA" fillOpacity="0.6"/>
             <text
              x="50%" y="50%" textAnchor="middle" dominantBaseline="middle"
              className="fill-white text-6xl"
              >
             Implement
             </text>
            </svg>
</div>

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

        
      
      </main>
    </div>
  
  );
};

export default Hero;