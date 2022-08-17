import React, { useState } from "react";
import "./navBar.css";
import { Link } from "react-router-dom";

function NavBar() {
  const [active, setActive] = useState("nav__menu");
  const [toggleIcon, setToggleIcon] = useState("nav__toggler");

  const navToggle = () => {
    active === "nav__menu"
      ? setActive("nav__menu nav__active")
      : setActive("nav__menu");

    // TogglerIcon

    toggleIcon === "nav__toggler"
      ? setToggleIcon("nav__toggler toggle")
      : setToggleIcon("nav__toggler");
  };
  return (
    <nav className="nav">
      <Link to="/">Emerald Coast Weddings</Link>
      <ul className={active}>
        <li className="nav_item"></li>
        <Link to="/">Home</Link>
        <li className="nav_item"></li>
        <Link to="/About">About</Link>
        <li className="nav_item"></li>
        <Link to="/Gallery">Gallery</Link>
        <li className="nav_item"></li>
        <Link to="/Packages">Packages & Pricing</Link>
        <li className="nav_item"></li>
        <Link to="/Contact">Contact Us</Link>
      </ul>

      <div onClick={navToggle} className={toggleIcon}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
  );
}

export default NavBar;
