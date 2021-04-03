import React from "react";

// ********** set date ************
const date = new Date().getFullYear();

function Footer() {
  return (
    // footer
    <footer className="section">
      <p>
        copyright &copy; Tim Martin&nbsp;
        <span id="date">{ date }</span>
        . all rights reserved
      </p>
    </footer>
  )
}

export default Footer;
