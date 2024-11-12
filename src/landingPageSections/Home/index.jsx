import NavBar from '../../components/NavBar'
import ContactButtons from '../../components/ContactButtons';
import './index.css'

function Home({id}) {
    return ( 
        <main className = "home-page-background">
            <div id = {id} className = "home-page">
                <NavBar/>
                <section className = "content-homepage-container">
                    <div className = "homepage-title">LAZARO <span>A.</span></div>
                    <div className = "homepage-subtitle">
                        <p><span>•</span> Web Full Stack Developer</p>
                    </div>
                    <div className = "homepage-frase">{"< Build the future with your code />"}</div>
                </section>
                <div className = "homepage-contact-buttons-container">
                    <ContactButtons/>
                </div>
            </div>
        </main>
     );
}

export default Home;