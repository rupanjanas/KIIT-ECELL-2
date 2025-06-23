import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./pages/footer";
import Hero from "./pages/Hero";
import SignUp from "./pages/Signup";
import LoginPopup from "./pages/Loginpopup";
import ProfileCard from "./pages/ProfileCard";
import Navbar from "./pages/Navbar";
import "./index.css";
import About from "./pages/About";

function App() {
  return (
    <Router>
      {/* Navbar is shown on all pages */}
     

      <Routes>
        <Route
          path="/"
          element={
            <>
               <Navbar />
              <Hero />
              <About/>
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

