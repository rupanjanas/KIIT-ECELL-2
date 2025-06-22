import React from 'react';
import Footer from './pages/footer'; // Assuming footer.jsx is in the same directory
import Hero from './pages/Hero'; // Assuming Hero.jsx is in the same directory
import About from './pages/About';
import './index.css'; // Import your global styles, including Tailwind CSS
import SignUp from './pages/Signup';



function App() {
  return (
    <>
      {/* The Footer component you created */}
      <Hero />
      <About/>
      <SignUp/>
      <Footer />
    </>
  );
}

export default App;