import React from 'react'
import './Navbar.css'
import Resume from "../../Assets/Resume.pdf"

const Navbar = () => {
  return (
    <div className="n-wrapper">
    <div className="n-left">
      <div className="n-name">
      <span>Portfolio</span>
      </div>
    </div>
    <div className="n-right">
      <div className="n-list">
        <ul style={{listStyleType:'none'}}>
         <li><link to="/"></link>About</li>
         <li><link to="/Skills"></link>Skills</li>
         <li><link to="/Contact"></link>Contact</li>
         <li><a href={Resume}><li>Resume</li></a></li>
        </ul>
      </div>
    </div>
  </div>
  )
}

export default Navbar