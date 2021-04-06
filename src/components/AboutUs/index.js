import React from "react";
import "./style.css";
import profilePicture from '../../images/ProfilePicture.jpg';

function AboutUs() {

// Need a function that changes the className of the buttons and the content to active


  return (
    // about
    <section id="about" className="section">
      <div className="title">
        <h2>about <span>me</span></h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum,
          aperiam!
        </p>
      </div>

      <div className="about-center section-center">
        <article className="about-img">
          <img src={ profilePicture } alt="Tim Martin"/>
        </article>
        <article className="about">
          {/* btn container */}
          <div className="btn-container">
            <button className="tab-btn active" data-id="bio">bio</button>
            {/* <button className="tab-btn" data-id="vision">vision</button> */}
            <button className="tab-btn" data-id="contact">contact</button>
          </div>
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
            {/* single item */}
            <div className="content" id="contact">
              <h4>vision</h4>
              <p>
                Man bun PBR&B keytar copper mug prism, hell of helvetica. Synth
                crucifix offal deep v hella biodiesel. Church-key listicle
                polaroid put a bird on it chillwave palo santo enamel pin,
                tattooed meggings franzen la croix cray. Retro yr aesthetic four
                loko tbh helvetica air plant, neutra palo santo tofu mumblecore.
                Hoodie bushwick pour-over jean shorts chartreuse shabby chic.
                Roof party hammock master cleanse pop-up truffaut, bicycle
                rights skateboard affogato readymade sustainable deep v
                live-edge schlitz narwhal.
              </p>
              <ul>
                <li>list item</li>
                <li>list item</li>
                <li>list item</li>
              </ul>
            </div>
            {/* end of single item */}
          </div>
        </article>
      </div>

    </section>
  )
}

export default AboutUs;
