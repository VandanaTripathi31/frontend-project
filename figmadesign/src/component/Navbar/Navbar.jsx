import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        {/* Add logo here if needed */}
      </div>
      <ul className="app__navbar-links">
        <li className="p__opensans"><a href="#home">Mentors</a></li>
        <li className="p__opensans"><a href="#about">How it works</a></li>
        <li className="p__opensans"><a href="#menu">Projects</a></li>
        <li className="p__opensans"><a href="#awards">Blog</a></li>
        <li className="p__opensans"><a href="#contact">FAQ</a></li>
        <li className="p__opensans"><a href="#contact">Code of Conduct</a></li>
        <li className="p__opensans"><a href="#contact">Hire from Us</a></li>
      </ul>
      <div className="app__navbar-login">
        <a href="#login" className="p__opensans"></a>
        <div></div>
        <a href="/" className="p__opensans">Apply Now</a>
      </div>
      <div className="app__navbar-smallscreen">
        {/* Removed the icons */}
        {/* Hamburger Menu button would go here */}

        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
            {/* Close button would go here */}
            <ul className="app__navbar-smallscreen_links">
              <li className="p__opensans"><a href="#home">Mentors</a></li>
              <li className="p__opensans"><a href="#about">How it works</a></li>
              <li className="p__opensans"><a href="#menu">Project</a></li>
              <li className="p__opensans"><a href="#awards">Blog</a></li>
              <li className="p__opensans"><a href="#contact">FAQ</a></li>
              <li className="p__opensans"><a href="#contact">Code of Conduct</a></li>
              <li className="p__opensans"><a href="#contact">Hire from Us</a></li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
