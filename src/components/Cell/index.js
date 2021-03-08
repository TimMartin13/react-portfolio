import React from "react";
import "./style.css";


function Cell(props) {
  return (
    <div className="col-lg-6 col-md-12">
        {/* Row 1, Column 1 */}
        <h2 className="project-title">{ props.project.title }</h2>
        <h6>Deployed at: <a className="card-a" href={ props.project.deployed } target="_blank" rel="noreferrer">{ props.project.deployed }</a></h6>
        <h6>Repository: <a className="card-a" href={ props.project.repository } target="_blank" rel="noreferrer">{ props.project.repository }</a></h6>
        <img className="portfolio" src={ props.project.image } alt={ props.project.title } />
    </div>
  )
}

export default Cell;