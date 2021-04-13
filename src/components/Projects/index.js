import React from "react";
import './style.css'
import ProjectCard from "../ProjectCard/ProjectCard";
import projectList from "../../projects.json";

function Projects() {
  return (
    // projects
    <section id="projects" className="section">
      <div className="title">
        <h2><span>my</span> projects</h2>
      </div>
      <div className="projects-container">
        { 
          projectList.map((project, i) => (
            <ProjectCard project={ project } key={ i }/>
          ))
        }
        {/* <ProjectCard /> */}
        {/* <div className="carousel">
          <input type="radio" name="slides" defaultChecked="checked" id="slide-1" />
          <input type="radio" name="slides" id="slide-2" />
          <input type="radio" name="slides" id="slide-3" />
          <input type="radio" name="slides" id="slide-4" />
          <input type="radio" name="slides" id="slide-5" />
          <input type="radio" name="slides" id="slide-6" />
          <ul className="carousel__slides">
            <li className="carousel__slide">
              <figure>
                <div>
                  <img src={ featuredEdge } alt={ featuredEdge } />
                </div>
                <figcaption>
                  <h4>{ projectList[0].title }</h4>
                  { projectList[0].description }
                  <span className="credit">Photo: Tim Marshall</span>
                </figcaption>
              </figure>
            </li>
            <li className="carousel__slide">
              <figure>
                <div>
                  <img src={ horse } alt={ horse } />
                </div>
                <figcaption>
                  <h4>{ projectList[1].title }</h4>
                  { projectList[1].description }
                  <span className="credit">Photo: Christian Joudrey</span>                            
                </figcaption>
              </figure>
            </li>
            <li className="carousel__slide">
              <figure>
                <div>
                  <img src={ directory } alt={ directory } />
                </div>
                <figcaption>
                  <h4>{ projectList[2].title }</h4>
                  { projectList[2].description }
                  <span className="credit">Photo: Steve Carter</span>                            
                </figcaption>
              </figure>
            </li>
            <li className="carousel__slide">
              <figure>
                <div>
                  <img src={ movie } alt={ movie } />
                </div>
                <figcaption>
                  <h4>{ projectList[3].title }</h4>
                  { projectList[3].description }
                  <span className="credit">Photo: Aleksandra Boguslawska</span>                            
                </figcaption>
              </figure>
            </li>
            <li className="carousel__slide">
              <figure>
                <div>
                  <img src={ fitness } alt={ fitness } />
                </div>
                <figcaption>
                  <h4>{ projectList[4].title }</h4>
                  { projectList[4].description }
                  <span className="credit">Photo: Rosan Harmens</span>                            
                </figcaption>
              </figure>
            </li>
            <li className="carousel__slide">
              <figure>
                <div>
                  <img src={ planner } alt={ planner } />
                </div>
                <figcaption>
                  <h4>{ projectList[5].title }</h4>
                  { projectList[5].description }
                  <span className="credit">Photo: Annie Spratt</span>                            
                </figcaption>
              </figure>
            </li>
          </ul>    
          <ul className="carousel__thumbnails">
            <li>
              <label htmlFor="slide-1"><img src={ featuredEdge } alt={ featuredEdge } /></label>
            </li>
            <li>
              <label htmlFor="slide-2"><img src={ horse } alt={ horse } /></label>
            </li>
            <li>
              <label htmlFor="slide-3"><img src={ directory } alt={ directory } /></label>
            </li>
            <li>
              <label htmlFor="slide-4"><img src={ movie } alt={ movie } /></label>
            </li>
            <li>
              <label htmlFor="slide-5"><img src={ fitness } alt={ fitness } /></label>
            </li>
            <li>
              <label htmlFor="slide-6"><img src={ planner } alt={ planner } /></label>
            </li>
          </ul>
        </div> */}
      </div>
    </section>
  )
}

export default Projects;
