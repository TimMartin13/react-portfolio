import React, { useState, useEffect } from "react";
import { Link } from 'react-scroll';


// ********** fixed navbar ************
// const navbar = document.getElementById('nav');
// const topLink = document.querySelector('.top-link');

// window.addEventListener('scroll', function() {
//     const scrollHeight = window.pageYOffset;
//     const navHeight = navbar.getBoundingClientRect().height;

//     if (scrollHeight > navHeight) { navbar.classList.add('fixed-nav'); }
//     else { navbar.classList.remove('fixed-nav'); }

//     // if (scrollHeight > 500) { topLink.classList.add('show-link'); }
//     // else { topLink.classList.remove('show-link'); }
// });

const Navbar = () => {
  
  const [navbarHeight, setNavbarHeight] = useState(0);

  const navToggle = () => {
    const linksContainer = document.querySelector('.links-container');
    const links = document.querySelector('.links');
    const containerHeight = linksContainer.getBoundingClientRect().height;
    const linksHeight = links.getBoundingClientRect().height;
  
    if (containerHeight === 0) { setNavbarHeight(linksHeight); }
    else { setNavbarHeight(0); }

  };

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
        <div className="links-container" style={{ height: `${navbarHeight}px` }}>
          <ul className="links">
            <li>
              <Link 
                activeClass="active"
                to="home"
                spy={ true }
                smooth={ true }
                duration={ 100 }
                onClick={() => setNavbarHeight(0)}
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
                onClick={() => setNavbarHeight(0)}
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
                onClick={() => setNavbarHeight(0)}
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
