import { useNavigate, useLocation } from "react-router-dom";
import { useContext } from "react";
import DropdownLenguageController from "../DropdownLenguageController";
import LanguageContext from "../../context/lenguageContext";
import { navbar } from "../../language-content-controller";
import "./index.css";

function NavBar() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { lang } = useContext(LanguageContext);
  return (
    <div className="navbar">
      <div className="navbar-item">
        <a onClick={() => navigate("/")}>
          {pathname === "/" || pathname === "/#/" ? "/ " : null}
          {navbar[lang].home}
        </a>
      </div>
      <div className="navbar-item">
        <a onClick={() => navigate("/about")}>
          {pathname === "/about" ? "/ " : null}
          {navbar[lang].about}
        </a>
      </div>
      <div className="navbar-item">
        <a onClick={() => navigate("/skills")}>
          {pathname === "/skills" ? "/ " : null}
          {navbar[lang].skills}
        </a>
      </div>
      <div className="navbar-item">
        <a onClick={() => navigate("/projects")}>
          {pathname === "/projects" ? "/ " : null}
          {navbar[lang].projects}
        </a>
      </div>
      <DropdownLenguageController />
    </div>
  );
}

export default NavBar;
