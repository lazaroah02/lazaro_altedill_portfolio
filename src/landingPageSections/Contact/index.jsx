import './index.css'
import SectionNameLabel from '@/components/SectionNameLabel';

export function Contact({id}) {
    return ( 
        <section className = "contact-section" id = {id}>
            <SectionNameLabel>Contact</SectionNameLabel>
        </section>
     );
}

