import React from "react";
import {Link } from 'react-router-dom';
import Button from '../../Components/Button/Button';
import "./404.css";

const NotFound = (props) => {
  return (
    <div className="page404">
      <div className="nav404">
        <Link className="logo-container" to="/">
            <img src='https://res.cloudinary.com/repify/image/upload/v1604754629/icon_lmn1hi.png' className="logo" alt="Repify" />
            Repify
        </Link>
      </div>
      <img src='https://res.cloudinary.com/repify/image/upload/v1601862897/empty_state.svg' alt="erro" />
      <p>Error 404 Page not found!</p>
      <Button Title="Return to Home Page" to="/" />
    </div>
  );
};

export default NotFound;
