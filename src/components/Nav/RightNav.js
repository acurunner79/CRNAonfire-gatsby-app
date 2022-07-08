import React from 'react' 
import { Link } from 'gatsby'
import '../../styles/rightNav.css'


const RightNav = () => {
    return(
        <div id="rightnav-main">
            <ul>
                <Link to="/" className="links" activeClassName="active" iscurrent="true">
                    <li className="rightnav-item">
                    Home
                    </li>
                </Link>
                {/* <Link to="/contact" className="links" activeClassName="active" iscurrent="true">
                    <li className="rightnav-item">
                    Contact
                    </li>
                </Link> */}
            </ul>
        </div>
    )
}

export default RightNav