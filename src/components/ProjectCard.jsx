function ProjectCard({ title, description, technologies, github, demo }) {
  return (
    <article className="project-card">
      <div className="project-card-top">
        <span className="project-label">PROJECT</span>
      </div>

      <h3>{title}</h3>

      <p>{description}</p>

      <div className="project-technologies">
        {technologies.map((technology) => (
          <span key={technology}>{technology}</span>
        ))}
      </div>

      <div className="project-links">
        <a
          href={github}
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>

        <a
          href={demo}
          target="_blank"
          rel="noreferrer"
        >
          Live Demo
        </a>
      </div>
    </article>
  );
}

export default ProjectCard;