import './index.css'
export function Title() {
  return (
    <section className="homepage-title-container">
      <div className = "title-luminous-effect"></div>
      <h1 className="homepage-title">
        I am <span>Lazaro Altedill</span>
      </h1>
      <h3 className="homepage-subtitle">Freelance Full Stack Developer with over 3 years of experience.</h3>
      <nav className = "homepage-buttons-container">
        <a href = "#projects">My Work</a>
        <a href = "#footer">Contanct Me</a>
      </nav>
    </section>
  );
}

