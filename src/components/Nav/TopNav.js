import React from 'react'
import { Link } from "gatsby"
import '../../styles/topnav.css'

const TopNav = () => {
  return (
    <div id="nav-container">
         <nav id="navbar">
           {/* <div id="image-container">
           </div> */}
            <ul id="nav-links">
               <Link to="/" className="topnav-link" activeClassName="active" iscurrent="true">
                  <li>Home</li>
               </Link>
               
               {/* <Link to="/contact" className="topnav-link" activeClassName="active" iscurrent="true">
                  <li>Contact</li> 
               </Link>   */}
            </ul>     
         </nav>
      </div>
  )
}

export default TopNav