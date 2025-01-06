import EmailIcon from '@/assets/icons/mail-icon.svg'
import GitubIcon from '@/assets/icons/github-icon.svg'
import LinkedinIcon from '@/assets/icons/linkedin-icon.svg'
import './index.css'

function ContactButtons() {
    return ( 
        <main className = "contact-buttons-container">
            <a className = "contact-button" href = "mailto:lazaroaltedill@gmail.com" target = "_blank" rel="noopener noreferrer">
                <img alt = "email icon" src = {EmailIcon.src}/>
                <p translate='no'>Email</p>
            </a>
            <a className = "contact-button" href = "https://github.com/lazaroah02" target = "_blank" rel="noopener noreferrer">
                <img alt = "github icon" src = {GitubIcon.src}/>
                <p translate='no'>Github</p>
            </a>
            <a className = "contact-button" href = "https://www.linkedin.com/in/lazaro-altedill-546453231" target = "_blank" rel="noopener noreferrer">
                <img alt = "linkedin-icon" src = {LinkedinIcon.src}/>
                <p translate='no'>Linkedin</p>
            </a>
        </main>
     );
}

export default ContactButtons;