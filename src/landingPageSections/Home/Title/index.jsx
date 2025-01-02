import './index.css'
export function Title() {
  return (
    <section className="homepage-title-container">
      <div className = "title-luminous-effect"></div>
      <div className="homepage-title">
        I am <span>Lazaro Altedill</span>
      </div>
      <div className="homepage-subtitle">Full Stack Web Developer</div>
      <div className = "homepage-buttons-container">
        <button>My Work</button>
        <button>Contanct Me</button>
      </div>
    </section>
  );
}

