import { profile } from '../data.js'
import useReveal from '../hooks/useReveal.js'

export default function Contact() {
  const ref = useReveal()

  return (
    <section id="contact">
      <div className="wrap">
        <div className="contact reveal" ref={ref}>
          <span className="neon">// keep building big things</span>
          <h2>Let's build something together</h2>
          <p>
            Open to Software Development Engineer roles, internships, and interesting
            collaborations. Drop a note — I usually reply within a day or two.
          </p>
          <div className="contact-ctas">
            <a href={`mailto:${profile.email}`} className="btn btn-primary">
              {profile.email}
            </a>
            <a href={profile.resume} className="btn btn-ghost" download>
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
