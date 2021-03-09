import React from "react";

import Note from "../../components/Note";
import projects from "../../projects.json";
import "./style.css";

function PostIt() {
  // new source for images
  return (
    <main className="container col-lg-12 postit_background">
      <ul className="notes-list">
      { 
        projects.map((project, i) => (
          <Note project={ project } key={ i }/>
        ))
      }
      </ul>
    </main>
  )
}

export default PostIt;
