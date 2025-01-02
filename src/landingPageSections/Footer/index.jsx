import "./index.css"
import ContactButtons from "@/components/ContactButtons";

function Footer({id}) {
    return ( 
        <section className = "footer-section" id = {id}>
            <div className = "footer-contact-buttons-container">
                <ContactButtons/>
            </div>
        </section>
     );
}

export default Footer;