function Contact() {
  return (
    <section id="contact" className="section contact-section">
      <div className="section-heading">
        <span>04.</span>
        <h2>Get In Touch</h2>
      </div>

      <div className="contact-content">
        <p className="contact-text">
          Have a project in mind, an opportunity, or just want to say hello?
          Feel free to reach out. I'd be happy to hear from you.
        </p>

        <div className="contact-buttons">
          <a
            href="mailto:your-email@example.com"
            className="btn primary"
          >
            Email Me
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

      <footer className="footer">
        <p>© 2026 Rinvee Betonio. Built with React.</p>
      </footer>
    </section>
  );
}

export default Contact;