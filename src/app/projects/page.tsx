export default function Projects() {
  const projects = [
    {
      title: "Project 1",
      description: "A brief description of your first project",
      technologies: ["React", "Node.js", "MongoDB"],
      link: "#",
    },
    {
      title: "Project 2",
      description: "A brief description of your second project",
      technologies: ["Next.js", "TypeScript", "PostgreSQL"],
      link: "#",
    },
  ];

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">My Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <div 
            key={project.title} 
            className="border border-black/[.08] dark:border-white/[.145] rounded-lg p-6 hover:bg-black/[.02] dark:hover:bg-white/[.02] transition-colors"
          >
            <h2 className="text-xl font-bold mb-2">{project.title}</h2>
            <p className="text-black/70 dark:text-white/70 mb-4">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="text-sm px-3 py-1 rounded-full bg-black/[.05] dark:bg-white/[.06]"
                >
                  {tech}
                </span>
              ))}
            </div>
            <a
              href={project.link}
              className="text-blue-500 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Project →
            </a>
          </div>
        ))}
      </div>
    </div>
  );
} 