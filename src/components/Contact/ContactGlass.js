import React from "react";
import "./ContactGlassStyle.css";
import profilePicture from '../../../src/images/ProfilePicture.jpg';
import resumePDF from '../../../src/images/TimMartinResume.pdf';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import IconButton from '@material-ui/core/IconButton';
import PictureAsPdfIcon from '@material-ui/icons/PictureAsPdf';
import Tooltip from '@material-ui/core/Tooltip';

function ContactGlass() {
  return (
    <article className="about-img"
      data-aos='fade-right'
      data-aos-duration='1000'
      data-aos-delay='100'
      data-aos-once='true'
      data-aos-anchor-placement='center-bottom' >
      <img className="profile" src={ profilePicture } alt="Tim Martin"
        data-aos='fade-right'
        data-aos-duration='1000'
        data-aos-delay='100'
        data-aos-once='true'
        data-aos-anchor-placement='center-bottom' 
      />
      <div className="nameTitle">
        <h2
          data-aos='fade-right'
          data-aos-duration='1000'
          data-aos-delay='300'
          data-aos-once='true'
          data-aos-anchor-placement='center-bottom' 
        >Tim Martin</h2>
        <h5
          data-aos='fade-right'
          data-aos-duration='1000'
          data-aos-delay='400'
          data-aos-once='true'
          data-aos-anchor-placement='center-bottom' 
        >Full Stack Developer</h5>
        <div className="iconRow">
          <Tooltip title="TimMartin13" arrow>
            <IconButton aria-label="github" href="https://github.com/TimMartin13" target="_blank"  
              data-aos='fade-up'
              data-aos-duration='800'
              data-aos-delay='500'
              data-aos-once='true'
              data-aos-anchor-placement='center-bottom' 
            >
              <GitHubIcon style={{ color: "purple" }} />
            </IconButton>
          </Tooltip>
          <Tooltip title="tim-martin13" arrow>
            <IconButton aria-label="linkedIn" href="https://www.linkedin.com/in/tim-martin13/" target="_blank"
              data-aos='fade-up'
              data-aos-duration='800'
              data-aos-delay='700'
              data-aos-once='true'
              data-aos-anchor-placement='center-bottom' 
            >
              <LinkedInIcon style={{ color: "blue" }} />
            </IconButton>
          </Tooltip>
          <Tooltip title="612-799-1450" arrow>
            <IconButton aria-label="phone number"
              data-aos='fade-up'
              data-aos-duration='800'
              data-aos-delay='900'
              data-aos-once='true'
              data-aos-anchor-placement='center-bottom' 
            >
              <PhoneAndroidIcon style={{ color: "orange" }} />
            </IconButton>
          </Tooltip>
          <Tooltip title="timmartin13@gmail.com" arrow>
            <IconButton aria-label="email"
              data-aos='fade-up'
              data-aos-duration='800'
              data-aos-delay='1100'
              data-aos-once='true'
              data-aos-anchor-placement='center-bottom' 
            >
              <MailOutlineIcon style={{ color: "green" }} />
            </IconButton>
          </Tooltip>
          <Tooltip title="Resume" arrow>
            <IconButton aria-label="resume" href={ resumePDF } target="_blank"
              data-aos='fade-up'
              data-aos-duration='800'
              data-aos-delay='1300'
              data-aos-once='true'
              data-aos-anchor-placement='center-bottom' 
            >
              <PictureAsPdfIcon style={{ color: "red" }} />
            </IconButton>
          </Tooltip>
        </div>
      </div>
    </article>
  )
}

export default ContactGlass;
