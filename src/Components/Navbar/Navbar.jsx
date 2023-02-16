import "../Navbar/Navbar.css";
import React from "react";
import logo from "../../Assets/icons/logo.svg"
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <>
      <nav>
        <Link to="/" className="left-container">
          <div className="container-logo">
          <img className="logo" alt="" src={logo}></img>
          </div>
          <div>
          <p> Soundwave</p>
          </div>
        </Link>
        <div className="right-container">
          <div>
          <Link to="Discover"> Discover</Link>
          </div>
          <div className="container-join">
          <Link to="Join"> Join</Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
