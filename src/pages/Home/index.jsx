import NavBar from '../../components/NavBar'
import ContactButtons from '../../components/ContactButtons';
import LanguageContext from '../../context/lenguageContext';
import { useContext } from 'react';
import {homeContent} from '../../language-content-controller'
import './index.css'

function Home() {
    const {lang} = useContext(LanguageContext)
    return ( 
        <main className = "home-page-background">
            <div className = "home-page">
                <NavBar/>
                <section className = "content-homepage-container">
                    <div className = "homepage-title">LAZARO <span>A.</span></div>
                    <div className = "homepage-subtitle">
                        <div>
                            <p><span>•</span> Back end developer</p>
                            <p><span>•</span> Full stack</p>
                        </div>
                        <p> <span>•</span> Front end developer</p>
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