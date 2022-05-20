import React from 'react'
import '../styles/Landing.css'
import Languages from './Languages'
import Projects from './Projects'

const Landing = () => {
    
    return (
        <main className="landing-container">
            <div className="about">
                <div className="about-title">
                    <h1>About Me</h1>
                </div>
                <div className="about-content">
                    <h4>With a versatile background stemming from a 20 year career having worked in an array of different professions, as well as creating and running my own videography, photography, and snack-manufacturing businesses, and several decades of collaborating with fellow musicians, I have proven to be a dynamic and adaptable team member whose main focus is efficient problem solving through strong communication with my colleagues.</h4>
                    <div className="headshot"></div>
                    <h4>The General Assembly <i>Software Engineering Immersive</i> bootcamp has taught me the fundamentals of fullstack application development and laid a foundation enabling me to be a maluable junior developer at most innovative enterprises.</h4>
                </div>
            </div>
            <Projects />
            <Languages />
        </main>
    )
}



export default Landing