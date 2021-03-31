import React from "react";
import { Link } from 'react-scroll';

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
  return (
    <nav id="nav">
      <div className="nav-center">
        {/* nav header */}
        <div className="nav-header">
          <button className="nav-toggle">
            <i className="fas fa-bars"></i>
          </button>
        </div>
        {/* links */}
        <div className="links-container">
          <ul className="links">
            <li>
              <Link 
                activeClass="active"
                to="home"
                spy={ true }
                smooth={ true }
                duration={ 100 }
              >
                <span className="scroll-link">Home</span>
              </ Link>
            {/* <a href="#home" class="scroll-link">home</a> */}
            </li>
            <li>
              <Link 
                activeClass="active"
                to="about"
                spy={ true }
                smooth={ true }
                duration={ 100 }
              >
                About
              </ Link>
              {/* <a href="#about" class="scroll-link">about</a> */}
            </li>
            <li>
              <Link 
                activeClass="active"
                to="projects"
                spy={ true }
                smooth={ true }
                duration={ 100 }
              >
                Projects
              </ Link>
              {/* <a href="#projects" class="scroll-link">projects</a> */}
            </li>
          </ul>            
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
