import { aboutMe, education } from '../../language-content-controller'
import Paragraph from '../../components/Paragraph'
import '../general-pages-styles.css'
import './index.css'

function About({id, children}) {
    const lang = 'en'
    return ( 
        <section id = {id} className = "about-content-container">
            <Paragraph title = {aboutMe[lang].title} content = {aboutMe[lang].content}/>
            <Paragraph title = {education[lang].title}>
                <Paragraph 
                    type = {'sub-paragraph'}
                    title = {education[lang].content.education1.title}
                    content = {education[lang].content.education1.content}
                    />
                <Paragraph 
                    type = {'sub-paragraph'}
                    title = {education[lang].content.education2.title}
                    content = {education[lang].content.education2.content}
                    />
                <Paragraph 
                    type = {'sub-paragraph'}
                    title = {education[lang].content.education3.title}
                    content = {education[lang].content.education3.content}
                    />
            </Paragraph>  
            <div class = "certificates-container">
                {children}
            </div>
        </section>
     );
}

export default About;