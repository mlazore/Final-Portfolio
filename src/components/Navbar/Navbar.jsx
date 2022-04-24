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
          <li>About Me</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>
      </div>
    </div>
  </div>
  )
}

export default Navbar