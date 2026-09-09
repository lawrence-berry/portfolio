import { useState } from 'react'
import experience from '../../content/experience.json'
import './Clients.css'

const LOGO_DEV_TOKEN = import.meta.env.VITE_LOGO_DEV_TOKEN

function logoUrl(domain, size) {
  if (LOGO_DEV_TOKEN) {
    return `https://img.logo.dev/${domain}?token=${LOGO_DEV_TOKEN}&size=${size}&format=png&retina=true`
  }
  return `https://www.google.com/s2/favicons?domain=${domain}&sz=${size}`
}

function ClientLogo({ name, domain, size }) {
  const [failed, setFailed] = useState(false)

  if (failed) {
    return null
  }

  return (
    <img
      className="client-logo__img"
      src={logoUrl(domain, size)}
      alt={name}
      loading="lazy"
      onError={() => setFailed(true)}
    />
  )
}

export default function Clients() {
  const { clients } = experience

  return (
    <section id="clients" className="section clients">
      <p className="section-label">// Clients</p>
      <h2 className="section-title">Trusted by teams at</h2>
      <p className="section-intro">
        Accounts delivered over 13+ years across geo.me and Pexel — long-term multi-project
        accounts and annual recurring engagements are marked first.
      </p>

      <div className="clients__featured">
        {clients.featured.map((client) => (
          <a
            key={client.name}
            href={`https://${client.domain}`}
            target="_blank"
            rel="noreferrer"
            className="clients__featured-tile panel cut-corners-sm"
          >
            <ClientLogo name={client.name} domain={client.domain} size={128} />
            <span className="clients__tile-name mono">{client.name}</span>
          </a>
        ))}
      </div>

      <div className="clients__other">
        {clients.other.map((client) => (
          <a
            key={client.name}
            href={`https://${client.domain}`}
            target="_blank"
            rel="noreferrer"
            className="clients__other-tile"
          >
            <ClientLogo name={client.name} domain={client.domain} size={64} />
            <span className="clients__tile-name mono">{client.name}</span>
          </a>
        ))}
      </div>
    </section>
  )
}
