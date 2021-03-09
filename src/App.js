import React from "react";
import './App.css';

import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";

import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import PostIt from "./pages/PostIt";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Wrapper>
          <Route exact path="/" component={ About } />
          <Route exact path="/portfolio" component={ Portfolio } />
          {/* <Route exact path="/portfolio/postit" component={ PostIt } /> */}
        </Wrapper>
        {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App;
