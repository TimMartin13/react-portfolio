import React from "react";
import "./BioGlassStyle.css";

function BioGlass() {
  return (
    // about
    <article className="about">
      <div className="about-content">
        {/* single item */}
        <div className="content active" id="bio">
          <h3>My Story</h3>
          <p>
            Full stack web developer leveraging 15 years experience designing UX/UI for flat panel trainers within the airline training industry. Recently earned a certificate in full stack development from the University of Minnesota, with newly developed skills in JavaScript, CSS, React.js, and responsive web design. Known as an innovative problem solver passionate about developing apps, with a focus on mobile-first design and development. I seek a role as a web developer at a company where I can learn, grow, and continue to master the craft. 
          </p>
        </div>
        {/* end of single item */}
      </div>
    </article>
  )
}

export default BioGlass;
