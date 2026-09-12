import experience from '../../content/experience.json'
import './Projects.css'

export default function Projects() {
  const { projects, employers } = experience

  return (
    <section id="projects" className="section projects">
      <p className="section-label">// Projects</p>
      <h2 className="section-title">Selected work</h2>
      <p className="section-intro">
        Client-facing platforms built and maintained via{' '}
        <a href={employers[0].url} target="_blank" rel="noreferrer" className="inline-link">
          {employers[0].name}
          <span className="sr-only"> (opens in new tab)</span>
        </a>
        .
      </p>

      <div className="projects__grid">
        {projects.map((p) => (
          <article key={p.name} className="projects__card panel cut-corners">
            <div className="projects__card-head">
              <h3>{p.name}</h3>
              <a
                href={p.url}
                target="_blank"
                rel="noreferrer"
                className="projects__visit mono"
                aria-label={`Visit ${p.name} (opens in new tab)`}
              >
                Visit ↗
              </a>
            </div>
            <p className="projects__desc">{p.description}</p>
            <div className="projects__stack">
              {p.stack.map((tech) => (
                <span key={tech} className="projects__tech mono">
                  {tech}
                </span>
              ))}
            </div>
            <span className="projects__employer mono">via {p.employer}</span>
          </article>
        ))}
      </div>
    </section>
  )
}
