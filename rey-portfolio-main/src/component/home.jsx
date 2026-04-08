import '../styles/home.css'

export default function Home() {
  return (
    <section id="home" className="hero">
      <div className="container hero-content">
                
        <h1 className="hero-title">Hi, I'm Rey Ermino</h1>
        
        <p className="hero-subtitle">Web Designer & Creative Problem Solver</p>
        
        <p className="hero-description">
          I build beautiful, responsive web applications with modern technologies. 
          Passionate about creating seamless user experiences and writing clean code.
        </p>
        
        <div className="hero-buttons">
          <a href="#projects" className="btn btn-primary">View My Work</a>
          <a href="#contact" className="btn btn-secondary">Get In Touch</a>
        </div>
      </div>
    </section>
  )
}
