import {
  SiRuby,
  SiRubyonrails,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiGnubash,
  SiDocker,
  SiVagrant,
  SiChef,
  SiCucumber,
  SiJest,
  SiGithubactions,
  SiTravisci,
  SiDotnet,
  SiPython,
  SiHaskell,
  SiC,
  SiCplusplus,
  SiMysql,
  SiPostgresql,
  SiRedis,
  SiAda,
} from 'react-icons/si'
import { FaAws, FaJava } from 'react-icons/fa6'
import experience from '../../content/experience.json'
import './Skills.css'

const ICONS = {
  ruby: SiRuby,
  rails: SiRubyonrails,
  javascript: SiJavascript,
  aws: FaAws,
  typescript: SiTypescript,
  react: SiReact,
  bash: SiGnubash,
  docker: SiDocker,
  vagrant: SiVagrant,
  chef: SiChef,
  cucumber: SiCucumber,
  jest: SiJest,
  githubactions: SiGithubactions,
  travisci: SiTravisci,
  dotnet: SiDotnet,
  java: FaJava,
  python: SiPython,
  haskell: SiHaskell,
  c: SiC,
  cpp: SiCplusplus,
  mysql: SiMysql,
  postgresql: SiPostgresql,
  redis: SiRedis,
  ada: SiAda,
}

function Icon({ name }) {
  const Cmp = ICONS[name]
  return Cmp ? <Cmp aria-hidden="true" /> : null
}

export default function Skills() {
  const { skills } = experience

  return (
    <section id="skills" className="section skills">
      <p className="section-label">// Skills</p>
      <h2 className="section-title">Primary stack, and everything around it.</h2>
      <p className="section-intro">
        Years shown reflect what's tracked explicitly on my CV — everything else is
        listed by proficiency, not guessed at.
      </p>

      <div className="skills__primary">
        {skills.primary.map((s) => (
          <div key={s.name} className="skills__primary-card panel cut-corners">
            <div className="skills__primary-icon">
              <Icon name={s.icon} />
            </div>
            <span className="skills__primary-name">{s.name}</span>
            <span className="skills__primary-years mono">{s.years} yrs</span>
          </div>
        ))}
      </div>

      <div className="skills__groups">
        <SkillGroup title="Core" items={skills.core} />
        <SkillGroup title="Databases" items={skills.database} />
        <SkillGroup title="Testing & CI" items={skills.testing} />
        <SkillGroup title="Infrastructure as Code" items={skills.infra} />
        <SkillGroup title="Also familiar with" items={skills.familiar} centered />
      </div>

      <div className="skills__cloud">
        <span className="skills__cloud-label mono">AWS services —</span>
        <ul className="skills__cloud-list">
          {skills.cloud.map((c) => (
            <li key={c} className="skills__cloud-tag mono">
              {c}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

function SkillGroup({ title, items, centered }) {
  return (
    <div className={`skills__group${centered ? ' skills__group--centered' : ''}`}>
      <h3 className="skills__group-title mono">{title}</h3>
      <ul className="skills__chips">
        {items.map((item) => (
          <li key={item.name} className="skills__chip">
            <Icon name={item.icon} />
            {item.name}
            {item.years && <span className="skills__chip-years mono">{item.years} yrs</span>}
          </li>
        ))}
      </ul>
    </div>
  )
}
