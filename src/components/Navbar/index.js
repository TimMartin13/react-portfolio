import React, { useState } from "react";
import { Link, animateScroll as scroll } from 'react-scroll';

const Navbar = () => {

  const navToggle = () => {
    const linksContainer = document.querySelector('.links-container');
    const links = document.querySelector('.links');
    const containerHeight = linksContainer.getBoundingClientRect().height;
    const linksHeight = links.getBoundingClientRect().height;
  
    // if (containerHeight === 0) { setNavbarHeight(linksHeight); }
    // else { setNavbarHeight(0); }
    if (containerHeight === 0) { linksContainer.style.height = `${ linksHeight }px`; }
    else { linksContainer.style.height = 0; }

  };

  const menuSelection = (linkName) => {
    // Navigate to specific spot
    const navbar = document.getElementById('nav');
    const linksContainer = document.querySelector('.links-container');
    const id = linkName;
    const element = document.getElementById(id);

    // // Calculate the heights
    const navHeight = navbar.getBoundingClientRect().height;
    const containerHeight = linksContainer.getBoundingClientRect().height;
    const fixedNav = navbar.classList.contains('fixed-nav');
    let position = element.offsetTop - navHeight;
        
    if (!fixedNav) {
      position -= navHeight;
    }
    
    if (navHeight > 82) {
      position += containerHeight;
    }
    
    window.scrollTo({
      left: 0, 
      top: position
    });
    linksContainer.style.height = 0;
  }  

  return (
    <nav id="nav">
      <div className="nav-center">
        {/* nav header */}
        <div className="nav-header">
          <button className="nav-toggle" onClick={ navToggle }>
            <i className="fas fa-bars"></i>
          </button>
        </div>
        {/* links */}
        <div className="links-container" style={{ height: `${0}px` }}>
          <ul className="links">
            <li>
              <Link 
                activeClass="active"
                to="home"
                spy={ true }
                smooth={ true }
                duration={ 100 }
                onClick={() => menuSelection("home")}
              >
                <span className="scroll-link">Home</span>
              </ Link>
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
            </li>
          </ul>            
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
