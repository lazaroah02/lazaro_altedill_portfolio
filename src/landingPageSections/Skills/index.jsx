import { SKILLS } from '../../skills.js'
import './index.css'
import '../general-pages-styles.css'

function Skills({id}) {
    return ( 
        <section id = {id} className = "skills-content-container">
            {SKILLS.map((skill, index) => 
                <div key = {index}>
                    <img alt = {skill.name} src = {skill.url}/>
                </div>
            )}
        </section>
     );
}

export default Skills;