import React from "react";
import Bio from "../../components/Bio";
import Contact from "../../components/Contact";
import "./style.css";

function About() {
  return (
    <main className="container-fluid main-content">
      <article className="row center">
        <Bio />
        <Contact />
      </article>
    </main>
  )
}

export default About;
