import { profile } from '../data.js'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer>
      <div className="wrap footer-row">
        <div>© {year} {profile.name}. Built with curiosity.</div>
        <div className="social-row">
          <a href={profile.github} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href={`mailto:${profile.email}`}>Email</a>
        </div>
      </div>
    </footer>
  )
}
