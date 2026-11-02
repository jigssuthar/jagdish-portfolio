import { useState } from 'react'
import SectionTitle from './SectionTitle'
import { profile } from '../data/profile'
import { FiArrowUpRight, FiGithub, FiInstagram, FiLinkedin, FiMail, FiMapPin, FiPhone, FiSend } from 'react-icons/fi'

export default function Contact() {
  const [sent, setSent] = useState(false)
  const submit = event => {
    event.preventDefault()
    setSent(true)
  }

  return <section id="contact" className="section contact-section">
    <div className="container">
      <SectionTitle number="06" tag="Your next move" title="Have something good in mind?" copy="Tell me what you're working on. Let's figure out how to make it real." />
      <div className="contact-grid">
        <div className="contact-details">
          <span className="contact-overline">OPEN FOR A CONVERSATION</span>
          <h3>Let's make it happen.</h3>
          <p>Have a product to build, a problem to solve, or a team that needs an extra pair of hands? My inbox is open.</p>
          <a href={`mailto:${profile.email}`}><FiMail /><span><small>EMAIL</small>{profile.email}</span><FiArrowUpRight /></a>
          <a href={`tel:${profile.phone.replace(/\s/g, '')}`}><FiPhone /><span><small>PHONE</small>{profile.phone}</span><FiArrowUpRight /></a>
          <div><FiMapPin /><span><small>BASED IN</small>{profile.location}</span></div>
          <nav aria-label="Social profiles">{profile.socials.linkedin && <a href={profile.socials.linkedin} aria-label="LinkedIn"><FiLinkedin /></a>}{profile.socials.github && <a href={profile.socials.github} aria-label="GitHub"><FiGithub /></a>}{profile.socials.instagram && <a href={profile.socials.instagram} aria-label="Instagram"><FiInstagram /></a>}</nav>
          <span className="contact-number">06 — SAY HELLO</span>
        </div>
        <form onSubmit={submit}>
          <div className="form-heading"><span>01 / START HERE</span><p>A little context goes a long way.</p></div>
          <div className="form-row"><label>Name<input required name="name" placeholder="Your name" /></label><label>Email<input required type="email" name="email" placeholder="you@example.com" /></label></div>
          <div className="form-row"><label>Phone<input name="phone" placeholder="Your phone" /></label><label>Subject<input required name="subject" placeholder="What's this about?" /></label></div>
          <label>Message<textarea required name="message" rows="5" placeholder="Tell me a little about the project..." /></label>
          <button className="btn" type="submit"><FiSend /> Send a message <FiArrowUpRight /></button>
          {sent && <p className="form-note" role="status">Thanks! This demo form is ready to connect to your preferred email service.</p>}
        </form>
      </div>
    </div>
  </section>
}
