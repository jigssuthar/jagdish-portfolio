export default function SectionTitle({ number, tag, title, copy }) {
  return <div className="section-title">
    <span className="section-index">{number} <i /> {tag}</span>
    <h2>{title}</h2>
    {copy && <p>{copy}</p>}
  </div>
}
