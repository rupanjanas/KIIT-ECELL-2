import React from 'react';
import Footer from './pages/footer';
import Hero from './pages/Hero';
import About from './pages/About';
import './index.css';
import SignUp from './pages/Signup';
import LoginPopup from './pages/Loginpopup';
import ProfileCard from './pages/ProfileCard';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        {/* ✅ Homepage Route */}
        <Route
          path="/"
          element={
            <>
              <Hero />
              <About />
          
              <Footer />
            </>
          }
        />

        <Route path="/Signup" element={<SignUp />} />
        <Route path="/ProfileCard" element={<ProfileCard />} />
      </Routes>
    </Router>
  );
}

export default App;
