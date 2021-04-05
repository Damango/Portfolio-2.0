import React from 'react';
import ProjectSelector from "../ProjectSelector/ProjectSelector"
import "./Portfolio.css"

const Portfolio = (props) => {
    return (<div className="portfolio-container">
        <div className="jumbotron-container">
            <div className="name-header">JUSTIN KESSLER</div>
            <div className="jumbotron-buttons-container">
                <button className="jumbotron-button">View Projects</button>
                <button className="jumbotron-button">My Github</button>
                <button className="jumbotron-button">Contact Me</button>
            </div>
        </div>
        <div className="portfolio-projects-container">
            <ProjectSelector />



        </div>
    </div>);
}

export default Portfolio;