import MyImage from '@/assets/my-image-homepage.webp';
import './index.css';

export function HomePageImage() {
    return (
        <section id="home" className="hompage-image-container">
            <img className="my-homepage-image" src={MyImage.src} alt = "Lazaro Altedill, Web Full Stack Developer"/>
            <div className="luminous-effect"></div>
        </section>
    );
}