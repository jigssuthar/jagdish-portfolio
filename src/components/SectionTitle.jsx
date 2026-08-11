export default function SectionTitle({tag,title,copy}){return <div className="section-title"><span>{tag}</span><h2>{title}</h2>{copy&&<p>{copy}</p>}</div>}
