import NavBar from '../../components/NavBar'
import ContactButtons from '../../components/ContactButtons'
import { useContext } from 'react'
import LanguageContext from '../../context/lenguageContext'
import { projects } from '../../language-content-controller'
import ProjectComponent from '../../components/ProjectComponent'
import '../general-pages-styles.css'
import './index.css'

function Projects() {
    const {lang} = useContext(LanguageContext)
    return ( 
        <div className = "page-background">
            <div className = "page-background-blur-cover">
                <NavBar/>
                <section className = "projects-content-container page-content-panel">
                    <div className = "projects-category">
                        <div>{lang === 'es'?'Profesionales':'Professionals'}</div>
                    </div>
                     
                    <ProjectComponent 
                        projectName={projects.krolNails.name}
                        images={projects.krolNails.images}
                        link={projects.krolNails.link}
                        projectDescription={projects.krolNails.description[lang]}
                        tecnologies={projects.krolNails.tecnologies}
                        />
                        
                    <ProjectComponent 
                        projectName={projects.gummawaka.name}
                        images={projects.gummawaka.images}
                        link={projects.gummawaka.link}
                        projectDescription={projects.gummawaka.description[lang]}
                        tecnologies={projects.gummawaka.tecnologies}
                        />
                    
                    <div className = "projects-category">
                        <div>{lang === 'es'?'Personales':'Personals'}</div>
                    </div>
                     
                    <ProjectComponent 
                        projectName={projects.bestore.name}
                        images={projects.bestore.images}
                        link={projects.bestore.link}
                        projectDescription={projects.bestore.description[lang]}
                        tecnologies={projects.bestore.tecnologies}
                        />
                        
                    <ProjectComponent 
                        projectName={projects.chatcat.name}
                        images={projects.chatcat.images}
                        link={projects.chatcat.link}
                        projectDescription={projects.chatcat.description[lang]}
                        tecnologies={projects.chatcat.tecnologies}
                        />
                    
                </section>
                <ContactButtons/>
            </div>
        </div>
     );
}

export default Projects;