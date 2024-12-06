import ImagesSlider from '../ImagesSlider';
import './index.css'

function ProjectComponent({projectName, images, projectDescription, link, tecnologies}) {
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
                    {tecnologies.map(tec => <img title = {tec.name} key = {tec.img} alt = "tecnologie" src = {tec.img}/>)}
                </div>
                </div>
                <div className = "project-description-buttons">
                    {link !== ''?
                        <a className = "visit-site-button" href = {link} target = "_blank">Visit site</a>
                        :null
                    }
                </div>
            </div>
        </div>
     );
}

export default ProjectComponent
