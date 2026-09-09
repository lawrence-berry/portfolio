import './Contact.css'

const LINKEDIN_URL = 'https://uk.linkedin.com/in/lawrence-berry-a11790216'

export default function Contact() {
  return (
    <section id="contact" className="section contact">
      <p className="section-label">// Contact</p>
      <h2 className="section-title">Let's talk</h2>
      <p className="section-intro">
        Open to senior, staff and lead full-stack roles — remote only.
      </p>

      <div className="contact__panel panel cut-corners">
        <p className="contact__panel-label mono">// connect</p>
        <h3 className="contact__panel-title">Best way to reach me is LinkedIn</h3>
        <p className="contact__panel-copy">
          No contact details are published on this page — message me there and I'll get back
          to you.
        </p>
        <a
          className="btn btn-solid contact__cta"
          href={LINKEDIN_URL}
          target="_blank"
          rel="noreferrer"
        >
          Connect on LinkedIn ↗
        </a>
      </div>
    </section>
  )
}
