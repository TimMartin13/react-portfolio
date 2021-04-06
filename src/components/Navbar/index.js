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
  
    // if (containerHeight === 0) { setNavbarHeight(linksHeight); }
    // else { setNavbarHeight(0); }
    if (containerHeight === 0) { linksContainer.style.height = `${ linksHeight }px`; }
    else { linksContainer.style.height = 0; }

  };

  const menuSelection = (linkName) => {
    // Navigate to specific spot
    // const navbar = document.getElementById('nav');
    const linksContainer = document.querySelector('.links-container');
    // const id = linkName;
    // const element = document.getElementById(id);

    // // // Calculate the heights
    // const navHeight = navbar.getBoundingClientRect().height;
    // const containerHeight = linksContainer.getBoundingClientRect().height;
    // // const fixedNav = navbar.classList.contains('fixed-nav');
    // let position = element.offsetTop - navHeight;
    
    // console.log("NavBarHeight:", navbarHeight);   
    // console.log("NavHeight:", navHeight);
    // console.log("Position:", position);
    
    // if (!fixedNav) {
    //   position -= navHeight;
    // }
    
    // if (navHeight > 82) {
    //   position += containerHeight;
    //   setNavbarHeight(-containerHeight);
    // }
    
    // window.scrollTo({
    //   left: 0, 
    //   top: position
    // });
    // setNavbarHeight(containerHeight);
    linksContainer.style.height = 0;
  }  
  
  // useEffect(() => {
    
  // }, [navbarHeight]);

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
                onClick={() => menuSelection("home")}
                // style={{color: 'white'}}
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
                // offset={ -navbarHeight }
                duration={ 100 }
                // onClick={() => menuSelection("about")}
                // style={{color: 'white'}}
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
                // onClick={() => setNavbarHeight(0)}
                // style={{color: 'white'}}
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
