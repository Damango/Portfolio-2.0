import React, { useState } from 'react';
import "./ProjectSelector.css"
import Project from "../Project/Project"

import ProjectData from "../Data/data"
import { render } from '@testing-library/react';
const ProjectSelector = (props) => {



    const [buttonState, setButtonState] = useState({
        all: 'selected',
        frontEnd: 'off',
        fullStack: 'off',
        dataScience: 'off'

    })


    const [projects, setProjects] = useState(ProjectData)

    const [counter, setCounter] = useState(0)



    function renderProjects(){
        if(buttonState.all === 'selected'){
            setProjects([])
            setTimeout(() =>{setProjects(ProjectData)}, [])
        }
        if(buttonState.frontEnd === 'selected'){
            let temp = ProjectData;
            let newData = [];
            let i;
            for(i = 0; i<ProjectData.length; i++){
                if(ProjectData[i].projectType ==='Front End'){
                    newData.push(ProjectData[i])
                }
            }

            setProjects([])
            setTimeout(() =>{setProjects(newData)}, [])
           
        }


        if(buttonState.fullStack === 'selected'){
            let temp = ProjectData;
            let newData = [];
            let i;
            for(i = 0; i<ProjectData.length; i++){
                if(ProjectData[i].projectType ==='Full Stack'){
                    newData.push(ProjectData[i])
                }
            }

            setProjects([])
            setTimeout(() =>{setProjects(newData)}, [])
           
        }

        if(buttonState.dataScience === 'selected'){
            let temp = ProjectData;
            let newData = [];
            let i;
            for(i = 0; i<ProjectData.length; i++){
                if(ProjectData[i].projectType ==='Data Science'){
                    newData.push(ProjectData[i])
                }
            }

            setProjects([])

            setTimeout(() =>{setProjects(newData)}, [])
            
           
        }


       
    }


    function changeProjects(view) {

        if (view === 'all') {
            let temp = buttonState;
            temp.all = 'selected'
            temp.frontEnd = 'off'
            temp.fullStack = 'off'
            temp.dataScience = 'off'

            setButtonState(temp)
        }

        else if (view === 'front-end') {
            let temp = buttonState;
            temp.all = 'off'
            temp.frontEnd = 'selected'
            temp.fullStack = 'off'
            temp.dataScience = 'off'

            setButtonState(temp)

        }

        else if (view === 'full-stack') {
            let temp = buttonState;
            temp.all = 'off'
            temp.frontEnd = 'off'
            temp.fullStack = 'selected'
            temp.dataScience = 'off'

            setButtonState(temp)

        }

        else if (view === 'data-science') {
            let temp = buttonState;
            temp.all = 'off'
            temp.frontEnd = 'off'
            temp.fullStack = 'off'
            temp.dataScience = 'selected'

            setButtonState(temp)

        }


        setCounter(counter + 1)
        console.log(projects)
        renderProjects()

    }



    return (<div className="project-selector-container">

        <div className="selector-buttons-container">

            <div className={"selector-button-" + buttonState.all} onClick={() => { changeProjects('all') }}>
                <div className={"select-line-" + buttonState.all}></div>
                All
            </div>
            <div className={"selector-button-" + buttonState.frontEnd} onClick={() => { changeProjects('front-end') }}>
                
            <div className={"select-line-" + buttonState.frontEnd}></div>
                Front End</div>
            <div className={"selector-button-" + buttonState.fullStack} onClick={() => { changeProjects('full-stack') }}>
                
            <div className={"select-line-" + buttonState.fullStack}></div>
            Full Stack</div>
            <div className={"selector-button-" + buttonState.dataScience} onClick={() => { changeProjects('data-science') }}>
            
            <div className={"select-line-" + buttonState.dataScience}></div>
                Data Science</div>
        </div>


        <div className="projects-list-wrapper">

            <div className="projects-list-container">

                {projects.map((project, index) => <Project data={project} index={index}/>)}

            </div>


        </div>







    </div>);
}

export default ProjectSelector;