import { useState } from 'react'
import '../styles/header.css'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="header">
      <nav className="navbar">
        <div className="container navbar-content">
          <div className="logo">
            <img src="https://scontent.fmnl7-1.fna.fbcdn.net/v/t51.82787-15/587634979_18033757961727024_4487459457433113784_n.jpg?stp=c0.158.1440.1440a_dst-jpg_s206x206_tt6&_nc_cat=104&ccb=1-7&_nc_sid=714c7a&_nc_eui2=AeFYrhi1BpccoYXhE7AAaJqe1_sh6T8ZrcvX-yHpPxmty0bMTYiKlklHY2eGvwOwRb5axZBjp-WGnQEZ_f4t9Fsv&_nc_ohc=h49zoTlIOYQQ7kNvwE5nyHQ&_nc_oc=AdlfiuCNDvj3LMQ0IZ9K6ONtOGdW2NGOopfMmk--V2wlTopv8sCsO0351gzycJH9qy0&_nc_zt=23&_nc_ht=scontent.fmnl7-1.fna&_nc_gid=ByIS_lwXx38ktF5Bs66ZiQ&oh=00_AfnGeSWcdgoqhNtiVuhdx0L3dB_0bFwV2ri-g-BUtp_5ag&oe=693F553B" alt="Rey Ermino" className="logo-image" />
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
