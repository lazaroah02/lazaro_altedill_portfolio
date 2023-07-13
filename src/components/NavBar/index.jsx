import { useNavigate } from 'react-router-dom';
import DropdownLenguageController from '../DropdownLenguageController';
import './index.css'

function NavBar() { 
    const navigate = useNavigate()
    return ( 
        <div className = "navbar">
            <div className = "navbar-item"><a onClick={() => navigate("/")}>Home</a></div>
            <div className = "navbar-item"><a onClick={() => navigate("/about")}>About me</a></div>
            <div className = "navbar-item"><a onClick={() => navigate("/skills")}>Skills</a></div>
            <div className = "navbar-item"><a onClick={() => navigate("/projects")}>Projects</a></div>
            <DropdownLenguageController/>
        </div>
     );
}

export default NavBar;