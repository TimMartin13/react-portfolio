import React from "react";
import Header from '../../components/Header';
// import AboutUs from '../../components/AboutUs';
import AboutUs from '../../components/TestArena/AboutUsGlass/AboutUs';
import Projects from '../../components/Projects';
import Footer from '../../components/Footer';

import "./style.css";

function Home() {
  return (
    <>
      <Header />
      <AboutUs />
      <Projects />
      <Footer />
    </>
  )
}

export default Home;
