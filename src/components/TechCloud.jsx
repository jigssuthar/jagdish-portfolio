const tech=['Laravel','PHP','Yii2','CodeIgniter','Node.js','React','JavaScript','jQuery','MySQL','HTML5','CSS3','Bootstrap','Tailwind','Git','GitHub','Postman','Vite']
export default function TechCloud(){return <section className="tech-strip" aria-label="Technologies"><div className="container"><p>TECHNOLOGIES I WORK WITH</p><div>{tech.map(t=><span key={t}>{t}</span>)}</div></div></section>}
