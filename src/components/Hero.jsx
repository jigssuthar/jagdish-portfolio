import { FiArrowUpRight, FiDownload, FiMapPin } from 'react-icons/fi'
import { profile } from '../data/profile'

export default function Hero() {
  return <section id="home" className="hero">
    <div className="orb one" /><div className="orb two" />
    <div className="container hero-grid">
      <div className="hero-copy reveal">
        <div className="eyebrow"><span className="pulse" /> {profile.availability}</div>
        <p className="hello">Hi, I'm <strong>Jagdish Suthar</strong></p>
        <h1>Full Stack Developer Building <span>Scalable & Modern</span> Web Applications</h1>
        <p className="lede">I build fast, secure and scalable web applications using Laravel, PHP, React, JavaScript and modern web technologies.</p>
        <div className="hero-actions"><a className="btn" href="#projects">View My Work <FiArrowUpRight /></a><a className="btn ghost" href={profile.resume} download><FiDownload /> Download Resume</a><a className="text-link" href="#contact">Contact Me →</a></div>
        <div className="location"><FiMapPin /> Ahmedabad, Gujarat, India</div>
      </div>
      <div className="dev-visual reveal">
        <div className="profile-photo-frame"><img src="/profile-photo.jpg" alt="Jagdish Suthar" /></div>
        <div className="float-badge badge-laravel">Laravel</div><div className="float-badge badge-react">React</div>
      </div>
    </div>
    <div className="container stats">{[[profile.experience, 'Years Experience'], [profile.projects, 'Projects Delivered'], ['Laravel', 'Specialist'], ['Open', 'For Freelance']].map(([value, label]) => <div key={label}><strong>{value}</strong><span>{label}</span></div>)}</div>
  </section>
}
