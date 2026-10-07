function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <p className="hero-small">Hi, I'm</p>

          <h1>Rinvee Betonio</h1>

          <h2>Software Developer</h2>

          <p className="hero-description">
            I build modern, functional, and user-friendly web applications
            while continuously learning and improving my skills.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="btn primary">
              View My Projects
            </a>

            <a
              href="https://github.com/"
              className="btn secondary"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </div>
        </div>

        <div className="hero-code">
          <div className="code-header">
            <span></span>
            <span></span>
            <span></span>
          </div>

          <pre>
{`const developer = {
  name: "Rinvee Betonio",
  role: "Software Developer",
  passion: "Building useful things",
  learning: true
};`}
          </pre>
        </div>
      </div>
    </section>
  );
}

export default Hero;