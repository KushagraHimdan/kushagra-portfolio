import { profile, facts } from '../data.js'
import useReveal from '../hooks/useReveal.js'

export default function About() {
  const headRef = useReveal()
  const windowRef = useReveal()
  const factsRef = useReveal()

  return (
    <section id="about">
      <div className="wrap">
        <div className="section-head reveal" ref={headRef}>
          <div className="kicker">01 — about</div>
          <h2 className="section-title">Who's behind the keyboard</h2>
        </div>

        <div className="window reveal" ref={windowRef}>
          <div className="window-bar">
            <span className="win-dot r"></span>
            <span className="win-dot y"></span>
            <span className="win-dot g"></span>
            <span className="win-title">about.js</span>
          </div>
          <div className="window-body">
            <div>
              <span className="code-key">const</span> developer <span className="code-punc">=</span> {'{'}
            </div>
            <div style={{ paddingLeft: 22 }}>
              <span className="code-key">name:</span> <span className="code-str">"{profile.name}"</span>,
            </div>
            <div style={{ paddingLeft: 22 }}>
              <span className="code-key">role:</span> <span className="code-str">"{profile.role}"</span>,
            </div>
            <div style={{ paddingLeft: 22 }}>
              <span className="code-key">bio:</span> <span className="code-punc">`</span>
            </div>
            <div className="bio-text" style={{ padding: '10px 0 10px 22px' }}>
              {profile.bio}
            </div>
            <div style={{ paddingLeft: 22 }}>
              <span className="code-punc">`</span>
            </div>
            <div>{'}'}</div>
          </div>
        </div>

        <div className="facts reveal" ref={factsRef}>
          {facts.map((f) => (
            <div className="fact" key={f.k}>
              <div className="k">{f.k}</div>
              <div className="v">{f.v}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
