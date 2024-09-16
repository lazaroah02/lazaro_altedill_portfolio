import NavBar from '../../components/NavBar'
import ContactButtons from '../../components/ContactButtons';
import {homeContent} from '../../language-content-controller'
import './index.css'

function Home({id}) {
    const lang = "en"

    return ( 
        <main className = "home-page-background">
            <div id = {id} className = "home-page">
                <NavBar/>
                <section className = "content-homepage-container">
                    <div className = "homepage-title">LAZARO <span>A.</span></div>
                    <div className = "homepage-subtitle">
                        <p><span>•</span> Web Full Stack Developer</p>
                    </div>
                    <div className = "homepage-frase">{homeContent[lang].frase}</div>
                </section>
                <div className = "homepage-contact-buttons-container">
                    <ContactButtons/>
                </div>
            </div>
        </main>
     );
}

export default Home;