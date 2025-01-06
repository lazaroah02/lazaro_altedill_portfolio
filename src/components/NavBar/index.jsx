import "./index.css";

function NavBar() {
  return (
    <nav className="navbar">
      <div className="navbar-item">
        <a href = "#home">
          Home
        </a>
        <span></span>
      </div>
      <div className="navbar-item">
        <a href = "#about">
          About
        </a>
        <span></span>
      </div>
      <div className="navbar-item item-large">
        <a href = "#skills">
          Skills
        </a>
        <span></span>
      </div>
      <div className="navbar-item">
        <a href = "#projects">
          Projects
        </a>
        <span></span>
      </div>
    </nav>
  );
}

export default NavBar;
