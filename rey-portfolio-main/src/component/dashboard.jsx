import '../styles/dashboard.css'

export default function Dashboard() {
  const skillCategories = [
    {
      category: "Frontend",
      skills: ["React", "JavaScript", "HTML/CSS", "Responsive Design", "CSS Animations"]
    },
    {
      category: "Backend",
      skills: ["Node.js", "Express", "MongoDB", "REST APIs", "Authentication"]
    },
    {
      category: "Tools & Others",
      skills: ["Git", "GitHub", "VS Code", "Figma", "Photoshop", "Agile", "C++"]
    }
  ]

  const skillIcons = {
    "C++": "https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg",
    "JavaScript": "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
    "React": "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
    "CSS": "https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg",
    "HTML": "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg",
    "HTML/CSS": "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg",
    "Git": "https://upload.wikimedia.org/wikipedia/commons/3/3f/Git_icon.svg",
    "GitHub": "https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg",
    "VS Code": "https://upload.wikimedia.org/wikipedia/commons/9/9a/Visual_Studio_Code_1.35_icon.svg",
    "Figma": "https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg",
    "Photoshop": "/Photoshop.png",
    "Node.js": "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg",
    "Express": "https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png",
    "MongoDB": "https://upload.wikimedia.org/wikipedia/commons/9/93/MongoDB_Logo.svg",
    "Authentication": "https://upload.wikimedia.org/wikipedia/commons/6/64/Lock-green.svg",
    "Responsive Design": "https://upload.wikimedia.org/wikipedia/commons/4/43/OOjs_UI_icon_device-desktop.svg",
    "CSS Animations": "https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg",
    "REST APIs": "https://upload.wikimedia.org/wikipedia/commons/9/92/OOjs_UI_icon_module.svg"
    
  }

  return (
    <section id="skills" className="dashboard section">
      <div className="container">
        <div className="profile-header">
          <img src="/587634979_18033757961727024_4487459457433113784_n.jpg" alt="Rey Ermino" className="profile-pic" />
          <div className="profile-info">
            <h2 className="profile-name">Rey Ermino</h2>
          </div>
        </div>

        <h2 className="section-title">Skills & Technologies</h2>
        
        <div className="skills-grid">
          {skillCategories.map((category, idx) => (
            <div key={idx} className="skill-category">
              <h3>{category.category}</h3>
              
              <ul className="skill-list">
                {category.skills.map((skill, skillIdx) => (
                  <li key={skillIdx}>
                    {skillIcons[skill] && (
                      <img src={skillIcons[skill]} alt={`${skill} logo`} className="skill-icon" />
                    )}
                    <span className="skill-dot"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="learning-banner">
          <h3>Always Learning</h3>
          <p>I'm constantly expanding my skill set and staying updated with the latest web development trends and technologies.</p>
        </div>
      </div>
    </section>
  )
}
