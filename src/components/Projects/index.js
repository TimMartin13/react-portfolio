import React from 'react';
import './style.css';
import ProjectCard from '../ProjectCard/ProjectCard';
import projectList from '../../projects.json';

function Projects() {
  return (
    // projects
    <section id='projects' className='section'>
      <div className='title'>
        <h2>
          <span>my</span> projects
        </h2>
      </div>
      <div className='projects-container'>
        {projectList.map((project, i) => (
          <ProjectCard project={project} key={i} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
