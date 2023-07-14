import NavBar from '../../components/NavBar'
import ContactButtons from '../../components/ContactButtons'
import '../general-pages-styles.css'
import './index.css'

function Projects() {
    return ( 
        <div className = "page-background">
            <NavBar/>
            <section className = "projects-content-container page-content-panel">
                Projects
            </section>
            <ContactButtons/>
        </div>
     );
}

export default Projects;