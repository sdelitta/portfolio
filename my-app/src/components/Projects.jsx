import {Link} from 'react-router-dom'
import React from 'react'
import '../styles/Projects.css'

function Projects() {
  return (
    <div className="projects-container">
        <div className="projects-title">
            <h1>Projects</h1>
        </div>
        <div className="projects-content">
            <a href="https://petpurrsuit.netlify.app/" target="_blank" rel="noreferrer">
                <div className="projects1-img"></div>
            </a>
            <div className="projects1-details">
                <div className="project-name">
                    <a href="https://petpurrsuit.netlify.app/" target="_blank" rel="noreferrer">
                        <h2>PetPurrsuit</h2>
                    </a>
                </div>
                <h6>An application designed for animal rescue shelters to easily update their database of adoptable pets and allow users to browse and add their favorite animals to their profile</h6>
                <div className="tech">
                <a href="https://github.com/sdelitta/PetPurrsuit_Frontend" target="_blank" rel="noreferrer">GitHub</a>
                    <h6>Technologies used: React, Python, Django</h6>
                </div>
            </div>
        </div>
            <div className="projects-content">
                <a href="https://ga-222-codr.netlify.app/" target="_blank" rel="noreferrer">
                    <div className="projects2-img"></div>
                </a>
                <div className="projects2-details">
                    <div className="project-name">
                        <a href="https://ga-222-codr.netlify.app/" target="_blank" rel="noreferrer">
                            <h2>Codr.</h2>
                        </a>
                    </div>
                    <h6>This mock social media site is for tech professionals looking for a place to share their projects and tag collaborators in an effort to create a global catalog of developer portfolios </h6>
                    <div className="tech">
                    <a href="https://github.com/sdelitta/Frontend" target="_blank" rel="noreferrer">GitHub</a>
                        <h6>Technologies used: React, PostgreSQL, Express, Node.js</h6>
                    </div>
                </div>
            </div>
        <div className="projects-content">
            <a href="https://discover-discography.netlify.app/" target="_blank" rel="noreferrer">
                <div className="projects3-img"></div>
            </a>
            <div className="projects3-details">
                <div className="project-name">
                    <a href="https://discover-discography.netlify.app/" target="_blank" rel="noreferrer">
                        <h2>Discover Discography</h2>
                    </a>
                </div>
                <h6>A database dedicated to compiling music artists and their respective album catalogs.</h6>
                <div className="tech">
                    <a href="https://github.com/sdelitta/Discover_Dicography" target="_blank" rel="noreferrer">GitHub</a>
                    <h6>Technologies used: React, MongoDB, Express.js, Node.js</h6>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Projects