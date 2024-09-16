import ImagesSlider from '../ImagesSlider';
import './index.css'

function ProjectComponent({projectName, images, projectDescription, link, tecnologies}) {
    const lang = 'en'

    return ( 
        <div className = "project">
            <div className = "project-image">
                <ImagesSlider images = {images}/>
            </div>
            <div className = "project-description">
                <div className = "project-description-text">
                    <span>{projectName}</span>
                    {projectDescription}
                    <div className = "tecnologies-container">
                    {tecnologies.map(tec => <img  key = {tec} alt = "tecnologie" src = {tec}/>)}
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
