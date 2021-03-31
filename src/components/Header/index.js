import React from "react";
import Navbar from '../Navbar';
import Banner from '../Banner';

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