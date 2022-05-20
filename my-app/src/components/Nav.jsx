import {Link} from 'react-router-dom'
import '../styles/Nav.css'

const Nav = () => {

    return (
        <header>
            <div className="title" alt='logo'>
                <h1>Steven DeLitta</h1>
                <h5>NYC Full Stack Software Engineer</h5>
            </div>
          {/* <nav>
                <div className="rightside">
                <Link className="rightsideLink" to="/states">States</Link>
                <Link className="rightsideLink" to="/shelters">Shelters</Link>
                <Link className="rightsideLink" to="/animals">Animals</Link> 
                <Link className="rightsideLink" to="/about">About</Link>
                </div> 
            </nav> */}
        </header>
    )
}

export default Nav