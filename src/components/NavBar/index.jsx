import { navbar } from "../../language-content-controller";
import "./index.css";

function NavBar() {
  const lang = 'en';

  return (
    <div className="navbar">
      <div className="navbar-item">
        <a href = "#home">
          {navbar[lang].home}
        </a>
      </div>
      <div className="navbar-item">
        <a href = "#about">
          {navbar[lang].about}
        </a>
      </div>
      <div className="navbar-item item-large">
        <a href = "#skills">
          {navbar[lang].skills}
        </a>
      </div>
      <div className="navbar-item">
        <a href = "#projects">
          {navbar[lang].projects}
        </a>
      </div>
    </div>
  );
}

export default NavBar;
