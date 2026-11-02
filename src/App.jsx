import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Services from './components/Services'
import Skills from './components/Skills'
import TechCloud from './components/TechCloud'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible')
        observer.unobserve(entry.target)
      }
    }), { threshold: 0.1, rootMargin: '0px 0px -35px' })

    document.querySelectorAll('.section, .reveal, .tech-strip, footer').forEach(element => observer.observe(element))
    return () => observer.disconnect()
  }, [])

  return <>
    <Navbar />
    <main>
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Services />
      <Skills />
      <TechCloud />
      <Contact />
    </main>
    <Footer />
  </>
}
