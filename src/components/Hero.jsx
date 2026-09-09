import experience from '../../content/experience.json'
import './Hero.css'

export default function Hero() {
  const { profile } = experience

  return (
    <section id="top" className="hero grid-bg">
      <div className="hero__inner">
        <p className="section-label">// Full-stack developer</p>

        <h1 className="hero__name glitch" data-text={profile.name}>
          {profile.name}
        </h1>

        <p className="hero__role mono">
          {profile.role} — {profile.seeking}
        </p>

        <p className="hero__summary">{profile.summary}</p>

        <div className="hero__actions">
          <a href="#projects" className="btn btn-solid">
            View Work
          </a>
          <a href="#contact" className="btn">
            Request CV
          </a>
        </div>

        <p className="hero__location mono">{profile.location}</p>
      </div>

      <div className="hero__frame" aria-hidden="true">
        <span className="corner corner--tl" />
        <span className="corner corner--tr" />
        <span className="corner corner--bl" />
        <span className="corner corner--br" />
      </div>
    </section>
  )
}
