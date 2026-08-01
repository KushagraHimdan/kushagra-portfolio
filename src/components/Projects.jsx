import { projects } from '../data.js'
import ProjectCard from './ProjectCard.jsx'
import { LayersIcon } from './icons.jsx'
import useReveal from '../hooks/useReveal.js'

export default function Projects() {
  const headRef = useReveal()
  const noteRef = useReveal()

  return (
    <section id="projects">
      <div className="wrap">
        <div className="section-head reveal" ref={headRef}>
          <div className="kicker">02 — projects</div>
          <h2 className="section-title">Things I've built</h2>
          <p className="section-sub">
            A mix of AI-powered tools and full-stack applications, built end to end.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <ProjectCard project={project} key={project.title} />
          ))}
        </div>

        <div className="side-note reveal" ref={noteRef}>
          <LayersIcon />
          <div>
            Alongside these, I've worked on core backend projects — including building authentication
            and authorization systems from scratch with JWT and role-based access control.
          </div>
        </div>
      </div>
    </section>
  )
}
