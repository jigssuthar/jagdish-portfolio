import SectionTitle from './SectionTitle'
import ProjectCard from './ProjectCard'
import { projects } from '../data/projects'

export default function Projects() {
  return <section id="projects" className="section projects-section">
    <div className="container">
      <SectionTitle number="03" tag="Selected work" title="A few things I've brought to life." copy="Real products, made for real people and the problems they need to solve." />
      <div className="projects-list">{projects.map((project, index) => <ProjectCard project={project} index={index} key={project.title} />)}</div>
    </div>
  </section>
}
