import './Contact.css'

const CONTACT_EMAIL = 'portfolio.willpower575@passinbox.com'

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
        <h3 className="contact__panel-title">Best way to reach me is email</h3>
        <p className="contact__panel-copy">
          Email me directly and I'll get back to you.
        </p>
        <p className="contact__email mono">{CONTACT_EMAIL}</p>
        <a className="btn btn-solid contact__cta" href={`mailto:${CONTACT_EMAIL}`}>
          Send an Email
        </a>
      </div>
    </section>
  )
}
