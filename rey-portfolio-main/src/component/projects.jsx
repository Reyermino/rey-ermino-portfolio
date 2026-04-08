import '../styles/projects.css'

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "Library Management System",
      description: "A Library Management System (LMS) is software that automates and manages all core library operations, like cataloging books, tracking loans (circulation), managing members, handling acquisitions, and processing returns/fines, essentially acting as a digital backbone for organizing resources, streamlining tasks, and providing quick access to information for both librarians and users.",
      tech: ["React", "CSS", "JavaScript", "PHP", "Mysql"],
      icon: "🛍️"
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A productivity app for managing tasks with categories, priorities, and due dates.",
      tech: ["React", "Local Storage", "CSS"],
      icon: "✅"
    },
 
    {
      id: 4,
      title: "Portfolio Website",
      description: "Responsive portfolio showcasing projects and skills with smooth animations.",
      tech: ["React", "CSS", "Responsive Design"],
      icon: "🎨"
    },
   
  ]

  return (
    <section id="projects" className="projects section">
      <div className="container">
        <h2 className="section-title">My Projects</h2>
        
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-icon">{project.icon}</div>
              
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              
              <div className="project-tech">
                {project.tech.map((tech, idx) => (
                  <span key={idx} className="tech-tag">{tech}</span>
                ))}
              </div>
              
              <a href="#" className="project-link">View Project →</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
