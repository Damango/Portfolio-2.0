import React, { useState } from 'react';
import "./ProjectSelector.css"
const ProjectSelector = (props) => {



    const [buttonState, setButtonState] = useState({
        all: 'selected',
        frontEnd: 'off',
        fullStack: 'off',
        dataScience: 'off'

    })

    const [counter, setCounter] = useState(0)



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

    }



    return (<div className="project-selector-container">







        <div className="selector-buttons-container">




            <div className={"selector-button-" + buttonState.all} onClick={() => { changeProjects('all') }}>All</div>
            <div className={"selector-button-" + buttonState.frontEnd} onClick={() => { changeProjects('front-end') }}>Front End</div>
            <div className={"selector-button-" + buttonState.fullStack} onClick={() => { changeProjects('full-stack') }}>Full Stack</div>
            <div className={"selector-button-" + buttonState.dataScience} onClick={() => { changeProjects('data-science') }}>Data Science</div>





        </div>


        <div className="projects-list-wrapper">

            <div className="projects-list-container">

            </div>


        </div>







    </div>);
}

export default ProjectSelector;