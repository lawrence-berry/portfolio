import experience from '../../content/experience.json'
import './Timeline.css'

export default function Timeline() {
  const timeline = [...experience.timeline].reverse()

  return (
    <section id="timeline" className="section timeline">
      <p className="section-label">// Timeline</p>
      <h2 className="section-title">Education &amp; experience</h2>
      <p className="section-intro">Most recent first.</p>

      <div className="timeline__track">
        <div className="timeline__line" aria-hidden="true" />
        {timeline.map((item) => (
          <article key={item.id} className="timeline__card panel cut-corners-sm">
            <span className={`timeline__type mono timeline__type--${item.type}`}>
              {item.type === 'education'
                ? 'Education'
                : item.type === 'personal'
                  ? 'Personal'
                  : 'Work'}
            </span>
            <span className="timeline__date mono">{item.date}</span>
            <h3 className="timeline__org">
              {item.orgUrl ? (
                <a href={item.orgUrl} target="_blank" rel="noreferrer">
                  {item.org}
                  <span className="sr-only"> (opens in new tab)</span>
                </a>
              ) : (
                item.org
              )}
            </h3>
            <p className="timeline__role">{item.role}</p>
            {item.bullets.length > 0 && (
              <ul className="timeline__bullets">
                {item.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            )}
          </article>
        ))}
      </div>
    </section>
  )
}
