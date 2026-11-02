import { FiArrowUpRight, FiCheck, FiGithub } from 'react-icons/fi'

export default function ProjectCard({ project, index }) {
  return <article className="project-card">
    <div className={`project-art ${project.theme}`}>
      {project.imageUrl ? <img className="project-home-image" src={project.imageUrl} alt={`${project.title} website design preview`} /> : <div className="project-art-placeholder"><span>{project.title.slice(0, 2).toUpperCase()}</span></div>}
      <span className="project-no">0{index + 1}</span>
    </div>
    <div className="project-body">
      <div className="project-heading"><span className="project-type">{project.type}</span><span className="project-year">2025 — 26</span></div>
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <div className="feature-list">{project.features.slice(0, 4).map(feature => <span key={feature}><FiCheck />{feature}</span>)}</div>
      <div className="project-footer">
        <div className="tech-list">{project.technologies.slice(0, 5).map(technology => <span key={technology}>{technology}</span>)}</div>
        <div className="project-actions">
          {project.liveUrl && <a className="project-link" href={project.liveUrl} target="_blank" rel="noreferrer">Visit live site <FiArrowUpRight /></a>}
          {project.githubUrl && <a className="project-link" href={project.githubUrl}><FiGithub /> Source code</a>}
          {!project.liveUrl && !project.githubUrl && <span className="private-note">Private client project</span>}
        </div>
      </div>
    </div>
  </article>
}
