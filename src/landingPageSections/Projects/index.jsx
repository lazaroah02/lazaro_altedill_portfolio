import { projects } from '../../language-content-controller'
import ProjectComponent from '../../components/ProjectComponent'
import '../general-pages-styles.css'
import './index.css'

function Projects({id}) {
    const lang = 'en'

    return ( 
        <section id = {id} className = "projects-content-container">
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
                projectName={projects.greennotes.name}
                images={projects.greennotes.images}
                link={projects.greennotes.link}
                projectDescription={projects.greennotes.description[lang]}
                tecnologies={projects.greennotes.tecnologies}
                />

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
     );
}

export default Projects;