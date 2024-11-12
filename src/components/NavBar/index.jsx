import "./index.css";

function NavBar() {
  return (
    <div className="navbar">
      <div className="navbar-item">
        <a href = "#home">
          Home
        </a>
      </div>
      <div className="navbar-item">
        <a href = "#about">
          About
        </a>
      </div>
      <div className="navbar-item item-large">
        <a href = "#skills">
          Skills
        </a>
      </div>
      <div className="navbar-item">
        <a href = "#projects">
          Projects
        </a>
      </div>
    </div>
  );
}

export default NavBar;
