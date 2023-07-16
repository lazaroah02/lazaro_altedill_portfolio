import './index.css'
import { useContext } from 'react';
import LanguageContext from '../../context/lenguageContext';

function ProjectComponent({projectName, images, projectDescription, link, tecnologies}) {
    const {lang} = useContext(LanguageContext)
    return ( 
        <div className = "project">
            <div className = "project-image">
                <img alt = "Project-Image" src = {images[0]} />
                <div></div>
            </div>
            <div className = "project-description">
                <div className = "project-description-text">
                    <span>{projectName}</span>
                    {projectDescription}
                    <div className = "tecnologies-container">
                    {tecnologies.map(tec => <img alt = "tecnologie" src = {tec}/>)}
                </div>
                </div>
                <div className = "project-description-buttons">
                    {link !== ''?
                        <a className = "visit-site-button" href = {link} target = "_blank">{lang === 'en'?'Visit site':'Visitar sitio'}</a>
                        :null
                    }
                </div>
            </div>
        </div>
     );
}

export default ProjectComponent
