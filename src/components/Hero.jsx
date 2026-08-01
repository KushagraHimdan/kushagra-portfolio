import heroImg from '../assets/mine.jpg'
import useReveal from '../hooks/useReveal.js'

export default function Hero() {
  const revealRef = useReveal()

  return (
    <section className="hero">
      <div className="wrap">
        <div>
          <div className="eyebrow">
            <span className="blink"></span>available for opportunities
          </div>
          <h1 className="headline">
            Curiosity into <span className="accent">Code.</span>
            <br />
            Code into <span className="accent2">Impact.</span>
          </h1>
          <div className="quote">
            "Today I code.
            <br />
            Tomorrow I <span>build</span>.
            <br />
            The next impact starts here."
          </div>
          <div className="hero-ctas">
            <a href="#projects" className="btn btn-primary">
              View Projects
            </a>
            <a href="#contact" className="btn btn-ghost">
              Get in Touch
            </a>
          </div>
          <div className="hero-badges">
            <span className="badge">React.js</span>
            <span className="badge">Node.js</span>
            <span className="badge">MongoDB</span>
            <span className="badge">TypeScript</span>
            <span className="badge">AI/ML</span>
          </div>
        </div>

        <div className="hero-art reveal" ref={revealRef}>
          <div className="art-glow"></div>
          <div className="art-chip chip-1">function build() {'{}'}</div>
          <div className="art-frame">
            <img src={heroImg} alt="Illustrated portrait of Kushagra Himdan coding at a desk" />
          </div>
          <div className="art-chip chip-2">status: shipping 🚀</div>
        </div>
      </div>
    </section>
  )
}
