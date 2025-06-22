// Hero.jsx
import React from 'react';

const About = () => {
  return (
    < div className=" bg-no-repeat bg-center bg-black mt-0"
     style={{ backgroundImage: "url('/About circle.svg')" }}>
  {/* Content */}     
    <div className="text-center mb-10">
        <h2 className="text-3xl sm:text-4xl font-bold text-blue-400 tracking-wide">About Us</h2>
        <h3 className="text-xl sm:text-2xl font-extrabold mt-2">
          We’re an organization, <span className="text-white">“NOT A SOCIETY”</span>
        </h3>
      </div>

      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Left Text */}
        <div className="space-y-6 text-sm sm:text-base text-gray-300 leading-relaxed">
          <p>
            KIIT E-Cell believes that emerging economies like India need the drive of the new and young breed of worthy entrepreneurs who target their efforts on innovative ways to technologically address the entrepreneurship challenges of millions of people.
          </p>
          <p>
            KIIT E-Cell targets on fostering the culture among the students by establishing necessary support systems for aspiring entrepreneurs with the East India’s largest inbuilt technology business incubator KIIT TBI.
          </p>
        </div>

        {/* Logos */}
        <div className="flex flex-col items-center gap-6">
          <img src="/exc-logo.svg" alt="eXc Logo" className="w-48" />
          <img src="/kiit-logo.svg" alt="KIIT Logo" className="w-32" />
        </div>
      </div>
    </div>
  );
};

export default About;