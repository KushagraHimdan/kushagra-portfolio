import { FileIcon, GithubIcon } from './icons.jsx'
import useReveal from '../hooks/useReveal.js'

export default function ProjectCard({ project }) {
  const ref = useReveal()

  return (
    <div className="card reveal" ref={ref}>
      <div className="card-tab">
        <FileIcon />
        <span>{project.file}</span>
      </div>
      <div className="card-body">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className="tags">
          {project.tags.map((tag) => (
            <span className="tag" key={tag}>
              {tag}
            </span>
          ))}
        </div>
        <div className="card-links">
          <a href={project.github} target="_blank" rel="noopener noreferrer">
            <GithubIcon />
            GitHub
          </a>
        </div>
      </div>
    </div>
  )
}
