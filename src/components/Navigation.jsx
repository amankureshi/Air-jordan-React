//import "./App.css"; // Ensure you have appropriate CSS for the classes
import React, { useState } from "react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleHamburgerClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="nav container">
      <div className="logo">
        <img src="/images/brand_logo.png" alt="logo" />
      </div>

      <ul className={`nav-links ${isOpen ? "open" : ""}`}>
        <li className={isOpen ? "fade" : ""}>Menu</li>
        <li className={isOpen ? "fade" : ""}>About</li>
        <li className={isOpen ? "fade" : ""}>Location</li>
        <li className={isOpen ? "fade" : ""}>Contact</li>
      </ul>
      <div
        className={`hamburger ${isOpen ? "toggle" : ""}`}
        onClick={handleHamburgerClick}
      >
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
      <button className="login-btn">Login</button>
    </nav>
  );
};

export default Navigation;
