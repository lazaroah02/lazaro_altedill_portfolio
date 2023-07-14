import { useState, useContext } from "react";
import DownIcon from "../../assets/down-icon.svg";
import UpIcon from "../../assets/up-icon.svg";
import EsFlag from "../../assets/es-flag.png";
import EnFlag from "../../assets/en-flag.png";
import LanguageContext from '../../context/lenguageContext'
import "./index.css";

function DropdownLenguageController() {
  const [showDropdown, setShowDropdown] = useState(false);
  const {lang, setLanguage} = useContext(LanguageContext)
  return (
    <div className="idioma-dropdown">
      <div
        className="show-dropdown-button"
        onClick={() => setShowDropdown(!showDropdown)}
      >
        <img alt="up/down icon" src={showDropdown ? UpIcon : DownIcon} />
        <img
          className="flag-image"
          alt="lenguage"
          src={lang === "es" ? EsFlag : EnFlag}
        />
      </div>
      {showDropdown ? (
        <div className="dropdown-items-container">
          <div
            className="dropdown-item"
            onClick={() => {
              {
                setLanguage("es");
                setShowDropdown(false);
              }
            }}
          >
            Es
            <img className="flag-image" alt="es-flag" src={EsFlag} />
          </div>
          <div
            className="dropdown-item"
            onClick={() => {
              setLanguage("en");
              setShowDropdown(false);
            }}
          >
            En
            <img className="flag-image" alt="es-flag" src={EnFlag} />
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default DropdownLenguageController;
