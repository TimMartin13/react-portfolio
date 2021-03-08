import React from "react";
import PortfolioCard from "../../components/PortfolioCard";
import "./style.css";

function Portfolio() {
  return (
    <main className="container-fluid main-content">
      <article className="row center">
        <PortfolioCard />
      </article>
    </main>
  )
}

export default Portfolio;
