function About() {
  return (
    <section id="about" className="section about-section">
      <div className="section-heading">
        <span>01.</span>
        <h2>About Me</h2>
      </div>

      <div className="about-content">
        <div className="about-text">
          <p>
            I'm a developer who enjoys building modern web applications and
            turning ideas into useful digital experiences.
          </p>

          <p>
            I enjoy learning new technologies, solving problems, and improving
            my skills through real-world projects.
          </p>

          <p>
            My goal is to create software that is not only functional, but
            also simple, intuitive, and enjoyable to use.
          </p>
        </div>

        <div className="about-skills">
          <h3>Technologies I Work With</h3>

          <div className="skill-list">
            <span>HTML</span>
            <span>CSS</span>
            <span>JavaScript</span>
            <span>React</span>
            <span>Git</span>
            <span>GitHub</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;