import React from "react";
import "./style.css";
import Cell from "../Cell"
import projects from "../../projects.json";

function PortfolioCard() {
  return (
    <main className="container col-lg-10">
        <article className="row">
          <div className="col-lg-12 col-md-12 card-style bkgd-color">
            {/* Card Header */}
            <div className="col-md-12 text-color">
                {/* Title */}
                <h1 className="my-title">Portfolio</h1>

{/* Loop here */}
                <section className="row justify-content-between">
                  { 
                    projects.map((project, i) => (
                      <Cell project={ project } key={ i }/>
                    ))
                  }
                </section>

            </div>
          </div>            
        </article>
    </main>
  )
}

export default PortfolioCard;
