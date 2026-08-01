import { skillGroups, certifications } from '../data.js'
import { BadgeIcon } from './icons.jsx'
import useReveal from '../hooks/useReveal.js'

export default function Skills() {
  const headRef = useReveal()
  const windowRef = useReveal()
  const certRef = useReveal()

  return (
    <section id="skills">
      <div className="wrap">
        <div className="section-head reveal" ref={headRef}>
          <div className="kicker">03 — skills</div>
          <h2 className="section-title">What I work with</h2>
        </div>

        <div className="window skills-window reveal" ref={windowRef}>
          <div className="window-bar">
            <span className="win-dot r"></span>
            <span className="win-dot y"></span>
            <span className="win-dot g"></span>
            <span className="win-title">package.json</span>
          </div>
          <div className="window-body">
            {skillGroups.map((group) => (
              <div className="skill-group" key={group.title}>
                <div className="g-title">{group.title}</div>
                <div className="pill-row">
                  {group.skills.map((skill) => (
                    <span className="pill" key={skill}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="cert-strip reveal" ref={certRef}>
          {certifications.map((cert) => (
            <div className="cert" key={cert}>
              <BadgeIcon />
              {cert}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
