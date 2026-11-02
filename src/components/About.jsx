import { FiArrowUpRight, FiCode, FiDownload, FiLayers, FiShield } from 'react-icons/fi'
import { profile } from '../data/profile'
import SectionTitle from './SectionTitle'

const principles = [
  [FiCode, 'Clarity first', 'Readable, maintainable code.'],
  [FiLayers, 'Built to scale', 'Architecture with room to grow.'],
  [FiShield, 'Reliable by design', 'Care in every layer.']
]

export default function About() {
  return <section id="about" className="section about-section">
    <div className="container">
      <SectionTitle number="01" tag="A little about me" title="Good software should feel simple." copy="The thinking behind the work." />
      <div className="about-grid">
        <div className="about-manifest">
          <span className="manifest-overline">A DEVELOPER'S NOTE</span>
          <p className="manifest-quote">I like making complicated things feel <em>clear.</em></p>
          <div className="manifest-signature"><span>JS</span><div><strong>{profile.name}</strong><small>{profile.role}</small></div></div>
          <div className="profile-meta">
            <span>Based in</span><b>{profile.location}</b>
            <span>Experience</span><b>4+ years</b>
            <span>Availability</span><b className="available"><i /> Open to projects</b>
          </div>
        </div>
        <div className="about-copy">
          {profile.about.map(paragraph => <p key={paragraph}>{paragraph}</p>)}
          <div className="principle-list">{principles.map(([Icon, title, description], index) =>
            <div className="principle-row" key={title}><span className="principle-number">0{index + 1}</span><Icon /><b>{title}</b><small>{description}</small><FiArrowUpRight /></div>
          )}</div>
          <a className="text-resume" href={profile.resume} download><FiDownload /> Get my resume <FiArrowUpRight /></a>
        </div>
      </div>
    </div>
  </section>
}
