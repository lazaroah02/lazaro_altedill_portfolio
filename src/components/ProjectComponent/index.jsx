import './index.css'
import { useContext, useState, useRef} from 'react';
import LanguageContext from '../../context/lenguageContext';
import {useNavigateItems} from '../../customHooks/useNavigateItems'

function ProjectComponent({projectName, images, projectDescription, link, tecnologies}) {
    const {lang} = useContext(LanguageContext)
    const scrollRef = useRef([])
    const {contador, updateCont, processScrollChange} = useNavigateItems(scrollRef)

    return ( 
        <div className = "project">
            <div className = "project-image">
                <div className = "images-container" ref = {scrollRef} onScroll={processScrollChange}>
                    {images.map((img, index) => <img key = {img} id = {index} alt = "Project-Image" src = {img} />)}
                </div>
                <div className = "images-navigator">
                    {images.map((img, index) => 
                        <div 
                            key = {index + "point"} 
                            className = {contador === index?"images-navigator-point point-active":"images-navigator-point"} 
                            onClick={() => updateCont(index)}>
                        </div>)}
                </div>
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
