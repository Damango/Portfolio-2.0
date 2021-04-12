import React, {useState, useRef, useEffect} from 'react';
import ProjectSelector from "../ProjectSelector/ProjectSelector"


import "./Portfolio.css"

const Portfolio = (props) => {


  


 




    return (<div className="portfolio-container">
        <div className="jumbotron-container">
     
            <div className="name-header"><span>JUSTIN KESSLER</span><div className="header-wipe"></div></div>
           
            <div className="sub-text-header">Welcome to my Development Portfolio</div>
            <div className="sub-text">Check out my Github, Projects, Articles, and previous work that I've done. Feel free to contact me at any time</div>
            <div className="jumbotron-buttons-container">
                <button className="jumbotron-button">View Projects</button>
                <button className="jumbotron-button">My Github</button>
                <button className="jumbotron-button">Contact Me</button>
            </div>

            <div className="spheres-container">

                    <span className="sphere" style={{top: Math.floor(Math.random() * 600), left:Math.floor(Math.random() * 500), animationName:'bounce1', animationDuration:(Math.random() * 3) + 's'}}> </span>
                    <span className="sphere" style={{top: Math.floor(Math.random() * 600), left:Math.floor(Math.random() * 500),animationName:'bounce2', animationDuration:(Math.random() * 3) + 's'}}> </span>
                    <span className="sphere"style={{top: Math.floor(Math.random() * 600), right:Math.floor(Math.random() * 500),animationName:'bounce3', animationDuration: (Math.random() * 3) + 's'}}> </span>
                    <span className="sphere"style={{top: Math.floor(Math.random() * 600), right:Math.floor(Math.random() * 500),animationName:'bounce4', animationDuration: (Math.random() * 3) + 's'}}> </span>
            </div>
            
        </div>


        <div className="portfolio-projects-container">
      
            <ProjectSelector />



        </div>
    </div>);
}

export default Portfolio;