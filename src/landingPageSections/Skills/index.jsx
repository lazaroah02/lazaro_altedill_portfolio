import { skills } from '@/my-info.json'
import './index.css'
import '../general-pages-styles.css'
import SectionNameLabel from '@/components/SectionNameLabel';

function Skills({id}) {
    return ( 
        <section id = {id} style = {{paddingTop:"30px"}}>
            <SectionNameLabel>Skills</SectionNameLabel>
            <section className = "skills-content-container">
                {skills.map((skill, index) => 
                    <div key = {index}>
                        <img alt = {skill.name} src = {skill.url} width={150} height={150}/>
                    </div>
                )}
            </section>
        </section>
     );
}

export default Skills;