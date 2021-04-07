import React from "react";
import "./style.css";
import ContactGlass from '../../Contact/ContactGlass';
import BioGlass from '../../Bio/BioGlass';

function AboutUs() {

// Need a function that changes the className of the buttons and the content to active


  return (
    // about
    <section id="about" className="section">
      <div className="title">
        <h2>about <span>me</span></h2>
      </div>
      <div className="about-center section-center">
        <ContactGlass />
        <BioGlass />
      </div>
    </section>
  )
}

export default AboutUs;
