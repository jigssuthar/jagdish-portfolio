const tech = ['Laravel', 'PHP', 'Yii2', 'CodeIgniter', 'Node.js', 'React', 'JavaScript', 'jQuery', 'MySQL', 'HTML5', 'CSS3', 'Bootstrap', 'Tailwind', 'Git', 'GitHub', 'Postman', 'Vite']

export default function TechCloud() {
  return <section className="tech-strip" aria-label="Technologies">
    <div className="container tech-strip-inner">
      <p>THE STACK BEHIND THE WORK</p>
      <div>{tech.map((technology, index) => <span key={technology}><i>0{index + 1}</i>{technology}</span>)}</div>
    </div>
  </section>
}
