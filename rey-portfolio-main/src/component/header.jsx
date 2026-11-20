import { useState } from 'react'
import '../styles/header.css'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="header">
      <nav className="navbar">
        <div className="container navbar-content">
          <div className="logo">
            <img src="/587634979_18033757961727024_4487459457433113784_n.jpg.jpg" alt="Ken Ermino" className="logo-image" />
            <span className="logo-text">Ken Ermino</span>
          </div>
          
          <button 
            className="menu-toggle"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </nav>
    </header>
  )
}
