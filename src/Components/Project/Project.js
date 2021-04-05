import React from 'react';
import {useSpring, animated} from 'react-spring'
import "./Project.css"
const Project = (props) => {


    const projectAnimation = useSpring({from:{marginTop: -100, opacity: 0}, to:{marginTop: 0,opacity: 1}, delay: props.index * 100,     config:{duration: 150}})



    function renderProjectType(){
        if(props.data.projectType === 'Front End'){
            return( <div className="project-card-type front-end"><i className="fas fa-desktop"></i>{props.data.projectType}</div>)
        }

        if(props.data.projectType === 'Full Stack'){
            return( <div className="project-card-type full-stack"><i className="fas fa-layer-group"></i>{props.data.projectType}</div>)
        }

        if(props.data.projectType === 'Data Science'){
            return( <div className="project-card-type data-science"><i className="fas fa-database"></i>{props.data.projectType}</div>)
        }


    }







    return ( <animated.div style={projectAnimation} className="project-container">
        <div className="project-card-image"></div>
        <div className="project-card-info-container">

           {renderProjectType()}
            <div className="project-card-title">{props.data.projectTitle}</div>
            <div className="project-card-description">{props.data.projectDescription}</div>
            <div className="project-card-technologies">{props.data.technologies.map((label) => <div>{label}</div>)}</div>
            <button className="view-project-button">View Project Details <i className="fas fa-long-arrow-alt-right"></i></button>
        </div>
     
    </animated.div> );
}
 
export default Project;