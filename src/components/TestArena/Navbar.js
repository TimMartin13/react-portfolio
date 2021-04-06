import React from 'react';
import { Navbar, Nav } from 'react-bootstrap'
import { Link } from 'react-scroll';

function BootStrapNavbar() {
    return (
      <Navbar collapseOnSelect bg="transparent" expand="sm">
        <Navbar.Brand href="#home"></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Link 
              activeClass="active"
              to="home"
              spy={ true }
              smooth={ true }
              // offset={ -navbarHeight }
              duration={ 100 }
              // onClick={() => menuSelection("about")}
              // style={{color: 'white'}}
            >
              Home
            </ Link>
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
            <Link 
              activeClass="active"
              to="projects"
              spy={ true }
              smooth={ true }
              // offset={ -navbarHeight }
              duration={ 100 }
              // onClick={() => menuSelection("about")}
              // style={{color: 'white'}}
            >
              Projects
            </ Link>
            {/* <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link> */}
            {/* <Nav.Link href="#projects">Projects</Nav.Link> */}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
}

export default BootStrapNavbar;