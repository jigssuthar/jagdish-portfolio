import SectionTitle from './SectionTitle'
import { skillGroups } from '../data/skills'

export default function Skills() {
  return <section id="skills" className="section skills-section">
    <div className="container">
      <SectionTitle number="05" tag="Tools of the trade" title="A toolkit that gets the job done." copy="The technologies I use to take a product from a blank page to dependable software." />
      <div className="skill-grid">{skillGroups.map((group, index) =>
        <article className="skill-card" key={group.title}>
          <div className="skill-card-heading"><span>0{index + 1}</span><h3>{group.title}</h3></div>
          {group.skills.map(([name, value]) => <div className="skill" key={name}>
            <div><span>{name}</span><small>{value}%</small></div>
            <div className="track"><i style={{ '--level': `${value}%` }} /></div>
          </div>)}
        </article>
      )}</div>
    </div>
  </section>
}
