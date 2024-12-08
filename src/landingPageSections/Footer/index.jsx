import "./index.css"
import ContactButtons from "../../components/ContactButtons";

function Footer() {
    return ( 
        <section className = "footer-section">
            <div className = "footer-contact-buttons-container">
                <ContactButtons/>
            </div>
        </section>
     );
}

export default Footer;