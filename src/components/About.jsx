import experience from '../../content/experience.json'
import './About.css'

const STATS = [
  { value: '15+', label: 'Years building SaaS products' },
  { value: '13', label: 'Years as founding engineer' },
  { value: '40', label: 'Concurrent client projects at peak' },
]

export default function About() {
  const { profile } = experience

  return (
    <section id="about" className="section about">
      <p className="section-label">// About</p>
      <h2 className="section-title">Full-stack, end to end.</h2>

      <div className="about__grid">
        <div className="about__copy">
          <p>{profile.summary}</p>
          <p className="about__personal">{profile.personal}</p>
        </div>

        <div className="about__stats">
          {STATS.map((stat) => (
            <div key={stat.label} className="about__stat panel cut-corners-sm">
              <span className="about__stat-value mono glow-text">{stat.value}</span>
              <span className="about__stat-label">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
