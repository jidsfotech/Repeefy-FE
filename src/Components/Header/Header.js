import React, { useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = ({ handleSignup, handleLogin }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOnclick = () => {
    setIsOpen(!isOpen);
  }

  return (
    <div className="Header">
      <nav className="nav navBar"> 
        <Link className="logo-container" to="/">
          <img src='https://res.cloudinary.com/repify/image/upload/v1604754629/icon_lmn1hi.png' className="logo" alt="Repify" />
          Repify
        </Link>
        <div className={ isOpen ? 'hamburger active' : 'hamburger' } onClick={handleOnclick}>
          <div className="menu"></div>
        </div>
        <ul className="navItems">
          <li className={ isOpen ? 'navLink active' : 'navLink' }>
            <Link className="links" onClick={handleLogin} to="/login">
              Login
            </Link>
            <Link className="links" onClick={handleSignup} to="/register">
              Signup
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
