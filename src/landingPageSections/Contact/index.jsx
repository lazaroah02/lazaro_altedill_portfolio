import './index.css'
import ContactButtons from '@/components/ContactButtons';

export function Contact({id}) {
    return ( 
        <section className = "contact-card" id = {id}>
            <header>Contact Me</header>
            <ContactButtons/>
        </section>
     );
}

