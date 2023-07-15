import NavBar from '../../components/NavBar'
import ContactButtons from '../../components/ContactButtons'
import '../general-pages-styles.css'
import './index.css'

function Projects() {
    return ( 
        <div className = "page-background">
            <div className = "page-background-blur-cover">
                <NavBar/>
                <section className = "projects-content-container page-content-panel">
                    Projects
                </section>
                <ContactButtons/>
            </div>
        </div>
     );
}

export default Projects;