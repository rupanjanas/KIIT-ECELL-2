import React from 'react';
import Footer from './pages/footer'; // Assuming footer.jsx is in the same directory
import Hero from './pages/Hero'; // Assuming Hero.jsx is in the same directory
import './index.css'; // Import your global styles, including Tailwind CSS



function App() {
  return (
    <>
      {/* The Footer component you created */}
      <Hero />
      {/* Other components can be added here */}
      {/* For example, you can add a main content section or other pages */}
      {/* <MainContent /> */}
      <Footer />
    </>
  );
}

export default App;