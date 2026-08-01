import { profile } from '../data.js'

export default function Header() {
  return (
    <header>
      <nav className="wrap">
        <div className="logo">
          <span className="dot">{'</>'}</span>kushagra
          <span style={{ color: 'var(--text-dim)' }}>.dev</span>
        </div>
        <div className="navlinks">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
          <a href={profile.resume} className="btn btn-primary" download>
            Resume
          </a>
        </div>
      </nav>
    </header>
  )
}
