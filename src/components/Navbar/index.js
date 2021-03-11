import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
  return (
    <nav className="navbar navbar-expand navbar-dark bkgd-color">
      {/* Name link to home page */}
      <Link className="navbar-brand" to="/">
        <span className="text-color">Tim Martin</span>
      </Link>
      {/* Menu items */}
      <ul className="navbar-nav d-flex ml-auto text-color">
        <li className="nav-item">
          <Link
            to="/about"
            className={ "nav-link" }
          >
            About
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/portfolio"
            className={ "nav-link" }
          >
            Portfolio
          </Link>
        </li>
        {/* <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Portfolio
          </a>
          <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
            <Link
              to="/portfolio" 
              className="dropdown-item"
            >
              Regular
            </Link>
            <Link
              to="/portfolio/postit" 
              className="dropdown-item"
            >
              Post-It Notes
            </Link>
          </div>
        </li> */}
      </ul>
    </nav>
  );
}

export default Navbar;
