import { FiArrowDown, FiArrowUpRight, FiDownload, FiMapPin } from 'react-icons/fi'
import { profile } from '../data/profile'

const specialties = ['Laravel', 'React', 'APIs', 'MySQL']

export default function Hero() {
  return <section id="home" className="hero editorial-hero">
    <div className="hero-grid-pattern" />
    <div className="container hero-frame">
      <div className="hero-kicker">
        <span><i className="pulse" /> Available for select projects</span>
        <span className="hero-coordinate">23°01' N&nbsp; / &nbsp;72°34' E</span>
      </div>
      <h1 className="hero-title" aria-label="Jagdish Suthar"><span>Jagdish</span><span className="hero-surname">Suthar<span className="hero-period">.</span></span></h1>
      <div className="hero-bottom">
        <div className="hero-summary">
          <p className="hero-role">FULL STACK DEVELOPER <span>—</span> AHMEDABAD, INDIA</p>
          <p className="lede">I turn ambitious ideas into useful, dependable web products. From backend architecture to the final pixel, I build for what comes next.</p>
          <div className="hero-actions">
            <a className="btn" href="#projects">Selected work <FiArrowUpRight /></a>
            <a className="text-resume" href={profile.resume} download><FiDownload /> Download resume</a>
          </div>
          <a className="location" href="#about">SCROLL TO EXPLORE <FiArrowDown /></a>
        </div>
        <div className="hero-art" aria-label="Jagdish Suthar developer monogram">
          <div className="art-ring ring-outer" />
          <div className="art-ring ring-inner" />
          <div className="art-cross cross-horizontal" />
          <div className="art-cross cross-vertical" />
          <span className="art-index">JS&nbsp; / &nbsp;2026</span>
          <span className="art-monogram">J<span>S</span></span>
          <span className="art-caption">BUILDING THE<br />INTERNET, THOUGHTFULLY.</span>
          <div className="specialty-list">{specialties.map((specialty, index) => <span key={specialty}><i>0{index + 1}</i>{specialty}</span>)}</div>
        </div>
      </div>
      <div className="proof-strip">
        {[[profile.experience, 'Years in development'], [profile.projects, 'Projects shipped'], ['Full stack', 'From idea to launch'], ['Ahmedabad', 'Working worldwide']].map(([value, label], index) =>
          <div className="proof-item" key={label}><span className="proof-index">0{index + 1}</span><div><strong>{value}</strong><small>{label}</small></div></div>
        )}
      </div>
    </div>
  </section>
}
