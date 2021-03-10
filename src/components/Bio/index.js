import React from "react";
import "./style.css";
import bio_pic from "../../images/ProfilePicture.jpg";

function Bio() {
  return (
    <div className="col-md-7 card-style card-background">
      {/* Card Header */}
      <div className="col-md-12 ">
          {/* Title */}
          <h1 className="my-title text-color">About Me</h1>
          <section className="row">
            <div className="col-md-12 text-color">
              {/* Picture */}
              <img className="about-me" src={ bio_pic } alt="Portfolio" />
              {/* Information */}
              <p>Hi, my name is Tim Martin.  I grew up in Eden Prairie, MN.  I have a Bachelor of Science degree in Applied Computer Science from St. Cloud State University. For the last 15 years, I have risen through the ranks in the airline industry as a Software Engineer specializing in C++.  During the pandemic of 2020, I was laid off and decided to add web development to my repertoire by taking a Full Stack developer bootcamp through the University of Minnesota.  I now enjoy coding in HTML, CSS, and JavaScript in addition to C++ and Python.
              </p>
            </div> 
          </section>
      </div>  
    </div>
  )
}

export default Bio;
