import '../styles/about.css'

export default function About() {
  return (
    <section id="about" className="about section">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        
        <div className="about-content">
          <div className="about-image">
            <img src="/587634979_18033757961727024_4487459457433113784_n.jpg" alt="Rey Ermino" className="profile-image" />
          </div>
          <div className="about-text">
            
            
            <p>
              I'm a passionate BSIT student with a strong foundation in web development. 
              I love learning new technologies and applying them to create innovative solutions.
            </p>
            
            <p>
              With experience in Figma, Photoshop, Illustrator,React, JavaScript, and modern CSS frameworks, I focus on web designing and basic frontend development.</p>
            
            <div className="about-highlights">
              <div className="highlight">
                <span className="icon">📚</span>
                <span>Currently learning basic Frontend development</span>
              </div>
              <div className="highlight">
                <span className="icon">💡</span>
                <span>Interested in: Web Design, UX/UI, and Frontend development</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
