import { useState } from 'react'
import { FiArrowUpRight, FiDownload, FiMenu, FiX } from 'react-icons/fi'
import { navLinks, profile } from '../data/profile'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return <header className="navbar">
    <div className="container nav-inner">
      <a className="logo" href="#home" onClick={() => setOpen(false)} aria-label="Jagdish Suthar, home">
        <span>JS</span><span className="logo-name">JAGDISH SUTHAR<small>FULL STACK DEVELOPER</small></span>
      </a>
      <nav className={open ? 'nav-links open' : 'nav-links'} aria-label="Main navigation">
        {navLinks.map(item => <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setOpen(false)}>{item}</a>)}
        <div className="mobile-actions"><a className="btn small" href="#contact" onClick={() => setOpen(false)}>Let's talk <FiArrowUpRight /></a></div>
      </nav>
      <div className="nav-actions">
        <a className="resume-link" href={profile.resume} download><FiDownload /> Resume</a>
        <a className="btn small nav-cta" href="#contact">Let's talk <FiArrowUpRight /></a>
        <button className="menu-btn" onClick={() => setOpen(!open)} aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open}>{open ? <FiX /> : <FiMenu />}</button>
      </div>
    </div>
  </header>
}
