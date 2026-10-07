import ProjectCard from "./ProjectCard";

function Projects() {
  const projects = [
    {
      title: "Portfolio Website",
      description:
        "A personal developer portfolio built to showcase my skills, projects, and experience.",
      technologies: ["React", "JavaScript", "CSS"],
      github: "https://github.com/",
      demo: "https://example.com/",
    },

    {
      title: "Project Two",
      description:
        "A web application built to solve a practical problem and provide a simple user experience.",
      technologies: ["React", "JavaScript", "API"],
      github: "https://github.com/",
      demo: "https://example.com/",
    },

    {
      title: "Project Three",
      description:
        "Another application demonstrating my development skills and ability to build complete features.",
      technologies: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/",
      demo: "https://example.com/",
    },
  ];

  return (
    <section id="projects" className="section projects-section">
      <div className="section-heading">
        <span>02.</span>
        <h2>Projects</h2>
      </div>

      <div className="projects-grid">
        {projects.map((project) => (
          <ProjectCard
            key={project.title}
            title={project.title}
            description={project.description}
            technologies={project.technologies}
            github={project.github}
            demo={project.demo}
          />
        ))}
      </div>
    </section>
  );
}

export default Projects;