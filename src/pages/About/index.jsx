import NavBar from '../../components/NavBar'
import ContactButtons from '../../components/ContactButtons'
import '../general-pages-styles.css'
import './index.css'

function About() {
    return ( 
        <div className = "page-background">
            <NavBar/>
            <section className = "about-content-container page-content-panel">

            </section>
            <ContactButtons/>
        </div>
     );
}

export default About;