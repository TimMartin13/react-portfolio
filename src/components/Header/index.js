import React from "react";
import Navbar from '../Navbar';
import Banner from '../Banner';
// import BootStrapNavbar from '../TestArena/Navbar';

function Header() {
  return (
    // header
    <header id="home">
      {/* navbar */}
      <Navbar />
      {/* banner */}
      <Banner />
    </header>
  )
}

export default Header;