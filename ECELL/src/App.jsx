import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./pages/footer";
import Hero from "./pages/Hero";
import SignUp from "./pages/Signup";
import LoginPopup from "./pages/Loginpopup";
import ProfileCard from "./pages/ProfileCard";
import Navbar from "./pages/Navbar";
import "./index.css";

function App() {
  return (
    <Router>
      {/* Navbar is shown on all pages */}
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
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

