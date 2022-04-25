import React from 'react'
import './Navbar.css'

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
         <a href='Aboutme' ><li>About Me</li></a>
         <a href='Projects'><li>Projects</li></a>
         <a href='Contact.jsx'><li>Contact</li></a>
         <a href='Contact.jsx'><li>Resume</li></a>
        </ul>
      </div>
    </div>
  </div>
  )
}

export default Navbar