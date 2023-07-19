import NavBar from '../../components/NavBar'
import ContactButtons from '../../components/ContactButtons'
import { aboutMe, education } from '../../language-content-controller'
import { useContext } from 'react'
import LanguageContext from '../../context/lenguageContext'
import Paragraph from '../../components/Paragraph'
import {certificates} from '../../certificates'
import ImagesSlider from '../../components/ImagesSlider'
import '../general-pages-styles.css'
import './index.css'

function About() {
    const {lang} = useContext(LanguageContext)
    return ( 
        <div className = "page-background">
            <div className = "page-background-blur-cover">
                <NavBar/>
                <section className = "about-content-container page-content-panel">
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
                <div className = "certificates-container">
                    <ImagesSlider images = {certificates}/>
                </div>    
                </section>
                <ContactButtons/>
            </div>
        </div>
     );
}

export default About;