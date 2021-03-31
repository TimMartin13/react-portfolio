import React from "react";

// ********** set date ************
const date = document.getElementById('date');
date.innerHTML = new Date().getFullYear();

function Footer() {
  return (
    // footer
    <footer className="section">
      <p>
        copyright &copy; Tim Martin &nbsp;
        <span id="date"></span>
        . all rights reserved
      </p>
    </footer>
  )
}

export default Footer;
