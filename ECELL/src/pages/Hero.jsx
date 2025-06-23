import React from 'react';

const Hero = () => {
  return (
    <div className="bg-black">
      <div
        className="w-full min-h-screen bg-center bg-no-repeat bg-contain"
        style={{ backgroundImage: "url('/hero section bg.svg')" }}
      >
        <main className="flex flex-col items-center justify-center min-h-screen px-4 sm:px-8 text-center">
          {/* Overlapping Logo + SVGs */}
          <div className="relative w-full max-w-[500px] aspect-[1440/1024]  my-10">
            <div className="group relative w-full h-full flex items-center justify-center">
              {/* Centered Logo */}
              <img
                src="/Invisible triangle.svg"
                alt="Centered Logo"
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-6 w-full z-30 opacity-100 hover:opacity-0"
              />

              <svg
        viewBox="0 0 300 434"
        xmlns="http://www.w3.org/2000/svg"
        className="opacity-0 -rotate-45 group-hover:opacity-100 group-hover:-rotate-0 transition-all duration-500 translate-y-32 w-[120px] h-[174px] sm:w-[150px] sm:h-[217px] md:w-[180px] md:h-[260px] lg:w-[210px] lg:h-[304px] md:w-[240px] md:h-[348px] lg:w-[270px] lg:h-[392px]"
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
        className="opacity-0 rotate-45 group-hover:opacity-100 group-hover:rotate-0 transition-all duration-500 translate-y-32 w-[120px] h-[174px] sm:w-[150px] sm:h-[217px] md:w-[180px] md:h-[260px] lg:w-[210px] lg:h-[304px]w-[180px] h-[260px] sm:w-[210px] sm:h-[304px] md:w-[240px] md:h-[348px] lg:w-[270px] lg:h-[392px]"
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
          Innovate
        </text>
      </svg>
             <svg
        viewBox="0 0 300 434"
        xmlns="http://www.w3.org/2000/svg"
        className="opacity-0 -rotate-45 group-hover:opacity-100 group-hover:rotate-0 transition-all duration-500 translate-y-32 w-[120px] h-[174px] sm:w-[150px] sm:h-[217px] md:w-[180px] md:h-[260px] lg:w-[210px] lg:h-[304px]w-[180px] h-[260px] sm:w-[210px] sm:h-[304px] md:w-[240px] md:h-[348px] lg:w-[270px] lg:h-[392px] "
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
          Implement
        </text>
      </svg>
</div>

          </div>

          {/* Tagline */}
          <p className="text-xl sm:text-2xl md:text-3xl text-blue-300 font-bold font-poppins mt-6 sm:mt-10">
            For Entrepreneurs <span className="hidden sm:inline">||</span> By Entrepreneurs
          </p>
        </main>
      </div>
    </div>
  );
};

export default Hero;
