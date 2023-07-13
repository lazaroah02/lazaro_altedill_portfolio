import NavBar from '../../components/NavBar'
import ContactButtons from '../../components/ContactButtons';
import './index.css'

function Home() {
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
                    <div className = "homepage-frase">{'< '}Build the future with your code /{'>'}</div>
                </section>
                <div className = "homepage-contact-buttons-container">
                    <ContactButtons/>
                </div>
            </div>
        </main>
     );
}

export default Home;