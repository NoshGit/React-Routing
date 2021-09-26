import React from 'react'
import './About.css'

function About() {
    return (
        <div>
            <h1>About Application</h1>
            <div className="about-page-content">
                This Application is a POC for handling Varius Scenarios of React Routing.

                What is Handled?

                <ol>
                    <li>Basic React Routing with React Router DOM</li>
                    <li>Lazy Loading</li>
                    <li>Active Link Display Using Nav Link</li>
                    <li>Displaying Dynamic Component Based on Route Params</li>
                    <li>Retaining Page state based on Route query Params</li>
                </ol>
            </div>
        </div>
    )
}

export default About
