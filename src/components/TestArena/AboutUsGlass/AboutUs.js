import React from "react";
import "./style.css";
import ContactGlass from '../../Contact/ContactGlass';

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
        <article className="about">
          {/* btn container */}
          {/* <div className="btn-container">
            <button className="tab-btn active" data-id="bio">bio</button>
          </div> */}
          <div className="about-content">
            {/* single item */}
            <div className="content active" id="bio">
              <h4>history</h4>
              <p>
                I'm baby wolf pickled schlitz try-hard normcore marfa man bun
                mumblecore vice pop-up XOXO lomo kombucha glossier bicycle
                rights. Umami kinfolk salvia jean shorts offal venmo. Knausgaard
                tilde try-hard, woke fixie banjo man bun. Small batch tumeric
                mustache tbh wayfarers 8-bit shaman chartreuse tacos. Viral
                direct trade hoodie ugh chambray, craft beer pork belly flannel
                tacos single-origin coffee art party migas plaid pop-up.
              </p>
            </div>
            {/* end of single item */}
          </div>
        </article>
      </div>

    </section>
  )
}

export default AboutUs;
