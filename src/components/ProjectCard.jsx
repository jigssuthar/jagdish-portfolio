import { FiArrowUpRight, FiGithub, FiCheck } from 'react-icons/fi'
import { useState } from 'react'

export default function ProjectCard({ project, index }) {
  const [imageFailed, setImageFailed] = useState(false)

  return <article className="project-card">
    <div className={`project-art ${project.theme}`}>
      {project.imageUrl && !imageFailed ? <img className="project-home-image" src={project.imageUrl} alt={`${project.title} website design preview`} onError={() => setImageFailed(true)} /> : <div className="browser">
        <div className="browser-top"><i /><i /><i /></div>
        {project.theme === 'news' ? <><div className="news-head">SPEED<span>24</span>NEWS</div><div className="news-layout"><b /><i /><i /><i /></div></> : <><div className="shop-head">Kunj<span>Creation</span></div><div className="products"><i /><i /><i /></div></>}
      </div>}
      <span className="project-no">0{index + 1}</span>
    </div>
    <div className="project-body">
      <span className="project-type">{project.type}</span><h3>{project.title}</h3><p>{project.description}</p>
      <div className="tech-list">{project.technologies.map(technology => <span key={technology}>{technology}</span>)}</div>
      <div className="feature-list">{project.features.slice(0, 4).map(feature => <span key={feature}><FiCheck />{feature}</span>)}</div>
      <div className="project-actions">{project.liveUrl && <a className="btn small" href={project.liveUrl} target="_blank" rel="noreferrer">Live Website <FiArrowUpRight /></a>}{project.githubUrl && <a className="btn ghost small" href={project.githubUrl}><FiGithub /> View Project</a>}{!project.liveUrl && !project.githubUrl && <span className="private-note">Private client project</span>}</div>
    </div>
  </article>
}
