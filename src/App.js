import React, { useState, useEffect, useLayoutEffect } from 'react';
import './App.css';
import { HashRouter as Router, Route } from "react-router-dom";
// import Footer from "./components/Footer";
// import Wrapper from "./components/Wrapper";

// import About from "./pages/About";
import Album from "./pages/Album";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
// import PostIt from "./pages/PostIt";
import Aos from 'aos';
import 'aos/dist/aos.css';

function App() {

  useEffect(() => {
    Aos.init({});
  }, []);
  
  return (
    <Router>
      <div>
        {/* <Navbar /> */}
        {/* <Wrapper> */}
          <Route exact path="/" component={ Home } />
          {/* <Route exact path="/about" component={ About } /> */}
          <Route exact path="/album" component={ Album } />
          <Route exact path="/portfolio" component={ Portfolio } />
          {/* <Route exact path="/portfolio/postit" component={ PostIt } /> */}
        {/* </Wrapper> */}
        {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App;
