import React from "react";
import { Link } from 'react-scroll';

function Banner() {
  return (
    <div className="banner">
      <div className="container">
        <h1>The Martin Project</h1>
        <p>
          {/* <em>Throw me to the wolves and I will return leading the pack - Seneca</em> */}
          <em>You have to color outside the lines once in a while if you want to make your life a masterpiece - Albert Einstein</em>
        </p>
        <Link 
          activeClass="active"
          to="about"
          spy={ true }
          smooth={ true }
          duration={ 100 }
        >
          <span className="scroll-link btn btn-white">About me</span>
        </ Link>
      </div>
    </div>
  )
}

export default Banner;
