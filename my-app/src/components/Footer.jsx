import {Link} from 'react-router-dom'
import '../styles/Footer.css'

const Footer = () => {

    return (
        <div className="footer">
            <div className="footer-content">
                <div className="footer-links">
                    <a href="https://docs.google.com/document/d/15LKgtQ610tsfMMkEhffaGD85tgY9wmhp7AV1ebYVAJc/edit?usp=sharing" target="_blank" rel="noreferrer">Resume</a>
                    <a href="https://github.com/sdelitta" target="_blank" rel="noreferrer">
                        <div className="github"></div>
                    </a>
                    <a href="https://www.linkedin.com/in/steven-delitta-8a63512b/" target="_blank" rel="noreferrer">
                        <div className="linkedin"></div>
                    </a>
                    <a href="mailto:sdelitta@gmail.com">
                        <div className="email">Email</div>
                    </a>
                </div> 

                <div className="footer-bottom"></div>
            </div>
        </div>
    )
}

export default Footer