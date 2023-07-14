import NavBar from '../../components/NavBar'
import ContactButtons from '../../components/ContactButtons'
import { SKILLS } from '../../skills.js'
import './index.css'
import '../general-pages-styles.css'

function Skills() {
    return ( 
        <div className = "page-background">
            <NavBar/>
            <section className = "page-content-panel skills-content-container">
                {SKILLS.map(skill => 
                    <div onClick={() => setRotedCard(!rotedCard)}>
                        <img alt = {skill.name} src = {skill.url}/>
                    </div>
                )}
            </section>
            <ContactButtons/>
        </div>
     );
}

export default Skills;