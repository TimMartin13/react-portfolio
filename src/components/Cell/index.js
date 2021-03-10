import React from "react";
import "./style.css";
import directory from "../../images/employee-directory.jpg";
import movie from "../../images/movieIQ_home.jpg";
import horse from "../../images/loginPage.png";
import budget from "../../images/tableGraph.jpg";
import planner from "../../images/day_planner.jpg";
import fitness from "../../images/dashboard.jpg";
import weather from "../../images/weather_dashboard.jpg";
import notes from "../../images/notesPage.jpg";
import burger from "../../images/lists.jpg";
import password from "../../images/password_generator.jpg";

let imageArray = [directory, movie, horse, fitness, planner, budget, weather, notes, burger, password];

function Cell(props) {
  return (
    <div className="col-lg-6 col-md-12">
        {/* Row 1, Column 1 */}
        <h2 className="project-title">{ props.project.title }</h2>
        <h6>Deployed at: <a className="cell-a" href={ props.project.deployed } target="_blank" rel="noreferrer">{ props.project.deployed }</a></h6>
        <h6>Repository: <a className="cell-a" href={ props.project.repository } target="_blank" rel="noreferrer">{ props.project.repository }</a></h6>
        <img className="cell-portfolio" src={ imageArray[props.project.id - 1] } alt={ props.project.title } />
    </div>
  )
}

export default Cell;