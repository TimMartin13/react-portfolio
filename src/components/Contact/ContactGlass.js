import React from "react";
import "./ContactGlassStyle.css";
import profilePicture from '../../../src/images/ProfilePicture.jpg';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';

function ContactGlass() {
  return (
    <article className="about-img">
      <img className="profile" src={ profilePicture } alt="Tim Martin"/>
      <div className="nameTitle">
        <h2>Tim Martin</h2>
        <h5>Full Stack Developer</h5>
        <div className="iconRow">
          <Tooltip title="TimMartin13" arrow>
            <IconButton aria-label="github" href="https://github.com/TimMartin13" target="_blank">
              <GitHubIcon style={{ color: "purple" }} />
            </IconButton>
          </Tooltip>
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
  )
}

export default ContactGlass;
