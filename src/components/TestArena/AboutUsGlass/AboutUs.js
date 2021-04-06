import React from "react";
import "./style.css";
import profilePicture from '../../../images/ProfilePicture.jpg';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';

function AboutUs() {

// Need a function that changes the className of the buttons and the content to active


  return (
    // about
    <section id="about" className="section">
      <div className="title">
        <h2>about <span>me</span></h2>
        {/* <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum,
          aperiam!
        </p> */}
      </div>

      <div className="about-center section-center">
        <article className="about-img">
          <img className="profile" src={ profilePicture } alt="Tim Martin"/>
          <div className="nameTitle">
            <h2>Tim Martin</h2>
            <h5>Full Stack Developer</h5>
            <div className="iconRow">
              <IconButton aria-label="github" href="https://github.com/TimMartin13" target="_blank">
                <GitHubIcon style={{ color: "purple" }} />
              </IconButton>
              <IconButton aria-label="linkedIn" href="https://www.linkedin.com/in/tim-martin13/" target="_blank">
                <LinkedInIcon style={{ color: "blue" }} />
              </IconButton>
              <Tooltip title="612-799-1450" arrow>
                <IconButton aria-label="phone number">
                  <PhoneAndroidIcon style={{ color: "green" }} />
                </IconButton>
              </Tooltip>
              <Tooltip title="timmartin13@gmail.com" arrow>
                <IconButton aria-label="email">
                  <MailOutlineIcon style={{ color: "red" }} />
                </IconButton>
              </Tooltip>
              
            </div>
          </div>
        </article>
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
