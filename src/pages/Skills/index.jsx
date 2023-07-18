import NavBar from '../../components/NavBar'
import ContactButtons from '../../components/ContactButtons'
import { SKILLS } from '../../skills.js'
import './index.css'
import '../general-pages-styles.css'

function Skills() {
    return ( 
        <div className = "page-background">
            <div className = "page-background-blur-cover">
                <NavBar/>
                <section className = "page-content-panel skills-content-container">
                    {SKILLS.map(skill => 
                        <div>
                            <img alt = {skill.name} src = {skill.url}/>
                        </div>
                    )}
                </section>
                <ContactButtons/>
            </div>
        </div>
     );
}

export default Skills;