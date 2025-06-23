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
          <div className="relative w-full max-w-[500px] aspect-[1440/1024] my-10">
            <div className="group relative w-full h-full flex items-center justify-center">
              
              {/* Stacked PNG on top of SVGs */}
<img
  src="/KIIT logo white.png"
  alt="Stacked Overlay"
  className="absolute top-[80%]  translate-x-3 -translate-y-1/2 w-[400px] sm:w-[400px] md:w-[450px] z-40 opacity-100 hover:opacity-0"
/>

{/* Centered Triangle below */}
<img
  src="/Invisible triangle.svg"
  alt="Centered Logo"
  className="absolute top-[90%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[360px] sm:w-[360px] md:w-[500px] z-30 opacity-100 hover:opacity-0"
/>

              {/* Flex Row for 3 SVGs */}
              <div className="flex items-end justify-center">
                
                {/* SVG 1 */}
                <svg
                  viewBox="0 0 300 434"
                  xmlns="http://www.w3.org/2000/svg"
                  className="opacity-0 -rotate-45 group-hover:opacity-100 group-hover:rotate-0 transition-all duration-500 w-[90px] sm:w-[110px] md:w-[130px] lg:w-[150px] translate-y-32"
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
                    className="fill-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold align-baseline"
                  >
                    Imagine
                  </text>
                </svg>

                {/* SVG 2 */}
                <svg
                  viewBox="0 0 300 434"
                  xmlns="http://www.w3.org/2000/svg"
                  className="opacity-0 rotate-45 group-hover:opacity-100 group-hover:rotate-0 transition-all duration-500 w-[90px] sm:w-[110px] md:w-[130px] lg:w-[150px] translate-y-32 "
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
                    className="fill-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold align-baseline"
                  >
                    Innovate
                  </text>
                </svg>

                {/* SVG 3 */}
                <svg
                  viewBox="0 0 300 434"
                  xmlns="http://www.w3.org/2000/svg"
                  className="opacity-0 -rotate-45 group-hover:opacity-100 group-hover:rotate-0 transition-all duration-500 w-[90px] sm:w-[110px] md:w-[130px] lg:w-[150px] translate-y-32"
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
                                        className="fill-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold align-baseline"
                  >
                    Implement
                  </text>
                </svg>
              </div>
            </div>
          </div>

          {/* Tagline */}
          <p className="text-base sm:text-xl md:text-2xl lg:text-3xl text-blue-300 font-bold font-poppins mt-6 sm:mt-10 px-4">
            For Entrepreneurs <span className="hidden sm:inline">||</span> By Entrepreneurs
          </p>
        </main>
      </div>
    </div>
  );
};

export default Hero;
