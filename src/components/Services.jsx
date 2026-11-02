import SectionTitle from './SectionTitle'
import { FiArrowUpRight, FiCode, FiDatabase, FiGrid, FiServer, FiShoppingBag, FiSmartphone, FiTool, FiZap } from 'react-icons/fi'

const services = [
  [FiCode, 'Laravel engineering', 'Secure, maintainable applications shaped around the way your business works.'],
  [FiServer, 'Full stack development', 'Complete web products, from thoughtful data models to polished interfaces.'],
  [FiDatabase, 'API development', 'Reliable APIs for web, mobile and third-party integrations.'],
  [FiShoppingBag, 'eCommerce platforms', 'Flexible storefronts and the tools behind smooth order management.'],
  [FiGrid, 'Admin dashboards', 'Clear, practical dashboards that make everyday operations easier.'],
  [FiTool, 'Ongoing support', 'Dependable maintenance, debugging and post-launch improvements.'],
  [FiZap, 'Performance tuning', 'Find bottlenecks, improve response times and make applications more resilient.'],
  [FiSmartphone, 'Responsive interfaces', 'Consistent experiences across desktops, tablets and phones.']
]

const strengths = ['4+ years in production', 'Practical communication', 'Built for future growth', 'Support beyond launch']

export default function Services() {
  return <section id="services" className="section services-section">
    <div className="container">
      <SectionTitle number="04" tag="What I can do" title="Good work, without the noise." copy="Bring me a challenge. We can work out the right way to build it." />
      <div className="services-layout">
        <div className="services-intro">
          <span className="services-mark">↘</span>
          <p>From first sketch to production-ready software, I help teams move forward with confidence.</p>
          <div className="strength-list">{strengths.map(strength => <span key={strength}><i />{strength}</span>)}</div>
        </div>
        <div className="services-list">{services.map(([Icon, title, description], index) =>
          <article className="service-row" key={title}><span className="service-index">0{index + 1}</span><Icon /><div><h3>{title}</h3><p>{description}</p></div><FiArrowUpRight className="service-arrow" /></article>
        )}</div>
      </div>
    </div>
  </section>
}
