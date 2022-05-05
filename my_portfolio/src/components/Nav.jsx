import React from 'react'
import {Link} from 'react-router-dom'

const Nav = (props) => {

    return (
        <nav className="navbar">
            <div id="links">
                <Link to="/">Home</Link>
                <Link to="projects">Projects</Link>
                <Link to="resume">Resume</Link>
                <Link to="contact">Contact</Link>
            </div>
        </nav>
    )
}







export default Nav;