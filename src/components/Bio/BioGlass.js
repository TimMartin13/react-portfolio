import React from 'react';
import './BioGlassStyle.css';

function BioGlass() {
  return (
    // about
    <article
      className='about'
      data-aos='fade-left'
      data-aos-duration='1000'
      data-aos-delay='100'
      data-aos-once='false'
      data-aos-anchor-placement='center-bottom'
    >
      <div className='about-content'>
        {/* single item */}
        <div className='content active' id='bio'>
          <h3
            data-aos='fade-left'
            data-aos-duration='1000'
            data-aos-delay='400'
            data-aos-once='false'
            data-aos-anchor-placement='center-bottom'
          >
            My Story
          </h3>
          <p
            data-aos='fade-left'
            data-aos-duration='1000'
            data-aos-delay='600'
            data-aos-once='false'
            data-aos-anchor-placement='center-bottom'
          >
            As a software developer with over 18 years of experience, I have a
            passion for creating elegant and intuitive websites that delight
            users. I specialize in front-end development using modern web
            technologies such as React, Next.js, and various CSS libraries, as
            well as back-end development with Node.js, Express, and MongoDB. I
            have worked on a variety of projects, from large-scale e-commerce
            platforms to small business websites, and I always strive to exceed
            client expectations by delivering high-quality, pixel-perfect code
            on time and on budget. With a strong focus on usability and
            accessibility, I believe that great web design can not only look
            beautiful, but also be easy and enjoyable to use. Whether working
            independently or as part of a team, I am always excited to tackle
            new challenges and push the boundaries of what's possible on the
            web.
          </p>
        </div>
        {/* end of single item */}
      </div>
    </article>
  );
}

export default BioGlass;
