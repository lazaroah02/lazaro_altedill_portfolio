import EmailIcon from '../../assets/mail-icon.svg'
import GitubIcon from '../../assets/github-icon.svg'
import LinkedinIcon from '../../assets/linkedin-icon.svg'
import './index.css'

function ContactButtons() {
    return ( 
        <main className = "contact-buttons-container">
            <a className = "contact-button" href = "mailto:lazaroaltedill@gmail.com" target = "_blank">
                <img alt = "email" src = {EmailIcon.src}/>
                <p>Email</p>
            </a>
            <a className = "contact-button" href = "https://github.com/lazaroah02" target = "_blank">
                <img alt = "github icon" src = {GitubIcon.src}/>
                <p>Github</p>
            </a>
            <a className = "contact-button" href = "https://www.linkedin.com/in/lazaro-altedill-546453231" target = "_blank">
                <img alt = "linkedin-icon" src = {LinkedinIcon.src}/>
                <p>Linkedin</p>
            </a>
        </main>
     );
}

export default ContactButtons;