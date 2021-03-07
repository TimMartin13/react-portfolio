import React from "react";
import Bio from "../../components/Bio";
import Contact from "../../components/Contact";
import "./style.css";

function About() {
  return (
    <main class="container-fluid main-content">
      <article class="row center">
        <Bio />
        <Contact />
      </article>
    </main>
  )
}

export default About;
