import './index.css'
export function Title() {
  return (
    <section className="homepage-title-container">
      <div className = "title-luminous-effect"></div>
      <div className="homepage-title">
        I am <span>Lazaro Altedill</span>
      </div>
      <div className="homepage-subtitle">Full Stack Web Developer</div>
      <nav className = "homepage-buttons-container">
        <a href = "#projects">My Work</a>
        <a href = "#footer">Contanct Me</a>
      </nav>
    </section>
  );
}

