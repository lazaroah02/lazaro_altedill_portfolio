import MyImage from '@/assets/my-image-homepage.webp'
import './index.css'

export function HomePageImage() {
    return ( 
        <section className = "hompage-image-container">
            <img className = "my-homepage-image" src = {MyImage.src}/>
        </section>
     );
}

