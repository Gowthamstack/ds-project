import React, { useState, useRef,useEffect } from "react";
import { NavLink } from "react-router-dom";
import { assests } from "../assets/assests.js";
import "./Navbar.css";

const Navbar = () => {
  const ref = useRef(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled,setScrolled]=useState(false);

  const handleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <h1 className="logo">Ds-InterConnect</h1>

      <div className="nav-links">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/Course">Courses</NavLink>
        <NavLink to="/Service">Service</NavLink>
        <NavLink to='/Contac'>Contact Us</NavLink>
      </div>

      <div className="menu-icon">
        <img
          src={assests.menu_icon_white}
          alt="Menu_icon"
          className="menu-img"
          onClick={handleMenu}
        />
      </div>

      <div className={`mobile-nav-links ${isMenuOpen ? "open" : ""}`}>
        <div className="cross-icon">
          <img
            src={assests.cross_icon}
            alt="Close"
            className="close-btn"
            onClick={handleMenu}
            style={{ background: "black" }}
          />
        </div>
        <NavLink to="/" onClick={handleMenu}>
        Home
        </NavLink>
        <NavLink to="/Course" onClick={handleMenu}>
        Course
        </NavLink>
        <NavLink to="/Service" onClick={handleMenu}>
        Service
        </NavLink>
        <NavLink to='/Contact Us' onClick={handleMenu}>
        Contact Us
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
